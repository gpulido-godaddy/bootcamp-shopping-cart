import React from 'react';

import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';
import Logo from '../public/images/logo.png';
function Header() {
    

    return (
        <header className="header">
            <img src={require('../public/images/logo.png')} alt="Logo" />
        </header>
    );
}

export default Header;