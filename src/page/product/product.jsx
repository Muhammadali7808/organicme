import { Box, Container, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import { ProductData } from '../../data/data_product';
import { Rating } from '@mui/material';
import { CustomButton } from '../../components/ui/button/button';
import { IconButtons } from '../../assets/icon/icon_button';
import { DataButtun } from '../../components/ui/button/button';
import { Link } from 'react-router-dom';
export const Product = () => {
    return (
        <Box pt={'176px'} pb={'200px'}>
            <Container maxWidth="lg">
                <Box>
                    <Typography fontFamily={'Yellowtail'} textAlign={'center'} color='#7eb693' fontWeight={'500'} fontSize={'36px'}>Categories </Typography>
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: '50px',
                        mt: '8px',
                        mb: '14px',
                        color: '#274c5b',
                        textAlign: 'center'
                    }}>Our Products</Typography>
                    <Grid2 container spacing={'20px'} mb={'122px'}>
                        {ProductData.map((item) => (
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
                </Box>
                <Box textAlign={'center'}>

                    <CustomButton endIcon={<IconButtons />}>Explore Now</CustomButton>
                </Box>

            </Container>
        </Box>
    )
}

