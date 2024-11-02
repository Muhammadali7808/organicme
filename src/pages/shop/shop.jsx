import { Box, Container, Grid2, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import shopBanner from '../../assets/image/shop_banner.jpg';
import { DataButtun } from '../../components/ui/button/button';
import { ShopData } from '../../data/shop-data';
import { Link, Link as RouterLink } from 'react-router-dom';
import { OurProductPages } from '../../components/our_to/our_to';



export const Shop = () => {
    return (
        <Box>
            <Box pt={'184px'} pb={'184px'}
                sx={{
                    backgroundImage: `url(${shopBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <Container maxWidth='lg'>
                    <Typography textAlign={'center'} variant='h1'>Shop</Typography>
                </Container>
            </Box>
            <Box pt={'90px'}>
                <Container maxWidth='lg'>
                    <Grid2 container spacing={'20px'} mb={'122px'}>
                        {ShopData.map((item) => (
                            <Grid2
                                key={item.id}
                                size={{ lg: 3 }}
                                borderRadius={'30px'}
                                bgcolor={'#fffefe'}
                                sx={{
                                    width: '355px',
                                    padding: '5px',
                                }}
                            >
                                <DataButtun>{item.text}</DataButtun>
                                <img src={item.image} alt="img" />
                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        marginLeft={'30px'}
                                        variant='h2'
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                                color: '#046d24',
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                                <hr style={{ width: '279px' }} />
                                <Stack direction={'row'} gap={'32px'} alignItems={'center'}>
                                    <Stack marginLeft={'30px'} direction={'row'} gap={'8px'} alignItems={'center'}>
                                        <Typography fontWeight={'600'} fontSize={'16px'} sx={{ textDecoration: 'line-through' }} color='#b8b8b8'>
                                            ${item.price}
                                        </Typography>
                                        <Typography fontWeight={'700'} fontSize={'18px'} color='#274c5b'>
                                            ${item.price_data}
                                        </Typography>
                                    </Stack>
                                    <Rating value={item.rating} precision={1} />
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>
            <OurProductPages/>
        </Box>
    )
}
