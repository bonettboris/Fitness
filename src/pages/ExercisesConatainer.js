import React from 'react'
import Exercises from './exercises'
import useFetch from '../Hooks/useFetch'
import url from '../config'

const ExercisesContainer = () => {
    const { data, loading, error } = useFetch(`${url}`)
    return(
        <Exercises loading={loading}
            data={data}
            error={error}
        />
    )
}

export default ExercisesContainer

/*
//Este componenete se encarga de enbeber nuevos componentes, paginas.
class ExercisesContainer extends React.Component {
    
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
        return <Exercises 
            loading={this.state.loading}
            data={this.state.data}
            error={this.state.error}
        />
    }
}

export default ExercisesContainer*/