import { observer } from 'mobx-react';
import { CarsContext, ICar } from '../../store/Cars';
import { useStore } from '../../store/helpers';
import { CarItem as CarItemWrapped, DeleteIcon } from '../../styles/Cars';

interface ICarItem {
    car: ICar;
    onClick: (car: ICar) => void;
}
export const CarItem = observer(({ car, onClick }: ICarItem) => {
    const store = useStore(CarsContext);
    const { deleteCar } = store;

    return (
        <CarItemWrapped onClick={() => onClick(car)}>
            <div>{car.manufacturer} {car.model}</div>
            <DeleteIcon onClick={(event: React.MouseEvent) => {
                //event.preventDefault();
                event.stopPropagation()
                deleteCar(car.id)
            }} />
        </CarItemWrapped>
    );
});
