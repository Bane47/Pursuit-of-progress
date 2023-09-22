import React from 'react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import flameImage from '../assets/flame-POP-crop.gif';
import '../styles/homepage.css'

const HomePage = () => {
    return (
        <div>
            <div className="container ">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1>Pursuit of progress</h1>
                        <img className='img-fluid flame mt-3' src={flameImage} alt="gif" />
                    </div>
                </div>
                <div className="row fixed-bottom mb-5">
                    <div className="col-12">
                        <h3 className='mb-4'>Streak Day: 7</h3>
                        <div className='btn-main'>
                        <Link to='/stopwatch'><Button label="Power Up!" raised /></Link></div>

                    </div></div>
                    
            </div>
        </div>
    )
}

export default HomePage