import React from  'react'
import './style/AddButton.css'
import buttonImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <Link to="/exercise/new">
            <img src={buttonImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton