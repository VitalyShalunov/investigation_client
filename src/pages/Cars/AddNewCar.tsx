import { observer } from "mobx-react";
import { useState } from "react";
import { CarPostPayload, CarsContext } from "../../store/Cars";
import { useStore } from "../../store/helpers";
import { PlusPopup } from '../../styles/Popup';
import { AddNewCarContainer, DeleteIcon, Input, CreateCarBtn } from '../../styles/Cars';

export const AddNewCar = observer(() => {
    const { setAddCar, newCar, createCar } = useStore(CarsContext);
    const [isShow, setIsShow] = useState<boolean>(false);

    const onChange = (prop: keyof CarPostPayload, value: any) => {
        console.log(newCar);
        
        setAddCar(prop, value);
    };

    const clickCreateCar = () => createCar(newCar);

    const toggleVisibility = () => setIsShow(!isShow);
    return (
        <>
            {!isShow ?
                <PlusPopup onClick={toggleVisibility}><span style={{ fontSize: '25px'}}>+</span></PlusPopup>
                : (
                    <AddNewCarContainer>
                        <DeleteIcon onClick={toggleVisibility}/>
                        <Input
                            placeholder='manufacturer'
                            //value={newCar.manufacturer}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('manufacturer', event.target.value)}
                            />
                        <Input
                            placeholder='model'
                            //value={newCar.model}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('model', event.target.value)}
                        />
                        <CreateCarBtn
                            type='submit'
                            value='Create'
                            onClick={clickCreateCar}
                        />
                    </AddNewCarContainer>
                )
            }
        </>
    )
});