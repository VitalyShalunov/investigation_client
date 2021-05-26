import { Grid } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { ProviderProps } from '../interface/interface';
import { PlusPopup, PopupWindow, InnerPopup, Button } from '../styles/Popup';

export const Popup = observer(({ children }: ProviderProps) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const togglePopup = () => setIsShow(!isShow);

    return (
        isShow === false ? (
            <PlusPopup onClick={togglePopup}><span>Show</span></PlusPopup>
        ) :
            (<PopupWindow>
                <InnerPopup>
                    <Grid container spacing={3}>
                        {children}
                        <Grid item xs={6}>
                            <Button onClick={togglePopup}>Cancel</Button>
                        </Grid>
                    </Grid>
                </InnerPopup>
            </PopupWindow>)
    );
});
