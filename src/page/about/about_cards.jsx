import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import botstrap from '../../assets/image/botstrap.jpg';
import { ShopsBtn } from '../../components/ui/button/button';
import { IconShops } from '../../assets/icon/icon_shops';
import { Police } from '../../data/shop-data';

export const AboutCards = () => {
  return (
    <Box bgcolor={'#f9f8f8'} pt={'190px'} pb={'190px'}>
      <Container maxWidth='lg'>
        <Stack mb={'91px'} justifyContent={'center'} direction={'row'} gap={'51px'} alignItems={'center'}>
            <Box>
                <Typography variant='h3' fontFamily={'Yellowtail'}>Why Choose us?</Typography>
                <Typography mt={'8px'} mb={'25px'} variant='body2'>We do not buy from the open market & traders.</Typography>
                <Typography color='#525c60' mb={'36px'} variant='h6'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Typography>
                <ShopsBtn startIcon={<IconShops/>}>100% Natural Product</ShopsBtn>
                <Typography ml={'60px'} mt={'12px'} mb={'24px'} color='#525c60' variant='h6'>Simply dummy text of the printing and typesetting <br /> industry Lorem Ipsum</Typography>
                <ShopsBtn startIcon={<IconShops/>}>100% Natural Product</ShopsBtn>
                <Typography ml={'60px'} mt={'12px'} color='#525c60' variant='h6'>Filling, and temptingly healthy, our Biona Organic <br /> Granola with Wild Berries is just the thing</Typography>
            </Box>
            <Box>
                <img src={botstrap} alt="img" />
            </Box>
        </Stack>
        <Stack direction={'row'} gap={'30px'} justifyContent={'center'}>
            {Police.map((item) =>
                <Box width={'260px'} textAlign={'center'} borderRadius={'30px'} bgcolor={'#fff'} pt={'50px'} pl={'37px'} pr={'37px'} pb={'20px'}>
                    <img src={item.img} alt="img" />
                    <Typography variant='body1' mb={'12px'} mt={'15px'}>{item.title}</Typography>
                    <Typography variant='h6'>{item.text}</Typography>
                </Box>
            )}
        </Stack>
      </Container>
    </Box>
  )
}

