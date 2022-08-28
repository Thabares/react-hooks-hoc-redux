import React from 'react'
import { Provider } from 'react-redux'
import store from "./redux/store"
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

export default function index() {
    return (
        <Provider store={store}>
            <CakeContainer />
            <HooksCakeContainer />
            <IceCreamContainer />
        </Provider>
    )
}

// Actions, Action Containers