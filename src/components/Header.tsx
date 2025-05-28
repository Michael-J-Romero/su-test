// components/Header.jsx
"use client";
import React , { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "styled-components";
import Nav from "./Nav";
import { usePathname, useRouter } from "next/navigation";
import { settings as allSettings } from "@/data/builtIn";
import Logo1 from "./Logo";

const settings = allSettings;

const Header = () => { 
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AppBar
      id="primary-header"
      position="fixed"
      sx={{
        top: 0, 
        // backgroundColor: "#fff8",
        backdropFilter: "blur(10px)",
        color: "text.primary", 
        transition: "background-color 0.3s ease, padding 0.3s ease",
        backgroundColor: scrolled ? "rgb(212, 220, 226)" : 'rgb(212 220 226 / 66%)',
        // backgroundColor: scrolled ? "#fff" : "#fff8",
        py: scrolled ? 1.5 : 2.5,
        zIndex: settings.zIndex.header,
      }}
    >
      <Toolbar 
        variant="dense" 
        sx={{
          minHeight: "0px",
          display: "flex",
          justifyContent: "space-between",
          px: 1,
          // py: 2,
        }}
      >
        {/* {newFunction(router, scrolled)} */}
        <Logo1 {...{router, scrolled}} />
        <Nav />
      </Toolbar>
    </AppBar>
  );
};
export default Header;

