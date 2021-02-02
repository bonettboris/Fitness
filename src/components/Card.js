import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './style/Card.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (

    //const backgroundImage = { backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`} //Estilos React

    <div className="card mx-auto Fitness-Card mt-5"
    style={{ backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`}}
    >
        <div className="card-boby">
            <div className="row center p-2">
                <div className="col-6">
                    <img src={img || emptyImg} className="float-right pt-1" alt="exercise"/>
                </div>
                <div className="col-5 Fitness-Card-Info pt-2">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>

)

export default Card