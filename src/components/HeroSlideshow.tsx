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
    fontFamily: 'system-ui, sans-serif',
    fontWeight: 100, fontStyle: "italic", lineHeight: 1.5,fontSize: '2.2rem',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    }}>
    “A quote will go here,
    {/* <br /> */}
    Once we find the right one.”
  </Typography>
  <Typography variant="body2" sx={{ mt: 2,  ml: 3, fontWeight: 600,}}>
    — Michael Romero
  </Typography>
</Box>

  );
}

export default function CrossfadeBanner({img,height,relativeY,currentSection}) {
  // if(currentSection !== 0) {
  //   // return null; // Hide the banner when not on the first section
  // }

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]); // Adjust range for more/less parallax
  const pageHeight = window.innerHeight;

  
  let e=50
  let e2=350
  const opacity = useTransform(scrollY, [e, e2*1.6], [.9, .4]);
  const grayscaleValue = useTransform(scrollY, [e, e2/2], [0, .8]);
  const filter = useTransform(grayscaleValue, (v) => `grayscale(${v}) blur(${v * 12}px)`);
  return (
          
    <Box className = "hero" sx={{ 

      position: 'fixed', top: 0, left: 0, zIndex:-10,
      
     height: height||'80vh', width: '100%', overflow: 'hidden' }}>
      <div style={{
              // opacity: currentSection === 0 ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
      }}>
           <motion.div
        style={{
          position: 'absolute',
          top: '26%',
          left: '20.5%',
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          opacity: opacity,
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
          </div>
        <motion.div
          style={{
            // transitionDuration: '0.5s',
          filter,
            opacity,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: '100%',
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            // top: '-10px',
            // width: '115%',
            // filter: blur(.4px);
            // filter: 'blur(.4px)',
          }}
        />
        <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ccc',
        }} />
        
        <div 
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          //left-to-right gradient
          // background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0) 100%)',
        }} />
        
    </Box>
  );
}
