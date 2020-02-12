import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import MoviesPage from "./components/pages/MoviesPage"

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  )
}

export default AppRouter
