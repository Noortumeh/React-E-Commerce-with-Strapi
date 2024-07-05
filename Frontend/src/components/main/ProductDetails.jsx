import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function ProductDetails() {
    return (
        <Box sx={{display:"flex", alignItems:"center", gap:3, flexDirection:{xs:"column", sm:"row"}}}>
            <Box sx={{display:"flex"}}>
                <img width={"330"} src="src\images\img1.jpg" alt="ProductDetails" />
            </Box>
            <Box sx={{my:2, textAlign:{xs: "center", sm:"left"}}}>
                <Typography variant="h5">WOMEN'S FASHION</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="body1">
                    $12.99
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec facilisis, ante ac consectetur fermentum,
                    justo ipsum tincidunt turpis, vel mattis velit neque eu nunc.
                </Typography>
                <Stack sx={{justifyContent:{xs:"center", sm:"left"}}} direction={"row"} gap={1} my={2}>
                    {["src\images\banner-15.jpg", "src\images\img2.jpg"].map((item) =>{
                        return(
                            <img style={{borderRadius:3}} width={90} height={100} key={item} src="src\images\img2.jpg" alt="image" />
                        );
                    })}
                </Stack>
                <Button sx={{textTransform:"capitalize",}}
                variant="contained" >
                    <AddShoppingCartOutlined sx={{mr: 1}} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    );
}
