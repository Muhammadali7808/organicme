import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import food_1 from '../../assets/offer_img/food_1.svg';
import food_2 from '../../assets/offer_img/food_2.svg';
import food_3 from '../../assets/offer_img/food_3.svg';
import { FoodButtun } from '../ui/button/button';

export const Food = () => {
    return (
        <Box overflow={'hidden'} pt={'187px'} pb={'187px'} bgcolor={'#f1f8f4'}>
            <Container maxWidth='lg'>
                <Stack direction={'row'} gap={'42px'} justifyContent={'center'}>
                    <Box sx={{
                        backgroundImage: `url(${food_1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        padding:'200px 157px'
                    }}>
                        <FoodButtun sx={{
                            width:'320px'
                        }}>Organic Juice</FoodButtun>
                    </Box>
                    <Box sx={{
                        backgroundImage: `url(${food_2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        padding:'200px 157px'
                    }}>
                        <FoodButtun sx={{
                            width:'320px'
                        }}>Organic Food</FoodButtun>
                    </Box>
                    <Box sx={{
                        backgroundImage: `url(${food_3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        padding:'200px 157px'
                    }}>
                        <FoodButtun sx={{
                            width:'320px'
                        }}>Nuts Cookis</FoodButtun>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

