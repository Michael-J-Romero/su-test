'use client';


import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
import {settings as allSettings} from '@/data/builtIn'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
const settings=allSettings.HeroSlideshow
 

// Example Quote component definition
function Quote({ txt, by }: { txt: string; by: string }) {
  return (
   <Box sx={{ textAlign: "center",  px: 2 }}>
  <Typography variant="h4" sx={{ 
    
    fontWeight: 100, fontStyle: "italic", lineHeight: 1.5,fontSize: '1.99rem',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    }}>
    “A quote will go here,
    <br />
    Once we find the right one.”
  </Typography>
  <Typography variant="body2" sx={{ mt: 2,  ml: 3, fontWeight: 600,}}>
    — Michael Romero
  </Typography>
</Box>

  );
}

export default function CrossfadeBanner({img,height}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]); // Adjust range for more/less parallax


  return (
          
    <Box className = "hero" sx={{ position: 'relative',    height: height||'80vh', width: '100%', overflow: 'hidden' }}>
      
           <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          left: '9.5%',
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          y, // parallax effect applied here
        }}
      >
         <Quote
           txt={`We'll replace this 
             with a good quote`}
            //   txt={`Design does not wait
            //  for the right hero section quote`}
          by='Michael Romero'
          />
          </motion.div>
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: '100%',
            position: 'absolute',
            width: '100%',
            // top: '-10px',
            // width: '115%',
                // filter: blur(.4px);
            filter: 'blur(.4px)',
        }}/>
    </Box>
  );
}
