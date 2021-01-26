import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExercisesNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)


export default App