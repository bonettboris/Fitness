import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AbbButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'

//Este componenete se encarga de enbeber nuevos componentes, paginas.
class Exercises extends React.Component {
    
    state = {
        data: [],
        loading: true,
        error: null
    }

    //Consumir un API Rest
    async componentDidMount(){
        await this.fetchExercises()
    }

    //Consumir un API Rest
    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let  data = await res.json()

            this.setState({
                data,
                loading: false
            })
            console.log(data);
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        //validación de error y carga
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError />

        //Accedo por destructuring a la data
        const { data } = this.state
        return(
            <React.Fragment>
                <Welcome username="Boris" />
                <ExerciseList exercises={data} />
                <AbbButton />
            </React.Fragment>
        )
    }
}

export default Exercises