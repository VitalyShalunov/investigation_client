import { observable, action, makeObservable } from 'mobx';
import { createPayloadObject, deleteFunctionApi, fetchFunctionApi, postFunctionApi, putFunctionApi } from '../helpers';
import { CarGetPayload, CarPostPayload, CarPutPayload, ICar } from './Cars.interface';

export class CarsDataStore {
    public cars: ICar[] = [];
    public state: 'loading' | 'loaded' | 'error' = 'loading';

    constructor() {
        makeObservable(this, {
            state: observable,
            cars: observable,
            editCar: observable,
        });
        this.loadCars();
    }

    public editCar: CarPostPayload | null = null;
    public newCar: CarPostPayload = {
        manufacturer: '',
        model: ''
    };

    public setAddCar = (key: keyof CarPostPayload, value: any) => {
        if (this.newCar) {
            this.newCar[key] = value;
        }
    }
    public setEditCar = (car: ICar | null) => {
        this.editCar = car ? {...car} : null;
    }
    public async loadCars() {
        this.state = 'loading';

        try {
            const cars = await fetchFunctionApi<CarGetPayload[]>('/cars');

            if (cars) {
                this.cars = cars;
                console.log('this.cars', this.cars);

                this.state = 'loaded';
            } else {
                console.error('Could not get cars from the response payload.');
                this.state = 'error';
            }
        } catch (error) {
            console.error('Unexpected error has occurred when loading cars.', error);
            this.state = 'error';
        }
    }

    updateCar = async(editCar: CarPutPayload) => {
        try {
            const carForRequest: ICar = createPayloadObject<ICar>(editCar);

            const car = await putFunctionApi<CarPutPayload>(`/cars/${editCar.id}`, carForRequest);
            console.log('updatedCar', car);
            console.log('this.cars', this.cars);
            
            if (car && typeof car === 'object') {
                this.cars.splice(this.cars.findIndex((car) => car.id === carForRequest.id), 1, car);
            } else {
                console.error(`Could not update car with id ${carForRequest.id}.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error', error);
            console.error(`Unexpected error has occurred when editing car with id=${editCar.id}.`, error);
            this.state = 'error';
        }
    }

    createCar = async(newCar: CarPostPayload) => {
        try {
            const carForRequest: CarPostPayload = createPayloadObject<CarPostPayload>(newCar);

            const car = await postFunctionApi<ICar>(`/cars`, carForRequest);
            console.log('createdCar', car);
            console.log('this.cars', this.cars);
            
            if (car && typeof car === 'object') {
                this.cars.push(car);
            } else {
                console.error(`Could not create car.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error', error);
            console.error(`Unexpected error has occurred when creating car.`, error);
            this.state = 'error';
        }
    }

    deleteCar = async(id: number) => {
        try {
            const car = await deleteFunctionApi<CarGetPayload>(`/cars/${id}`);

            if (car && typeof car === 'object') {
                this.cars.splice(this.cars.findIndex((u) => u.id === id), 1);
            } else {
                console.error(`Could not delete user with id ${id}.`);
                this.state = 'error';
            }
        } catch (error) {
            console.log('error');
            console.error(`Unexpected error has occurred when deleting user with id=${id}.`, error);
            this.state = 'error';
        }
    }
}
