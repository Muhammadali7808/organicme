import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { OurProductPages } from '../../components/our_to/our_to';
import shopBanner_2 from '../../assets/image/shop_banner_2.jpg';
import about_us_1 from '../../assets/image/about_us_.jpg';
import { CustomButton } from '../../components/ui/button/button';
import { IconButtons } from '../../assets/icon/icon_button';
import { IconAbout_1 } from '../../assets/icon/icon_about_1';
import { IconAbout_2 } from '../../assets/icon/icon_about_2';
import { AboutCards } from '../../page/about/about_cards';
import { Expert } from './expert';
import { AboutDates } from './about_dates';


export const AboutUs = () => {
  return (
    <Box>
      <Box pt={'184px'} pb={'184px'}
        sx={{
          backgroundImage: `url(${shopBanner_2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <Container maxWidth='lg'>
          <Typography textAlign={'center'} variant='h1'>About Us</Typography>
        </Container>
      </Box>
      <Stack justifyContent={'center'} gap={'48px'} pt={'68px'} alignItems={'center'} direction={'row'} >
        <Box>
          <img src={about_us_1} alt="img" />
        </Box>
        <Box>
          <Typography color='#7eb693' fontSize={'36px'} fontWeight={'500'} fontFamily={'Yellowtail'}>About Us</Typography>
          <Typography sx={{
            fontWeight: '800',
            fontSize: '50px',
            mt: '8px',
            mb: '14px',
            color: '#274c5b',
          }}> We do Creative <br /> Things for Success</Typography>
          <Typography width={'671px'} fontWeight={'400'} fontSize={'18px'} color='#525c60' mb={'46px'}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
          <Typography width={'671px'} fontWeight={'400'} fontSize={'18px'} color='#525c60'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
          <Stack direction={'row'} alignItems={'center'} gap={'65px'} mt={'30px'} mb={'46px'}>
            <Stack direction={'row'} alignItems={'center'} gap={'15px'}>
              <IconAbout_1 />
              <Typography width={'226px'} fontWeight={'500'} fontSize={'25px'} color='#274c5b' mb={'7px'}>Modern Agriculture Equipment</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={'15px'}>
              <IconAbout_2 />
              <Typography width={'226px'} fontWeight={'500'} fontSize={'25px'} color='#274c5b'>No growth hormones are used</Typography>
            </Stack>
          </Stack>
          <CustomButton endIcon={<IconButtons />} sx={{
            width: '252=3px',
            height: '80px'
          }} >Explore More</CustomButton>
        </Box>
      </Stack>
      <AboutCards/>
      <Expert/>
      <AboutDates/>
      <OurProductPages />
    </Box>
  )
}

