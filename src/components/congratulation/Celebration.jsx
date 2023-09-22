import React from 'react'
import '../styles/celebration.css'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize';
import starImage from '../assets/Star.png';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const Celebration = () => {
    const { width, height } = useWindowSize()

    return (
        <div>
            <Confetti
                width={width}
                height={height}
            />

            <h1>Congratulations you have achieved a star!</h1>

            <img className='img-fluid  mt-3' src={starImage} alt="gif" />

           <Link to='/'> <Button label="Continue" raised /> </Link>

        </div>
    )
}

export default Celebration