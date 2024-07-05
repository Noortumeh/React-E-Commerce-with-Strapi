import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'

export default function Links({title}) {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                ":hover .show-when-hover": { display: "block", },
                ":hover": { cursor: "pointer", },
            }}>
            <Typography variant='body1'>
                {title}
            </Typography>
            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box sx={{
                position: "absolute",
                top: "100%",
                minWidth: "170px",
                transform: "translate(-50%)", left: "50%",
                display: "none",
                zIndex: 2,
            }}
                className="show-when-hover">
                <Paper
                    sx={{ mt: 2, }}>
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                }}>
                                    <ListItemText sx={{
                                        "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                    }} primary="Dashboard" />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{
                                "&:hover .sub-link": {
                                    display: "block",
                                },
                                position: 'relative',
                            }}>
                                <ListItemButton sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                }}>
                                    <ListItemText sx={{
                                        "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                    }} primary="Products" />
                                    <Box flexGrow={1} />
                                    <KeyboardArrowRightOutlined fontSize="small" />
                                </ListItemButton>
                                <Box
                                    className="sub-link"
                                    sx={{
                                        display: "none",
                                        position: 'absolute',
                                        top: 0,
                                        left: "100%"
                                    }} >
                                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{
                                                        display: "flex",
                                                        p: 0,
                                                        px: 1.5,
                                                    }}>
                                                        <ListItemText sx={{
                                                            "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                                        }} primary="Add Product" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{
                                                        display: "flex",
                                                        p: 0,
                                                        px: 1.5,
                                                    }}>
                                                        <ListItemText sx={{
                                                            "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                                        }} primary="Edit Product" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Paper>
                                </Box>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                }}>
                                    <ListItemText sx={{
                                        "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                    }} primary="Orders" />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{
                                    display: "flex",
                                    p: 0,
                                    px: 1.5,
                                }}>
                                    <ListItemText sx={{
                                        "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }
                                    }} primary="Profile" />
                                    <Box flexGrow={1} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Paper>
            </Box>
        </Box >
    )
}
