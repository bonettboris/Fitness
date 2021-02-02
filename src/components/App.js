import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'
import ExercisesContainer from '../pages/ExercisesConatainer'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer}/>
            <Route exact path="/exercise/new" component={ExercisesNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)


export default App