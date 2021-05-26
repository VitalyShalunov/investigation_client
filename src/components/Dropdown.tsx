import { observer } from 'mobx-react';

import React, { useState } from 'react';
import { IDropdownItem } from '../interface/interface';
import { ActiveItemContainer, ItemInput, ArrowIcon, DropdownContainer, DropdownList, ChoosenItemsConteiner, ChoosenItem, ItemSpan } from '../styles/Dropdown';

interface IDropdown {
    list: IDropdownItem[],
    active: IDropdownItem[],
    onChange?: (item: IDropdownItem[]) => void;
}

export const Dropdown = observer(({ list, active, onChange }: IDropdown) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [filteredText, setFilteredText] = useState<string>('');
    console.log('list', list);
    console.log('active', active);
    
    const addActiveItem = (item: IDropdownItem) => {
        //onChange(item);
        console.log('add car');
        
        if (active.findIndex(i => i.id === item.id) === -1 && onChange) {
            active.push(item);
            onChange(active);
        }
    }

    const filterItemsItem = (text: string) => {
        setFilteredText(text.toLocaleLowerCase());
    }
    const deleteItem = (id: number) => {
        if (onChange) {
            active.splice(active.findIndex(i => i.id === id), 1);
            onChange(active);
        }
    }
    return (
        <DropdownContainer>
            <ActiveItemContainer>
                <ItemInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => filterItemsItem(event.currentTarget.value)} />
                <ArrowIcon  className={expanded ? 'expanded' : ''} onClick={() => setExpanded(!expanded)} />
            </ActiveItemContainer>
            <ChoosenItemsConteiner>
                {active.length > 0 &&
                    active.map((item) => {
                        return <ChoosenItem>
                            <span>{item.name}</span><i onClick={() => deleteItem(item.id)}/>
                        </ChoosenItem>
                    })
                }
            </ChoosenItemsConteiner>
            {expanded && <DropdownList>
                {list.filter((i) => i.name.toLocaleLowerCase().includes(filteredText)).map((item) => {
                    return <ItemSpan onClick={() => addActiveItem(item)}>{item.name}</ItemSpan>
                })}
            </DropdownList>
            }
        </DropdownContainer>
    );
});
