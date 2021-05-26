import React from 'react';
import { CarsProvider } from '../../store/Cars';
import { Cars } from './Cars';

export const CarsContainer = () => {
    return (
        <CarsProvider>
            <Cars />
        </CarsProvider>
    );
}
