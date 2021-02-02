import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AbbButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

//Accedo por destructuring a la data    
const Exercises = ({loading ,data, error}) => (
    //validación de error y carga
    error ? <FatalError /> :
    loading ? <Loading /> :
    <React.Fragment>
        <Welcome username="Boris" />
        <ExerciseList exercises={data} />
        <AbbButton />
    </React.Fragment>
)

export default Exercises