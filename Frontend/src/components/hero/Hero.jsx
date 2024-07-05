import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlder = [
    { text: "MEN", link: "src/images/banner-15.jpg" },
    { text: "WOMEN", link: "src/images/banner-25.jpg" }
]
export default function Hero() {
    const theme = useTheme();
    return (
        <Container>
            {/* Hero Section */}
            <Box sx={{ pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
                {/* slider components */}
                <Swiper
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {mySlder.map((item) => {
                        return (
                            <SwiperSlide key={item.link} className="parent-slider">
                                <img src={item.link} alt={`slide image about ${item.text} clothes`} />
                                <Box
                                    sx={{
                                        [theme.breakpoints.up('sm')]: {
                                            position: "absolute", left: "10%", textAlign: "left"
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            pt: 4, pb: 6
                                        },
                                    }}>
                                    <Typography sx={{ color: "#222" }} variant="h6">
                                        LIFESTYLE COLLECTION
                                    </Typography>
                                    <Typography sx={{ color: "#222", fontWeight: 400, my: 1, }} variant="h4">
                                        {item.text}
                                    </Typography>
                                    <Stack sx={{
                                        justifyContent: { xs: 'center', sm: "left" },
                                    }}
                                        direction={"row"}
                                        alignItems={"center"}
                                    >
                                        <Typography variant="h5" color="#333" mr={4}>
                                            SALE UP TO
                                        </Typography>
                                        <Typography variant="h5" color="#D23F57">
                                            30% OFF
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body1" sx={{
                                        color: "#000",
                                        fontWeight: 300,
                                        my: 1,
                                    }}>
                                        Get Free Shipping on orders over $99.00
                                    </Typography>
                                    <Button sx={{
                                        px: 5,
                                        py: 1,
                                        mt: 2,
                                        backgroundColor: "#222",
                                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                                        color: "#fff",
                                        borderRadius: "1px",
                                        "&:hover": {
                                            bgcolor: "#151515",
                                            boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                                        },
                                    }}
                                        variant="contained"
                                    >
                                        shop now
                                    </Button>
                                </Box>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
                {/* image components */}
                <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.36%" }}>
                    <Box sx={{ position: "relative" }}>
                        <img width={"100%"} src="src\images\banner-17.jpg" alt="shoes image" />
                        <Stack sx={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: 31,

                        }} >
                            <Typography variant="caption" sx={{
                                color: "#2B3445",
                                fontSize: "18px",
                            }} >
                                NEW ARRTVALS
                            </Typography>

                            <Typography variant="h6" sx={{
                                color: "#2B3445",
                                lineHeight: "16px",
                                mt: 1,
                            }} >
                                SUMMER
                            </Typography>
                            <Typography variant="h6" sx={{
                                color: "#2B3445",
                            }}>
                                SALE 20% OFF
                            </Typography>
                            <Link sx={{
                                color: "#2B3445",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "#D23F57",
                                },
                            }}
                                href="#"
                                underline="none">
                                SHOP NOW
                                <ArrowForward sx={{ fontSize: "13px" }} />
                            </Link>

                        </Stack >
                    </Box>
                    <Box sx={{ position: "relative" }}>
                        <img width={"100%"} src="src\images\banner-16.jpg" alt="computer image" />
                        <Stack sx={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: 31,

                        }} >
                            <Typography variant="caption" sx={{
                                color: "#2B3445",
                                fontSize: "18px",
                            }} >
                                GAMING 4K
                            </Typography>

                            <Typography variant="h6" sx={{
                                color: "#2B3445",
                                lineHeight: "16px",
                                mt: 1,
                            }} >
                                DESKTOPS &
                            </Typography>
                            <Typography variant="h6" sx={{
                                color: "#2B3445",
                            }}>
                                LAPTOPS
                            </Typography>
                            <Link sx={{
                                color: "#2B3445",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                transition: "0.2s",
                                "&:hover": {
                                    color: "#D23F57",
                                },
                            }}
                                href="#"
                                underline="none">
                                SHOP NOW
                                <ArrowForward sx={{ fontSize: "13px" }} />
                            </Link>

                        </Stack >
                    </Box>
                </Box>
            </Box>
            {/* Icon Section */}
            <IconSection />

        </Container>
    )
}
