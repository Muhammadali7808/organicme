import React from 'react';
import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import our_1 from '../../assets/image/our_1.png';
import { CustomButton } from '../ui/button/button';

export const OurProductPages = () => {
    return (
        <Box pb={'120px'}>
            <Container maxWidth='lg'>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'105px'} pb={'105px'} pl={'71px'} pr={'71px'} sx={{
                    backgroundImage: `url(${our_1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius:'20px'
                }}>
                    <Typography width={'357px'} variant='h5'>Subscribe to
                        our Newsletter
                    </Typography>
                    <Stack direction={'row'} gap={'6px'} alignItems={'center'}>
                        <TextField sx={{
                            bgcolor:'#fff',
                            borderRadius:'5px',
                            color:'#ababab'
                        }}   placeholder='Your Email Address'/>
                        <CustomButton sx={{
                            width:'220px',
                            height:'73px'
                        }}>Subscribe</CustomButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

