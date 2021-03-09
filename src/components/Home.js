import React from 'react';
import { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom';
import GardenModel from '../models/garden'
import Zipcode from './Zipcode'

import Gardens from './Gardens'

const Home = () => {
    const [gardens, setGardens] = useState([])

  
    return (
        <div>
            <Link to='/gardens'>Gardens list</Link>
            <Zipcode />
        </div>
    );
}

export default Home;
