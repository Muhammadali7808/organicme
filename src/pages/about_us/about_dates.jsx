import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import data_baza_2 from '../../assets/image/data_baza_2.png';
import data_3 from '../../assets/image/dataS_3.png';
import data_4 from '../../assets/image/dataS_4.png';
import data_5 from '../../assets/image/dataS_5.jpg';

export const AboutDates = () => {
    return (
        <Box pb={'141px'}>
            <Box pt={'188px'} pb={'188px'} bgcolor={'#274C5B'}>
                <Container maxWidth='lg'>
                    <Box textAlign={'center'} mb={'33px'}>
                        <Typography fontFamily={'Yellowtail'} mb={'8px'} variant='h3'>About Us</Typography>
                        <Typography variant='body2' color='#fff'>What We Offer for You</Typography>
                    </Box>
                    <Stack direction={'row'} gap={'21px'} alignItems={"center"}>
                        <Box width={'334px'}>
                            <img src={data_4} alt="img" />
                            <Typography variant='h2' color='#fff' textAlign={'center'}>Spicy</Typography>
                        </Box>
                        <Box width={'334px'}>
                            <img src={data_3} alt="img" />
                            <Typography variant='h2' color='#fff' textAlign={'center'}>Nuts & Feesd</Typography>
                        </Box>
                        <Box borderRadius={'20px'} width={'334px'}>
                            <img src={data_5} alt="img" />
                            <Typography variant='h2' color='#fff' textAlign={'center'}>Fruits</Typography>
                        </Box>
                        <Box
                        >
                            <img
                                src={data_baza_2}
                                alt="img" 
                                
                            />
                            <Typography variant="h2" color="#fff" textAlign="center">
                                Vegetable
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>


    )
}

