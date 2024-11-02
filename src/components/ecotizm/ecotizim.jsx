import React from 'react';
import of_5 from '../../assets/offer_img/of_5.svg';
import { Box, Stack, Typography } from '@mui/material';

export const Ecotizim = () => {
    return (
        <Stack overflow={'hidden'} direction={'row'} alignItems={'center'}>
            <Stack width={"50%  "}>
                <img src={of_5} alt="img" />
            </Stack>
            <Stack position={'relative'} width={"50%"}>
                <Stack position={'absolute'} top={'-370px'} left={'-100px'} maxWidth={'789px'} pt={'78px'} pl={'89px'} pb={'77px'} borderRadius={'30px'} bgcolor='#fff'>
                    <Typography fontFamily={"Yellowtail"} variant='h3'>Eco Friendly</Typography>
                    <Typography mb={'35px'} variant='h1'>Econis is a Friendly
                        Organic Store</Typography>
                    <Box>
                        <Stack mb={'35px'}>
                            <Typography fontWeight={500} variant='h3' color='#274c5b'>Start with Our Company First</Typography>
                            <Typography width={'635px'} mt={'7px'} variant='h6'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                        </Stack>
                        <Stack mb={'35px'}>
                            <Typography fontWeight={500} variant='h3' color='#274c5b'>Learn How to Grow Yourself</Typography>
                            <Typography variant='h6' width={'635px'}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontWeight={500} variant='h3' color='#274c5b'>Farming Strategies of Today</Typography>
                            <Typography variant='h6' width={'635px'}>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Stack>

    )
}

