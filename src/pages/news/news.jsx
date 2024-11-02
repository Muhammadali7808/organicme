import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import bannerNews from '../../assets/icons/banner_news.png';
import { Expert } from '../about_us/expert';
import { OurProductPages } from '../../components/our_to/our_to';

export const News = () => {
    return (
        <Box>
            <Box pt={'160px'} pb={'208px'} sx={{
                backgroundImage: `url(${bannerNews})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Container maxWidth='lg'>
                    <Box>
                        <Typography variant='h1' textAlign={'center'}>Our Team</Typography>
                    </Box>
                </Container>
            </Box>
            <Expert />
            <OurProductPages/>
        </Box>

    )
}