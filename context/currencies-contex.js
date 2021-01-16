import * as React from 'react';
import actionTypes from './actionTypes';

const CurrenciesStateContext = React.createContext({});
const CurrenciesDispatchContext = React.createContext({});

const initialState = [];

const currenciesReducer = (state = initialState, action) => {
    const { GET_CURRENCIES_META } = actionTypes;

    switch (action.type) {
        case GET_CURRENCIES_META:
            return { ...state, currencies: action.payload };
        default:
            throw new Error(`Unexpected action type ${action.type}`);
    }
};

const CurrenciesProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(currenciesReducer, initialState);

    return (
        <CurrenciesStateContext.Provider value={state}>
            <CurrenciesDispatchContext.Provider value={dispatch}>
                {children}
            </CurrenciesDispatchContext.Provider>
        </CurrenciesStateContext.Provider>
    );
};

const useCurrenciesState = () => {
    const ctx = React.useContext(CurrenciesStateContext);
    if (ctx === undefined) {
        throw new Error('useBufferState must be used within a BufferProvider!');
    }
    return ctx;
};

const useCurrenciesDispatch = () => {
    const ctx = React.useContext(CurrenciesDispatchContext);
    if (ctx === undefined) {
        throw new Error('useBufferDispatch must be used within a BufferProvider!');
    }
    return ctx;
};

export default { CurrenciesProvider, useCurrenciesState, useCurrenciesDispatch };
