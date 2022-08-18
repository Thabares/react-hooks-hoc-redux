import React from 'react'
import { Provider } from 'react-redux'
import store from "./redux/store"
import CakeContainer from './components/CakeContainer'

export default function index() {
    return (
        <Provider store={store}>
            <CakeContainer />
        </Provider>
    )
}

// Actions, Action Containers