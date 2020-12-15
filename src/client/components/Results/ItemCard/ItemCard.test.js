// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import ItemCard from './ItemCard';
import '@testing-library/jest-dom'
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('ItemCard renders title, location and amount with correct format', () => {

    const item = {
        title:'sample product',
        price: {
            amount: 500,
            decimal:20,
            currency: 'ARS'
        },
        location: 'La Plata'
    }

    const {getByText} = render(
    <ItemCard item={item} />,
    );

    expect(getByText('sample product')).toBeVisible();
    expect(getByText('La Plata')).toBeVisible();
    expect(getByText('$ 500,20')).toBeVisible();

});