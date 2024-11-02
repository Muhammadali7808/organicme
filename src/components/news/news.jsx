import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { SeconderyButton, PrametrayButton } from "../ui/button/button";
import { IconButtons } from "../../assets/icon/icon_button";
import img_007 from '../../assets/offer_img/img_007.svg';
import img_008 from '../../assets/offer_img/img_008.svg';
import img_009 from '../../assets/offer_img/img_009.svg';
export const News = () => {
    return (
        <Box pb={"185px"} pt={'177px'}>
            <Container>
                <Stack>
                    <Box
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Typography variant="h3" mb={"8px"} fontFamily={"Yellowtail"}>News</Typography>
                        <Stack direction={'row'}justifyContent={'space-between'} alignItems={'center'}>
                            <Typography sx={{
                                width: '708px'
                            }} variant="body2" width={"700px"}>
                                Discover weekly content about organic food, & more
                            </Typography>
                            <PrametrayButton
                                endIcon={<IconButtons />}>
                                More News
                            </PrametrayButton>
                        </Stack>
                    </Box>
                    <Stack
                        position={"relative"}
                        direction={"row"}
                        gap={"46px"}
                        mt={"48px"}
                    >
                        <Stack>
                            <img src={img_007} alt="" />
                            <Stack
                                sx={{
                                    position: "absolute",
                                    top: "262px",
                                    left: "32px",
                                    borderRadius: "31px 34px 30px 30px",
                                    padding: "46px 57px 60px 57px",
                                    width: 613,
                                    height: 330,
                                    boxShadow: "0 20px 35px 0 rgba(167, 167, 167, 0.25)",
                                    background: "#fff",
                                }}
                            >
                                <Stack
                                    direction={"row"}
                                    gap={"8px"}
                                    alignItems={"center"}
                                    mb={"15px"}
                                >
                                    <img src={img_008} alt="img" />
                                    <Typography>By Rachi Card</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="body1" mb={"2px"}>
                                        The Benefits of Vitamin D & How to Get It
                                    </Typography>
                                    <Typography variant="p" width={"444px"} mb={"15px"}>
                                        Simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum
                                    </Typography>
                                    <SeconderyButton sx={{
                                        width: '220px'
                                    }} endIcon={<IconButtons />}>Read More</SeconderyButton>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack>
                            <img src={img_009} alt="" />
                            <Stack
                                sx={{
                                    position: "absolute",
                                    top: "262px",
                                    right: "-20px",
                                    borderRadius: "31px 34px 30px 30px",
                                    padding: "46px 57px 60px 57px",
                                    width: 613,
                                    height: 330,
                                    boxShadow: "0 20px 35px 0 rgba(167, 167, 167, 0.25)",
                                    background: "#fff",
                                }}
                            >
                                <Stack
                                    direction={"row"}
                                    gap={"8px"}
                                    alignItems={"center"}
                                    mb={"15px"}
                                >
                                    <img src={img_008} alt="img" />
                                    <Typography>By Rachi Card</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant="body1" mb={"2px"}>
                                        The Benefits of Vitamin D & How to Get It
                                    </Typography>

                                    <Typography variant="p" width={"444px"} mb={"15px"}>
                                        Simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum
                                    </Typography>
                                    <SeconderyButton sx={{
                                        width: '220px'
                                    }} endIcon={<IconButtons />}>Read More</SeconderyButton>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};
