import { useTheme } from "@emotion/react";
import { Close, FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight } from "@mui/icons-material";
import { Box, Button, Card, CircularProgress, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // Select the products by Category API key
    const allProductsAPI = "products?populate=*";
    const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
    const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";
    // Select the products key
    const [myData, setmyData] = useState(allProductsAPI);
    //fetches the product details from the strapi
    const { data, error, isLoading } = useGetproductByNameQuery(myData);
    //handle the button of products
    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {
            setmyData(newValue);
        }
    };
    // handel information for each product it selects
    const [clickedProduct, setclickedProduct] = useState({});
    //
    if (isLoading) {
        return (
            <Box sx={{ py: 9, textAlign: "center" }}>
                <CircularProgress />
            </Box>
        );
    }
    if (error) {

        return (
            <Container sx={{ py: 9, textAlign: "center" }}>
                {/* @ts-ignore */}
                <Typography variant="h6">{error.error}</Typography>
                <Typography variant="h6">Please try again later</Typography>
            </Container>
        );
    }
    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                    <Box>
                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        color="error"
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233, 69, 96,0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial",
                            },
                        }}>
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={allProductsAPI} aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className="myButton" value={menCategoryAPI} aria-label="centered">
                            MEN category
                        </ToggleButton>
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={womenCategoryAPI} aria-label="right aligned">
                            Women category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    <AnimatePresence>
                        {data.data.map((item) => {
                            return (
                                <Card component={motion.div}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                                    key={item.id} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.1", transition: "0.35s", rotate: "1deg" } }}>
                                    <CardMedia
                                        sx={{ height: 277 }}
                                        // @ts-ignore
                                        image={`${item.attributes.productImg.data[0].attributes.url}`}
                                        title="product image"
                                    />
                                    <CardContent>
                                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {item.attributes.productTitle}
                                            </Typography>
                                            <Typography variant="subtitle1" component="p">
                                                {item.attributes.productPrice}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.attributes.productDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button onClick={() => {
                                            handleClickOpen()
                                            setclickedProduct(item)
                                        }}
                                            sx={{ textTransform: "capitalize" }} size="large">
                                            <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                                            add to cart
                                        </Button>
                                        <Rating name="read-only" value={item.attributes.productRating} precision={0.5} readOnly />
                                    </CardActions>
                                </Card>
                            );
                        })}
                    </AnimatePresence>
                </Stack>
                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <IconButton onClick={handleClose}
                        sx={{
                            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
                            position: "absolute", top: 0, right: 10
                        }} >
                        <Close />
                    </IconButton>
                    <ProductDetails item={clickedProduct} />
                </Dialog>
            </Container>
        );
    }
}
