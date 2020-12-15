// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Results from './Results';
import '@testing-library/jest-dom'
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Results are displayed', () => {

    const items = 
        [
            {
                title:'sample product',
                price: {
                    amount: 500,
                    decimal:20,
                    currency: 'ARS',
                },
                location: 'La Plata'
            },
            {
                title:'sample product 2',
                price: {
                    amount: 500,
                    decimal:30,
                    currency: 'ARS',
                },
                location: 'Boedo'
            },
            {
                title:'sample product 3',
                price: {
                    amount: 500,
                    decimal:255,
                    currency: 'ARS',
                },
                location: 'Avellaneda'
            },
            {
                title:'sample product 5',
                price: {
                    amount: 500,
                    decimal:40,
                    currency: 'ARS',
                },
                location: 'Bahía Blanca'
            }
    ]
    const path = [
        {id:"1", name: "cat1"},
        {id:"2", name: "cat2"},
        {id:"3", name: "cat3"}
    ]    

    const {getByText} = render(
        <Results items={items} pathFromRoot={path}/>,
    );

    //breadcrumb for results
    expect(getByText('cat1 > cat2 > cat3')).toBeVisible();
    //title
    expect(getByText('sample product')).toBeVisible();
    //first and last location
    expect(getByText('La Plata')).toBeVisible();
    expect(getByText('Bahía Blanca')).toBeVisible();
    //price
    expect(getByText('$ 500,20')).toBeVisible();
    expect(getByText('$ 500,30')).toBeVisible();
    expect(getByText('$ 500,40')).toBeVisible();
    //test only two decimals
    expect(getByText('$ 500,25')).toBeVisible();
    //test that we don't show more than 4
    
});