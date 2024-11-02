import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import ban from "../../assets/img/ban.png";
import { SeconderyButton } from '../ui/button/button';
import { IconButtons } from '../../assets/icon/icon_button';
import img_icon from '../../assets/img/img_one.svg';
import img_icon_1 from '../../assets/img/img_two.svg';

export const Banner = () => {
    return (<Box>
        <Box pt={'247px'} pb={'247px'}
            sx={{
                backgroundImage: `url(${ban})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
            <Container maxWidth='lg'>
                <Typography fontFamily={'Yellowtail'} variant='h3'>100% Natural Food</Typography>
                <Typography width={'530px'} mt={'8px'} mb={'23px'} variant='h1'>Choose the best healthier way <br /> of life</Typography>
                <SeconderyButton endIcon={<IconButtons />}>Explore Now</SeconderyButton>
            </Container>

        </Box>
        <Box>
            <Container maxWidth='lg'>
                <Stack justifyContent={'center'} direction={'row'} gap={'36px'} pt={'154px'} pb={'200px'}>
                    <Box pt={'109px'} pb={'110px'} pl={'55px'} sx={{
                        backgroundImage: `url(${img_icon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: '582px',
                        height: '340px'
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontWeight: '500',
                            fontSize: '36px',
                        }} fontFamily={'Yellowtail'}>Natural!!</Typography>
                        <Typography sx={{
                            fontWeight: '800',
                            fontSize: '40px',
                            color: '#fff',
                            width: '270px'
                        }}>Get Garden Fresh Fruits</Typography>
                    </Box>
                    <Box pt={'109px'} pb={'110px'} pl={'55px'} sx={{
                        backgroundImage: `url(${img_icon_1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: '582px',
                        height: '340px'
                    }}>
                        <Typography sx={{
                            color: "#7eb693",
                            fontWeight: '500',
                            fontSize: '36px',
                        }} fontFamily={'Yellowtail'}>Offer!!</Typography>
                        <Typography sx={{
                            fontWeight: '800',
                            fontSize: '40px',
                            color: '#274c5b',
                            width: '270px'
                        }}>Get 10% off
                            on Vegetables</Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    </Box>
    )
}

