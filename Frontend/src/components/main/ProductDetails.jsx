import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";

export default function ProductDetails({ item }) {
    // set index for selected Image
    const [selectedImg, setselectedImg] = useState(0);
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex" }}>
                <img width={"330"} src={item.attributes.productImg.data[selectedImg].attributes.url} alt="ProductDetails" />
            </Box>
            <Box sx={{py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">{item.attributes.productTitle}</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="body1">
                    {item.attributes.productPrice}
                </Typography>
                <Typography variant="body1">
                    {item.attributes.productDescription}
                </Typography>
                <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }} direction={"row"} gap={1} my={2}>
                    <ToggleButtonGroup sx={{
                            ".Mui-selected": {
                                border:"1px solid royalblue !important",
                                borderRadius:"5px !important",
                                opacity:"1",
                                backgroundColor: "initial",
                            },
                        }}
                        value={selectedImg} exclusive>
                        {item.attributes.productImg.data.map((item, index) => {
                            return (
                                <ToggleButton key={item.id} value={index} sx={{
                                    maxWidth: "110px",
                                    mx:1,
                                    p:"0",
                                    opacity: "0.5",
                                }}>
                                    <img onClick={() => {
                                        setselectedImg(index);
                                    }} style={{ borderRadius: 3 }} width={"100%"} height={"100%"} src={item.attributes.url} alt="image" />
                                </ToggleButton>
                            );
                        })}

                    </ToggleButtonGroup>
                </Stack>
                <Button sx={{ textTransform: "capitalize", }}
                    variant="contained" >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    );
}
