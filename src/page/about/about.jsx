import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { IconCofe } from '../../assets/icon/icon_cofe';
import { IconPochta } from '../../assets/icon/icon_pochta';
import { CustomButton } from '../../components/ui/button/button';
import about_img from '../../assets/img/about_img.svg';
import { IconButtons } from '../../assets/icon/icon_button';
export const About = () => {
    return (
        <Box bgcolor={'#fbfbfb'} pb={'200px'} pt={'186px'}
        >
            <Container maxWidth='lg'>
                <Stack direction={'row'} gap={'22px'} alignItems={'center'}>
                    <Box>
                        <img src={about_img} alt="img" />
                    </Box>
                    <Box>
                        <Typography color='#7eb693' fontSize={'36px'} fontWeight={'500'} fontFamily={'Yellowtail'}>About Us</Typography>
                        <Typography sx={{
                            fontWeight: '800',
                            fontSize: '50px',
                            mt: '8px',
                            mb: '14px',
                            color: '#274c5b',
                        }}> We Believe in Working Accredited Farmers</Typography>
                        <Typography fontWeight={'500'} fontSize={'18px'} color='#525c60' mb={'46px'}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                        <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                            <IconCofe />
                            <Box>
                                <Typography fontWeight={'800'} fontSize={'25px'} color='#274c5b' mb={'7px'}>Organic Foods Only</Typography>
                                <Typography fontWeight={'500'} fontSize={'18px'} color='#525c60'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</Typography>
                            </Box>
                        </Stack>
                        <Stack direction={'row'} gap={'20px'} alignItems={'center'} mt={'30px'} mb={'46px'}>
                            <IconPochta />
                            <Box>
                                <Typography fontWeight={'800'} fontSize={'25px'} color='#274c5b' mb={'7px'}>Quality Standards</Typography>
                                <Typography fontWeight={'500'} fontSize={'18px'} color='#525c60'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</Typography>
                            </Box>
                        </Stack>
                        <CustomButton endIcon={<IconButtons />} sx={{
                            width: '220px'
                        }} >Shop Now</CustomButton>
                    </Box>
                </Stack>
            </Container >
        </Box >
    )
}

