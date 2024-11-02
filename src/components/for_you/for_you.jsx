import { Box, Container, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import { DataButtun, SeconderyButton } from '../ui/button/button';
import { IconButtons } from '../../assets/icon/icon_button';
import { OfferData } from '../../data/data_product';
import { Link } from 'react-router-dom';


export const ForYou = () => {
    return (
        <Box pt={'200px'} pb={'200px'} bgcolor={'#274C5B'}>
            <Container maxWidth='lg'>
                <Box >
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box mb={'50px'}>
                            <Typography fontFamily={'Yellowtail'} variant='h3'>Offer</Typography>
                            <Typography fontWeight={'800'} fontSize={'50px'} color='#fff' mt={'8px'}>We Offer Organic For You</Typography>
                        </Box>
                        <SeconderyButton endIcon={<IconButtons />}>View All Product</SeconderyButton>
                    </Stack>
                    <Stack justifyContent={'center'} direction={'row'} gap={'20px'}>
                        {OfferData.map((item) =>
                            <Box padding={'10px'}
                                borderRadius={'30px'}
                                bgcolor={'#fffefe'}
                                width={'325px'}
                                p={'5px'}
                            >
                                <DataButtun sx={{
                                    marginLeft: '30px'
                                }}>{item.text}</DataButtun>
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
                                <hr style={{
                                    marginLeft: '30px'
                                }} />
                                <Stack direction={'row'} gap={'31px'} alignItems={'center'} sx={{
                                    marginLeft: '30px'
                                }}>
                                    <Stack gap={'8px'} alignItems={'center'} direction={'row'}>
                                        <Typography fontWeight={'600'} fontSize={'16px'} sx={{ textDecoration: 'line-through' }} color='#b8b8b8'>${item.price}</Typography>
                                        <Typography fontWeight={'700'} fontSize={'22px'} color='#274c5b'>${item.price_data}</Typography>
                                    </Stack>
                                    <Rating value={item.rating} precision={1} />
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

