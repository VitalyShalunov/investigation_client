import { observer } from 'mobx-react';
import { CarPostPayload, CarPutPayload, CarsContext } from '../../store/Cars';
import { useStore } from '../../store/helpers';
import { EditContainerWpapped, ActivityButton } from '../../styles/Cars';
import { Input } from '../../styles/input';

export const EditContainer = observer(({ car }: { car: CarPutPayload | null }) => {
    const store = useStore(CarsContext);
    const { setEditCar, updateCar } = store;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, prop: 'model' | 'manufacturer') => {
        if (car) {
            if (prop === 'model' || prop === 'manufacturer') {
                car[prop] = event.target.value;
            }
        }
    };

    const onCancel = () => {
        console.log('null');
        setEditCar(null);
    }

    const onSave = () => {
        if (car) {
            updateCar(car);
        }
    }

    return (
        <>
            {car ? (
                <EditContainerWpapped className={car ? 'open-edit' : ''} >
                    <Input
                        placeholder={'model'}
                        value={car.model}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, 'model')}
                    />
                    <Input
                        placeholder={'manufacturer'}
                        value={car.manufacturer}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, 'manufacturer')}
                    />
                    <ActivityButton>
                        <Input
                            type="button"
                            value="Cancel"
                            onClick={onCancel}
                        />
                        <Input
                            type="button"
                            value='Save'
                            onClick={onSave}
                        />
                    </ActivityButton>
                </EditContainerWpapped >
            ) : (<></>)}
        </>
    );
});
