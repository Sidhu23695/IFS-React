import React, { useReducer } from 'react';

const IfsContext = React.createContext();

export const initialState = {
    isLoggedIn: false,
};

let reducer = (state, action) => {
    switch (action.type) {
        case "loggedIn":
            return {...state, isLoggedIn: action.payload.isSuccess };
        default: 
            return false;
    }
};

function IfsContextProvider (props) {
    console.log('conetxt loading');
    let [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch };
    return (
        <IfsContext.Provider value={value}>{props.children}</IfsContext.Provider>
    );
}

let IfsContextConsumer = IfsContext.Consumer;

export { reducer, IfsContext, IfsContextProvider, IfsContextConsumer };