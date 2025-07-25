'use client';
import { useState } from "react";
import logo from "../assets/play.webp"
import { MyAppbar } from "./header.style";
import { MyTypography } from "./header.style";
import { MyImage } from "./header.style";
import { MyTooldbar } from "./header.style";
import { MyButton } from "./header.style";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { MyBoxDrawer } from "./header.style";
import { MyBoxItem } from "./header.style";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from "next/link";
import { BoxItemButtonStyle } from "./header.style";




export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false)


  const togleDrawer = () => {
    return setOpenDrawer(!openDrawer);
  }



  return (
    <>
      <MyAppbar position="static">
        <MyTooldbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MyImage src={logo} alt="Logo" />
            <MyTypography variant="h6" component="div">
              Mega Filmes
            </MyTypography>
          </div>
          <MyButton onClick={() => togleDrawer()} >
            <MenuIcon fontSize="large" />
          </MyButton>
          <Drawer anchor='right' open={openDrawer} onClose={togleDrawer}  >
            <MyBoxDrawer>
              <MyBoxItem >
                <Button component={Link}
                  href="/" sx={BoxItemButtonStyle}>
                  <LiveTvIcon />
                  Filmes
                </Button>
                {/* <Button sx={BoxItemButtonStyle} component={Link}
                  href="update" >
                  <LiveTvIcon />
                  Edição
                </Button> */}

                {/* <Button sx={BoxItemButtonStyle} component={Link}
                  href="info" >
                  <LiveTvIcon />
                  Info++
                </Button> */}

                <Button sx={BoxItemButtonStyle} component={Link}
                  href="create">
                  <LiveTvIcon />
                  Gerenciar
                </Button>

              </MyBoxItem>
            </MyBoxDrawer>
          </Drawer>
        </MyTooldbar>
      </MyAppbar>
    </>
  )


}