import React from 'react'
import '../components/style/Errors.css'
import NotFound404 from '../images/404.png'


const NotFound = () => (
    <div className="text-center">
        <h1 className="title">Error: 404 Not Found</h1>
        <img src={NotFound404} alt="404 Not Found" className="Error_Image"/>
    </div>
)

export default NotFound