// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Detail from './Detail';
import '@testing-library/jest-dom'
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Detail renders required data', () => {

    const detail = {
        title:'sample title',
        price: {
            amount: 40,
            decimal:0,
            currency: 'ARS'
        },
        location: 'La Plata',
        sold_quantity: '3',
        description: 'sample description',
        condition: 'used',   
        description: 'This is a test' 
    }

    const path = [
        {id:"1", name: "cat1"},
        {id:"2", name: "cat2"}
    ]

    const {getByText} = render(
    <Detail detail={detail} path={path} />,
    );

    //show product title
    expect(getByText('sample title')).toBeVisible();
    //format the number and decimal
    expect(getByText('$ 40')).toBeVisible();
    expect(getByText('usado')).toBeVisible();
    expect(getByText('3 vendidos')).toBeVisible();
    expect(getByText('This is a test')).toBeVisible();
    
});