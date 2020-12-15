import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import BreadCrumb from './BreadCrumb';
import '@testing-library/jest-dom'

afterEach(cleanup);

it('ItemCard renders title, location and amount with correct format', () => {

    const path = [
        {id:"1", name: "cat1"},
        {id:"2", name: "cat2"}
    ]

    const {queryByLabelText, getByLabelText, getByText} = render(
    <BreadCrumb path={path} />,
    );

    //show product title
    expect(getByText('cat1 > cat2')).toBeVisible();
    
});