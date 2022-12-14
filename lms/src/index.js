import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import 'react-toastify/dist/ReactToastify.css'
import { HashRouter } from 'react-router-dom'
import { registerLicense } from '@syncfusion/ej2-base'

registerLicense(
  'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGJWf1tpR2NbfU50flBDallSVAciSV9jS3xSdkRqWXpednFUTmRYUA==',
)

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
