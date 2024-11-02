import { createTheme } from "@mui/material";


export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 300,
            md: 900,
            lg: 1400,
            xl: 1595,
        }
    },
    typography: {
        body1: {
            fontWeight: '700',
            fontSize:'25px',
            color:'#274c5b',
            textDecoration:'none',
        },
        h3:{
            fontWeight:'500',
            fontSize:'36px',
            color:'#68a47f',
        },
        h1:{
            fontWeight:'800',
            fontSize:'74px',
            color:'#274c5b'
        },
        h2:{
            fontWeight:'600',
            fontSize:'20px',
            color:'#274c5b'
        },
        body2:{
            fontWeight:'800',
            fontSize:'50px',
            color:'#274c5b'
        },
        h5:{
            fontWeight:'800',
            fontSize:'50px',
            color:'#fff'
        },
        h6:{
            fontWeight:'400',
            fontSize:'18px',
            color:'#274c5b'
        }
    },
})