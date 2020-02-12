import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./AppRouter"
import setupStore from "./redux/setupStore"
import { Provider } from "react-redux"
import "./styles/main.scss"

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-primary">Movie App</h1>
    </Provider> )
}

export default App
