import {Box } from "@mui/material";
function Header (){

    return(
     <Box sx={{ m: 2 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      <img style={{width: 100, height: 100}}  src="https://lh3.googleusercontent.com/pw/AP1GczNVAP93h8VsAXu6y1d3td3OyCR0yPtzj_Q7D1lrP1rYyEopSoeKBmu0vv8BAk1UQfDS6CYNHmmXdTYu_8ha5U8G9uW551kwV6uBVCg9m5UtkkRPn8k38p0HgPNXUrgIRZ6rDGmhYz-weT2FwEoBLM4a=w500-h500-s-no-gm?authuser=0"/>
      </Box>
    )
};

export default Header;