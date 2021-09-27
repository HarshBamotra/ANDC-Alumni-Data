import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h2>Welcome to the prebuild version of our website.</h2>
            <Button color="primary" variant="contained">
                <Link to='/form'>Forms</Link>
            </Button>
        </div>
    )
}
