import { useTheme } from "@emotion/react";
import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBolt, WorkspacePremiumOutlined } from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";


const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "200px",
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            gap: 3,
            justifyContent:  useMediaQuery('(min-width:600px)')?"center":"left",
            py: 1.6,
        }}>
            {icon}

            <Box>
                <Typography variant="body1" sx={{
                    fontWeight: 300,
                    color: theme.palette.text.primary,
                }}>{title}</Typography>
                <Typography variant="body1" sx={{
                    fontWeight: 300,
                    color: theme.palette.text.primary,
                }}>
                    {subTitle}
                </Typography>
            </Box>
        </Box>
    );
}
export default function IconSection() {
    const theme = useTheme();
    return (
        <Container sx={{mt:3, bgcolor:theme.palette.mode==="dark" ?"#000":"#fff"}}>
            <Stack divider={ useMediaQuery('(min-width:600px)') ?<Divider orientation="vertical" flexItem />:null}
                direction={"row"}
                alignItems={"center"}
                sx={{ flexWrap: "wrap" }}>
                <MyBox icon={<ElectricBolt fontSize="large" />}
                    title={"Fast Delivery"} subTitle={"Start From $10"} />
                <MyBox icon={<WorkspacePremiumOutlined fontSize="large" />}
                    title={"Money Guarantee"}
                    subTitle={"7 Days Back"} />
                <MyBox icon={<AccessAlarmOutlined fontSize="large" />}
                    title={"365 Days"}
                    subTitle={"For Free Return"} />
                <MyBox icon={<CreditScoreOutlined fontSize="large" />}
                    title={"Payment"}
                    subTitle={"Secure System"} />
            </Stack>
        </Container>
    )
}
