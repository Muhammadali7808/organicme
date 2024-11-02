import { Link, useParams } from 'react-router-dom';
import { OfferData, ProductData, ProductData_1 } from '../../data/data_product'; // Mahsulot ma'lumotlarini import qilish
import { Box, Container, Rating, Stack, Typography } from '@mui/material';
import { CustomButton, DataButtun, ProductButton } from '../../components/ui/button/button';
import { QuantityButtun } from '../../components/ui/button/button';
import { IconButtons } from '../../assets/icon/icon_button';
import img_001 from '../../assets/offer_img/img_001.jpg';
import { OurProductPages } from '../../components/our_to/our_to';
import { ShopData } from '../../data/shop-data';

export const ProductDetail = () => {


    const { id } = useParams();
    const product = 
    ProductData.find(item => item.id === parseInt(id)) || 
    ShopData.find(item => item.id === parseInt(id)) || 
    OfferData.find(item => item.id === parseInt(id));


    if (!product) {
        return <div>Mahsulot topilmadi.</div>;
    }

    return (
        <Box>
            <Box pt={'184px'} pb={'184px'}
                sx={{
                    backgroundImage: `url(${img_001})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <Container maxWidth='lg'>
                    <Typography variant='h1' textAlign={'center'}>Shop Single</Typography>
                </Container>
            </Box>
            <Container maxWidth='lg'>
                <Stack pt={'133px'} pb={'90px'} direction={'row'} gap={'90px'} justifyContent={'center'} alignItems={'center'}>
                    <Box bgcolor={'#fffefe'} sx={{
                        width: '500px',
                        padding: '34px',
                        border: '1px solid #e3e3e3',
                        borderRadius: '10px'
                    }}>
                        <DataButtun sx={{
                            marginBottom: '10px',
                            marginRight: '10px'
                        }}>{product.text}</DataButtun>
                        <Box textAlign={'center'}>
                            <img src={product.image} alt='img' />
                        </Box>
                    </Box>
                    <Box>
                        <Typography mb={'9px'} variant="body2">{product.title}</Typography>
                        <Rating value={product.rating} precision={1} />
                        <Stack mb={'27px'} direction={'row'} gap={'10px'} alignItems={'center'}>
                            <Typography fontSize={'20px'} sx={{ textDecoration: 'line-through' }} fontWeight={'600'} color='#b8b8b8'>${product.price}</Typography>
                            <Typography variant='body1'>${product.price_data}</Typography>
                        </Stack>
                        <Typography mb={'35px'} fontWeight={'500'} fontSize={'18px'} color='#525c60'>Simply dummy text of the printing and typesetting industry. Lorem had <br /> ceased to been the industry's standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley.</Typography>
                        <Stack direction={'row'} alignItems={'center'} gap={'22px'}>
                            <Link key={product.id} to={'/'} style={{
                                fontWeight: '600',
                                fontSize: '30px',
                                color: '#274c5b',
                                textDecoration: 'none'
                            }} variant='body1'>Quantity :</Link>
                            <QuantityButtun>1</QuantityButtun>
                            <CustomButton sx={{
                                width: '245px',
                                height: '95px'
                            }} endIcon={<IconButtons />}>Add To Cart</CustomButton>
                        </Stack>
                    </Box>
                </Stack>
                <Box pb={'140px'}>
                    <Stack mb={'27px'} direction={'row'} gap={'20px'} alignItems={'center'} justifyContent={'center'}>
                        <CustomButton sx={{
                            width: '363px',
                            height: '85px'
                        }}>Product Description</CustomButton>
                        <ProductButton>Additional Info</ProductButton>
                    </Stack>
                    <Typography fontWeight={'500'} fontSize={'18px'} color='#525c60' textAlign={'center'}>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</Typography>
                </Box>
                <Box pb={'140px'}>
                    <Typography variant='body2' textAlign={'center'} mb={'40px'}>Related Products</Typography>
                    <Stack direction={'row'} gap={'20px'} alignItems={'center'} justifyContent={'center'}>
                        {ProductData_1.map((item) =>
                            <Box padding={'10px'}
                                borderRadius={'30px'}
                                bgcolor={'#fffefe'}
                                sx={{
                                    width: '395px',
                                    padding: '5px',
                                }}>
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
                                <Stack direction={'row'} gap={'51px'} alignItems={'center'} sx={{
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
                <OurProductPages />
            </Container>
        </Box>
    );
};

