import { Box, Container, Rating, Typography } from '@mui/material';
import React from 'react';
import our_banner from '../../assets/img/our_banner.svg';
import img_07 from '../../assets/img/img_07.svg';
import styled from '@emotion/styled';
import image_1 from '../../assets/image/image_1.svg';
import { DataOur } from '../../data/data_our';

export const OurCard = () => {
    const TyCardData = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 165%;
    text-align: center;
    color: #525c60;
     `
    const OurMap = styled.text`
        font-weight: 500;
        font-size: 15px;
        line-height: 165%;
        text-align: center;
        color: #274c5b;
     `
    return (
        <Box pt={'165px'} pb={'163px'} sx={{
            backgroundImage: `url(${our_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Container maxWidth='lg'>
                <Box textAlign={'center'}>
                    <Typography mb={'8px'} fontFamily={'Yellowtail'} variant='h3'>Testimonial</Typography>
                    <Typography mb={'60px'} variant='body2'>What Our Customer Saying?</Typography>
                    <Box mb={'20px'}>
                        <img src={img_07} alt="img" />
                    </Box>
                    <Rating />
                    <TyCardData style={{
                        marginBottom: '20px',
                        marginTop: '25px'
                    }}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</TyCardData>
                    <Typography variant='h2'>Sara Taylor</Typography>
                    <TyCardData>Consumer</TyCardData>
                    <Box>
                        <img src={image_1} alt="img" />
                    </Box>
                </Box>
                <hr style={{
                    width: '1108px',
                    marginTop: '102px',
                    marginBottom: '102px'
                }} />
                <Box display={'flex'} gap={'52px'} justifyContent={'center'}>
                    {DataOur.map((item) =>
                        <Box width={'221px'} border={'6px solid #7eb693'} borderRadius={'100%'}>
                            <Box borderRadius={'100%'} border={'4px solid #fff'}>
                                <Box textAlign={'center'} width={'200px'} pt={'55px'} pb={'55px'} pl={'37px'} pr={'37px'} borderRadius={'100%'} bgcolor={'#f1f1f1'}>
                                    <Typography variant='body2'>{item.title}</Typography>
                                    <OurMap>{item.text}</OurMap>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

