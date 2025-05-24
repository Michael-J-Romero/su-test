'use client';


import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {settings as allSettings} from '@/data/builtIn'

const settings=allSettings.HeroSlideshow
 

// Example Quote component definition
function Quote({ txt, by }: { txt: string; by: string }) {
  return (
   <Box sx={{ textAlign: "center",  px: 2 }}>
  <Typography variant="h4" sx={{ fontWeight: 100, fontStyle: "italic", lineHeight: 1.5 }}>
    “Design doesn't wait 
    <br />
    for the right hero section quote.”
  </Typography>
  <Typography variant="body2" sx={{ mt: 2,  ml: 3, fontWeight: 600,}}>
    — Michael Romero
  </Typography>
</Box>

  );
}

export default function CrossfadeBanner({img,height}) {


  return (
          
    <Box className = "hero" sx={{ position: 'relative',    height: height||'80vh', width: '100%', overflow: 'hidden' }}>
        <div style={{
            position: 'absolute',
            top: '35%',
            color: '#fff',
            left:' 10%',
            // width: '100%',
            // height: '100%',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
         <Quote
           txt={`We'll replace this 
             with a good quote`}
            //   txt={`Design does not wait
            //  for the right hero section quote`}
          by='Michael Romero'
          />
        </div>
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
