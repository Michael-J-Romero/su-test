"use client";
import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
const Logo = styled(Typography)`
  font-weight: 100;
  font-family: system-ui;
  margin-left: 1rem;
  // letter-spacing: 1px;
  // flex-grow: 1;
`;
const LogoComponent = ({ scrolled ,vertical,router,dark}) => {
    // const router = useRouter();

    return (
        <Box
            onClick={() => router?.push?.("/", undefined, { shallow: true })}
            sx={{
                flexGrow: 1,
                display: "flex",
                // alignItems: "center",
                fontSize: "1.7rem",
                flexDirection: vertical ? "column" : "row",
                alignItems: vertical ? "flex-end" : "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.8rem",
                    color: dark? "#ffffffab"
                    :"#000000ab",
                    letterSpacing: "5px",
                    fontFamily: "system-ui",
                }}
            >
                蘇笑柏
            </div>
            <Logo
                onClick={() => router?.push?.("/", undefined, { shallow: true })}
                variant="h6"
                sx={{
                    color: dark? "#ffffff": "#000000",
                    fontWeight: "normal",
                    fontSize: scrolled ? "1.4rem" : "1.4rem",
                    transition: "font-size 0.3s ease",
                    display: { xs: "none", sm: "block" },
                    flexGrow: 0,
                    // cursor: "pointer",
                    cursor: vertical ? "default" : "pointer",
                    "&:hover": {
                        textDecoration:vertical ? "none" : "underline",
                    },
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 600,
                        marginLeft: "16px",
                        fontFamily: "system-ui",
                        letterSpacing: "1px",
                    }}
                >
                    SU XIAOBAI
                    <div
                        style={{
                            width: ".45em",
                            height: ".45em",
                            backgroundColor: "#ba4545",
                            borderRadius: "2px",
                            marginLeft: ".5em",
                            marginRight: ".5em",
                            boxShadow: "0 0 2px rgba(0,0,0,.2)",
                        }}
                    ></div>
                    FOUNDATION
                </div>
            </Logo>
        </Box>
    );
};

export default LogoComponent;
