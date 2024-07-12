import React from 'react';

import { Card, Button, CardContent, CardActions, CardMedia, Typography} from '@mui/material';
function Header() {
    //<img src={require('../public/images/logo.png')} alt="Logo" />
            

    return (
        <header className="header">
            
            
            <CardMedia
                style={{ height: "140px"}}
                image='http://localhost:8080/images/logo.png'
                
            />
        </header>
    );
}
export default Header;