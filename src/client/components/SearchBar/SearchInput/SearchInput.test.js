// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom'
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('SearchInput change its value', () => {

    const {getByText, getByTestId} = render(
    <SearchInput/>,
    );

    document.addEventListener = jest.fn((event, cb) => {
        console.log(event)
        console.log(cb)
        events[event] = cb;
    });

    fireEvent.change(getByTestId('search-input'), { target: { value: 'AUTO' } })
    expect(getByTestId('search-input')).toHaveValue('AUTO');

    
});