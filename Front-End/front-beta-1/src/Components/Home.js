import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './components.css'

export const Home = () => {
    return (
        <div className='home text-center '>
          <h1 className='display-1 '> Humans of ANDC </h1>
          <p className='lead'>Welcome to the prebuild version of our website.</p>
          <button type="button" className="btn btn-dark">
            <Link to='/Form' style={{color:'inherit',textDecoration:'none'}}>Form</Link>
          </button>
        </div>
    )
}
