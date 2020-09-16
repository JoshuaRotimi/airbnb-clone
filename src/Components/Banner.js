import React, {useState} from "react";
import '../CSS/Banner.css';
import {Button} from "@material-ui/core";
import Search from "./Search";
import {useHistory} from 'react-router-dom';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    return (
        <div className='banner'>
            {showSearch && <Search/>}
            <div className='banner__search'>
                <Button onClick={() => setShowSearch(!showSearch)} variant='outlined' className='banner__searchButton'>{showSearch ? 'Hide': 'Search Dates'}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and Stretch your imagination</h1>
                <h5>Plan a different kind of getaway to cover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant={'outlined'}>Explore Nearby </Button>
            </div>
        </div>
    )
};

export default Banner;