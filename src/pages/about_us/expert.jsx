import { Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React from 'react';
import expert_1  from '../../assets/image/expert.jpg';
import expert_2  from '../../assets/image/expert_1.jpg';
import expert_3  from '../../assets/image/expert_3.jpg';
import IconEx from '../../assets/icon/icon_ex';
import IconEx_2 from '../../assets/icon/icon_ex_2';

export const Expert = () => {
    return (
        <Box pt={'177px'} pb={'202px'}>
            <Container>
                <Box mb={'42px'} textAlign={'center'}>
                    <Typography variant='h3' fontFamily={'Yellowtail'}>Team</Typography>
                    <Typography variant='body2' mb={'16px'} mt={'5px'}>Our Organic Experts</Typography>
                    <Typography variant='h6' >Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                </Box>
                <Stack direction={'row'} gap={'27px'}>
                    <Box pb={'34px'}>
                        <img src={expert_1} alt="img" />
                        <Typography variant='body1' mt={'35px'} mb={'5px'}>Giovani Bacardo</Typography>
                        <Stack width={'449px'} justifyContent={'space-between'} direction={'row'} alignItems={'center'} >
                            <Typography fontFamily={'Yellowtail'} color='#7eb693' variant='h2'>Farmer</Typography>
                            <Stack direction={'row'} gap={'15px'} >
                                <IconEx/>
                                <IconEx_2/>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box pb={'34px'}>
                        <img src={expert_2} alt="img" />
                        <Typography variant='body1' mt={'35px'} mb={'5px'}>Giovani Bacardo</Typography>
                        <Stack width={'449px'} justifyContent={'space-between'} direction={'row'} alignItems={'center'} >
                            <Typography fontFamily={'Yellowtail'} color='#7eb693' variant='h2'>Farmer</Typography>
                            <Stack direction={'row'} gap={'15px'} >
                                <IconEx/>
                                <IconEx_2/>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box pb={'34px'}>
                        <img src={expert_3} alt="img" />
                        <Typography variant='body1' mt={'35px'} mb={'5px'}>Giovani Bacardo</Typography>
                        <Stack width={'449px'} justifyContent={'space-between'} direction={'row'} alignItems={'center'} >
                            <Typography fontFamily={'Yellowtail'} color='#7eb693' variant='h2'>Farmer</Typography>
                            <Stack direction={'row'} gap={'15px'} >
                                <IconEx/>
                                <IconEx_2/>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

