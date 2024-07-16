import { Card, Box, CardActions, CardMedia, Grid} from '@mui/material';

function TeamImages(){
    return(
      <Box sx={{ mx: 'auto', width: 1000, pt:2, px:2 }}>
      <img 
      style={{width: 160, height: 160, borderRadius: 160/ 2, marginRight: "15px"}} 
       src='https://lh3.googleusercontent.com/pw/AP1GczOjZ8V8Mw2Z4AqdAO-ZSuZpikttS1K0Qoiacy2qITse51HlLeEwlJqwCAYrcHnvXxJN2n1uySMUsIenDSKCDWYsxsPIG_fcQEgeesgjLgemQnNxAKp1ddB0Koj2p7By-Sb9EgeiUF9HaU-KLXCR5dIN=w1716-h1716-s-no-gm?authuser=0' alt="Gloria"/>
      <img 
      sx={{px:2}}
       style={{width: 160, height: 160, borderRadius: 160/ 2, marginRight: "15px"}} 
        src='https://lh3.googleusercontent.com/pw/AP1GczOroSmie46481JNDmLLKdn16IXMFrJtty7OiaGmN8-CZLfck5RFfQmnvtkRFU8BowhDbuzjRoQXAsxI3Pd3lbQBe_MwSzhV6pMGXzOgIRkKtS7zYDIAuRcDKZymUObXSm_RyBO_UVa4CNJZHYoQ_BPI=w1254-h1252-s-no-gm?authuser=0'
      alt="Temple"/>
      </Box>
    )

}

export default TeamImages;