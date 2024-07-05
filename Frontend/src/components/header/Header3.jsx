
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WindowIcon from '@mui/icons-material/Window';
import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SportsEsportsOutlined, ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined, Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Links from './Links';

export default function header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mt: 5,
    }}>
      {/* The Menu button in the left */}
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            //@ts-ignore
            bgcolor: theme.palette.listColor.main,
            //@ts-ignore
            color: theme.palette.text.secondary,
            width: 222,
          }}
        >
          <WindowIcon />
          <Typography sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,

          }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              //@ts-ignore
              bgcolor: theme.palette.listColor.main,
            }
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>

        </Menu>
      </Box>

      {/* The  List Bar */}
      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={4} direction={"row"} alignItems={"center"} >
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {/* The List Button for the Bar Width window < 1200px */}

      {useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>)}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
        }}

      >
        <Box
          sx={{ maxWidth: "444", minWidth: 444, mx: "auto", mt: 6, position: "relative", pt: 5, }}>
          <IconButton onClick={toggleDrawer("top", false)}
            sx={{
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute", top: 0, right: 10
            }} >
            <Close />
          </IconButton>
          {
            [{ mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Full Screen", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "User Account", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Vendor Account", subLink: ["Link1", "Link2", "Link3"] }]
              .map((item) => {
                return (
                  <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>{item.mainLink}</Typography>
                    </AccordionSummary>

                    <List sx={{ py: 0, my: 0 }}>
                      {
                        item.subLink.map((link) => {
                          return (
                            <ListItem key={link} sx={{ py: 0, my: 0 }}>
                              <ListItemButton>
                                <ListItemText primary={link} />
                              </ListItemButton>
                            </ListItem>
                          );
                        })
                      }
                    </List>
                  </Accordion>
                );
              })
          }

        </Box>


      </Drawer>

    </Container>
  )
}
