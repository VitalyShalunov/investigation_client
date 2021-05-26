import { observer } from 'mobx-react';
import { ICar } from '../../store/Cars/Cars.interface';
import { Header } from '../../components/Header';
import { CarPutPayload, CarsContext } from '../../store/Cars';
import { CarsPage, CarsContainer, ListAndEditContainer } from '../../styles/Cars';
import { useStore } from '../../store/helpers';
import { Pages } from '../../store/helpers/arrayPages';
import { CarItem, EditContainer, AddNewCar } from './';

export const Cars = observer(() => {
    const store = useStore(CarsContext);
    const { cars, editCar, setEditCar, state } = store;

    const onChooseCar = (car: ICar) => {
        setEditCar(car);
    }
    return (
        <CarsPage>
            <Header activePage={Pages.Cars} />
            {state === 'loaded'
                && <ListAndEditContainer>
                    <CarsContainer>
                        {cars ?
                            cars.map((car: ICar) => {
                                return <CarItem car={car} key={car.id} onClick={onChooseCar} />
                            })
                            : 'cars aren\'t found'}
                    </CarsContainer>
                    <EditContainer car={editCar ? editCar as CarPutPayload : null} />
                </ListAndEditContainer>}
            {state === 'error'
                && <span>Error</span>
            }
            <AddNewCar />
        </CarsPage>
    );
});
