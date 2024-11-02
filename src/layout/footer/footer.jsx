import styled from '@emotion/styled'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import LogoHeader from '../../assets/img/img_header.svg';
import { Instagram } from '../../assets/icon/instagram';
import { Fecbook } from '../../assets/icon/fecbook';
import { Twitter } from '../../assets/icon/twitter';
import { Params } from '../../assets/icon/params';
import imgs from '../../assets/image/footet_tag.svg';
export const Footer = () => {
    const FooterTitle = styled.text`
        font-weight: 700;
        font-size: 35px;
        margin-bottom: 32px;
        color: #274c5b;
    `
    const FooterText = styled.text`
        font-weight: 400;
        font-size: 20px;
        color: #525c60;
    `
    const FooterT = styled.div`
        border: 1px solid #d4d4d4;
        width: 2px;
        height: 336px;
    `
    return (
        <Box>
            <Box>
                <Box pb={'103px'}>
                    <Container maxWidth='lg'>
                        <Stack justifyContent={'space-between'} height={'345px'} direction={'row'} >
                            <Box width={'285px'} textAlign={'end'} >
                                <FooterTitle>Contact Us</FooterTitle>
                                <Box mb={'20px'} mt={'32px'}>
                                    <Typography variant='body1' >Email</Typography>
                                    <FooterText>needhelp@Organia.com</FooterText>
                                </Box>
                                <Box mb={'20px'}>
                                    <Typography variant='body1' >Phone</Typography>
                                    <FooterText>666 888 888</FooterText>
                                </Box>
                                <Box>
                                    <Typography variant='body1' >Address</Typography>
                                    <FooterText>88 road, borklyn street, USA</FooterText>
                                </Box>
                            </Box>
                            <FooterT />
                            <Box width={'543px'} >
                                <Box textAlign={'center'} mb={'23px'}>
                                    <img src={LogoHeader} alt="img" />
                                </Box>
                                <Typography fontWeight={'400'} fontSize={'20px'} color='#525c60' textAlign={'center'}>Simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum simply dummy text of the printing </Typography>
                                <Stack justifyContent={'center'} mt={'50px'} direction={'row'} gap={'15px'} alignItems={'center'}>
                                    <IconButton>
                                        <Instagram />
                                    </IconButton>
                                    <IconButton>
                                        <Fecbook />
                                    </IconButton>
                                    <IconButton>
                                        <Twitter />
                                    </IconButton>
                                    <IconButton>
                                        <Params />
                                    </IconButton>
                                </Stack>
                            </Box>
                            <FooterT />
                            <Box width={'285px'} textAlign={'start'} >
                                <FooterTitle>Utility Pages</FooterTitle>
                                <Box mt={'25px'}>
                                    <Box mb={'15px'}>
                                        <FooterText>Style Guide</FooterText>
                                    </Box>
                                    <Box mb={'15px'}>
                                        <FooterText>404 Not Found</FooterText>
                                    </Box>
                                    <Box mb={'15px'}>
                                        <FooterText>Password Protected</FooterText>
                                    </Box>
                                    <Box mb={'15px'}>
                                        <FooterText>Licences</FooterText>
                                    </Box>


                                    <FooterText>Changelog</FooterText>
                                </Box>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </Box>
            <hr />
            <Box textAlign={'center'} mt={'17px'} mb={'23px'}>
                <img src={imgs} alt="img" />
            </Box>
        </Box>
    )
}

