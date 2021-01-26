import React from 'react'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'

class ExercisesNewContainer extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        //let emptyObject = {} //objeto vacio
        //emptyObject[e.target.name] = e.target.value //En el objeto asignado tendra el key por el name y asignado el valaor de evento tecleado
        //this.setState(emptyObject) // y esto pasara como parametro al state q es el objecto vacio, estara lleno por los campos asignados.
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    //envio de datos API
    handleSubmit = async e => {
        this.setState({
            loading: true
        })

        e.preventDefault() //No haga reload la pag
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()
            
            console.log(json);

            this.setState({
                loading: false
            })

            this.props.history.push('/exercise') //Ruta de redireccion despues de un post
        }catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        console.log(this.state);
    }

    render(){
        if(this.state.error)
            return <FatalError />

        return <ExerciseNew 
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
    }
}

export default ExercisesNewContainer