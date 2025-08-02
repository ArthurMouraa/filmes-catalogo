'use client'
import { MyAppbar } from "@/styles/navegation.styles";
import { MyTooldbar } from "@/styles/navegation.styles";
import { MyImage } from "@/styles/navegation.styles";
import { MyTypography } from "@/styles/navegation.styles";
import { MyButton } from "@/styles/navegation.styles";
import { MyBoxDrawer } from "@/styles/navegation.styles";
import { MyBoxItem } from "@/styles/navegation.styles";
import { BoxItemButtonStyle } from "@/styles/navegation.styles";
import { Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer"; 
import LiveTvIcon from '@mui/icons-material/LiveTv';

import logo from "../../public/logo.webp"
import Link from "next/link";
import { useState } from "react";



export default function Navegation() {

  const [openDrawer, setOpenDrawer] = useState(false)


  const togleDrawer = () => {
    return setOpenDrawer(!openDrawer);
  }



  return (
    <>
      <MyAppbar position="static">
        <MyTooldbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MyImage src={logo} alt="Logo"/>
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