"use client";
let settings = {
  recentActivityRows: 1
}
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider, useMediaQuery, Stack
} from "@mui/material";
import Footer from "@/components/Footer";
import { useTheme } from "@mui/material/styles";
import HeroSlideshow from "@/components/HeroSlideshow";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
const pySection = 6
const darkBg = '#282936'
const homepageContent = {
  sections: [
    {
      title: "ABOUT THE FOUNDATION",
      align: "center",
      img: "/home1.jpg",
      text: `The Su Xiaobai Foundation was founded in 2024. Sponsored by the artist Su Xiaobai, the Foundation is dedicated to supporting research and greater public interest in the ideas and practice of new generations of international artists. 
In particular, the Foundation seeks to support artists who share Su Xiaobai’s commitment to reviving traditional materials and techniques in the production of contemporary art. 
The Foundation is building a collection of Su Xiaobai's work. The majority of the collection is donated by the artist himself, and donations from individual collectors and institutions are welcomed. `
    },
    {
      title: "ABOUT THE ARTIST",
      align: "right",
      img: "/home2.jpg",
      text: `Su Xiaobai is one of the most significant contemporary Chinese artists working today. His practice bridges traditional Chinese lacquer techniques and modern abstract aesthetics, focusing on surface, texture, and material.`,
    },
    {
      title: "HOW IT WORKS",
      align: "center",
    },
  ],
};
const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
  exit: { opacity: 0, y: 20 },
}
const HomepageBody = () => {
  const { scrollY } = useScroll();
  let e = 200
  let e2 = 2100
  const y = useTransform(scrollY, [e, e + e2], [e, -e]);


  
  
  const sectionBounds = [760, 5300, 5400];
  const [currentSection, setCurrentSection] = useState(0);
  const [relativeY, setRelativeY] = useState(0);
  
  let ee=40
   let ee2=200
   const topOfCurrentSection = sectionBounds[currentSection - 1] || 0;
   const opacity = useTransform(scrollY, [topOfCurrentSection+ee,        topOfCurrentSection+ee2*1.6], [0, .9]);
   const grayscaleValue = useTransform(scrollY, [topOfCurrentSection+ee, topOfCurrentSection+ee2*1.6], [ .8,.05]);
   const filter = useTransform(grayscaleValue, (v) => `grayscale(${v}) blur(${v * 12}px)`);
   
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const index = sectionBounds.findIndex((bound) => latest < bound);
    setCurrentSection(index === -1 ? sectionBounds.length : index);
    const topOfCurrentSection = sectionBounds[index - 1] || 0;
    setRelativeY(latest - topOfCurrentSection);
  });
  const theme = useTheme();
  return (
    <Box>
      {/* <motion.div   {...motionProps}  > */}
      {/* Your content */}
      {/* Hero Section */}
      {
        1 ?
        <HeroSlideshow img="/wallart.png" height="100vh" {...{relativeY,currentSection}}/>
        : null
      }
      {currentSection === 1 ?
          <div style={{
          filter: filter,
          // opacity: currentSection === 1 ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',

zIndex: -1,
          position: 'fixed',
          }}>
            
        <motion.div 
        className="hero-bg"
        style={{
          filter: filter,
          opacity: opacity,
          // backgroundImage: 'url(/hero3.PNG)',
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.4) 100%), url(/hero3.PNG)",
          // backgroundColor: '#ccc',

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'scale(1.2)',
          transformOrigin: 'center',
          width: '110%',
          height: '100%',
          zIndex: -1,
          y: y,
        }} />
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          // backgroundColor: '#ccc',
          opacity: 0.8,
        }} />

         <motion.div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        opacity: opacity,
        background: 'linear-gradient(90deg, rgba(224, 224, 224, 0.61)  0%, rgba(224, 224, 224, 0.41) 40%, rgba(0, 0, 0, 0) 81%)',
      }}>

      </motion.div>
        </div>
        : null}
      {/* </motion.div> */}
      {/* Content Sections */}
      {/* <motion.div   {...motionProps}  > */}


{/* first section */}
      <motion.div style={{
        width: '100%',
        height: '100%',
        background:'transparent',
          // currentSection === 0 ? 'transparent'
          //   : currentSection === 1 ? '#transparent'
          //   // : currentSection === 1 ? '#ccc'
          //     : darkBg,
        paddingBottom: pySection * 8,
        // boxShadow: currentSection === 0 ? 'none'
        //   : '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      }}>
        <Container maxWidth="md" sx={{
          backgroundColor: '#eeec',
          backdropFilter: 'blur(10px)',
          boxShadow: 4,
          mt: '89vh',
          borderRadius: .5,
          py: pySection / 2,
          pt: pySection,
          px:0,
        }}
        style={{
          paddingLeft: '12px',
          paddingRight: '12px',

        }}>
          <Section2 section={homepageContent.sections[0]} />
        </Container>
      </motion.div>



{/* second section */}
      {/* </motion.div> */}
      {/* <FullWidthSection img='/img3d.png'/> */}
      <div style={{
        // background: 'linear-gradient(90deg, rgba(237, 237, 237, 0.61) 40%, rgba(0, 0, 0, 0) 71%)',
      }}>
        <Container maxWidth="md" sx={{
          px: 0,
          pt: pySection / 2,
          pb: pySection ,
        }}
          style={{
            // width: '100%',
            paddingLeft: 0,
            paddingRight: 0,
            position: 'relative',
          }}
          >
          <motion.div style={{
            top: 0,
            left: 0,
            width: '100%',
          }}>
            <img src="/sigg.png" alt="Full Width Section" style={{
              width: '534px',
              dropShadow: '0px 0px 6px black',
              objectFit: 'cover',
            }} />
          </motion.div>
          <Box sx={{
            top: 0,
            left: 0,
            width: '60%',
            zIndex: 1,
            pb: pySection  ,
          }} >
            <Box sx={{
              backgroundColor: '#eee',
              borderRadius: .5,
              boxShadow: 4,
              padding: 4,
              pb: pySection ,
            }}>
              <SectionDiv title="ABOUT THE ARTIST" align="center" />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                pt: pySection / 2,
                whiteSpace: 'pre-wrap',
              }}>
                <Typography variant="body1" color="text.primary" paragraph
                sx={{
                  whiteSpace: 'pre-wrap',
                  
                  // textAlign: 'center',
                  }}>
                  Su Xiaobai is an artist living in China and Germany and one of China’s most distinctive painters. He was born in 1949 in Wuhan, Hubei province, China. In 1965, he joined the School of Arts and Crafts in Wuhan, and from 1985 to 1987, he studied oil painting at the Central Academy of Fine Arts in Beijing. From 1987 to 1992, he moved to Germany to pursue his postgraduate studies at the Kunstakademie Düsseldorf (Düsseldorf State Arts Academy), returning to China in 2005. He currently lives and works between Shanghai and Düsseldorf, where he is a member of the Association of Düsseldorf Artists 1844.
                  </Typography>
                <Button variant="default" fullWidth sx={{
                  border: '1px solid',
                  color: 'primary.main',
                  borderRadius: .3,
                  borderColor: 'primary.transparent',
               '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
      color: 'grey', // ripple color
    },
               }}>
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>


{/* Third Section */}
      <motion.div   {...motionProps} style={{
        backgroundColor: '#eee',
      }}>
        <Container maxWidth="md" sx={{
          py: pySection*.9 ,
          pb: pySection *2,
          px: 0
        }}>
          {/* <Section section={homepageContent.sections[1]} /> */}
          <SectionDiv title="SELECTED WORKS"
            Sub={<Button variant="text" sx={{
              minWidth: 'max-content',
              color: 'primary.main',
            }}>
              View All Artworks
            </Button>}
            align="left" />
            <Box sx={{
              py: pySection / 2,
            }}>

          <img src="/art.png" alt="Full Width Section" style={{
            width: '100%',
            transform: 'scale(1.2)',
            transformOrigin: 'top center',
            height: 'auto',
          }} />
          </Box>
          {/* <Box sx={{
            width: '100%',
            maxWidth: '500px',
            margin: 'auto',
          }}>
          </Box> */}
          {/* <Box sx={{
            py: pySection,
          }}>
            <ExhibitionSection />
          </Box> */}
        </Container>
      </motion.div>
      {/* <Footer /> */}
    </Box>
  );
};








function ExhibitionSection() {
  let exhibitions = [
    {
      title: "Exhibition 1",
      date: "2024-01-01",
      description: "Description of Exhibition 1",
      img: "/ex1.jpg",
    },
    {
      title: "Exhibition 2",
      date: "2024-02-01",
      description: "Description of Exhibition 2",
      img: "/ex2.png",
    },
    {
      title: "Exhibition 3",
      date: "2024-03-01",
      description: "Description of Exhibition 3",
      img: "/ex3.jpg",
    },
  ];
  return (
    <Box sx={{
      pt: pySection*1.5 ,
    }}>
      <SectionDiv title="EXHIBITIONS" align="center" />
     exhibitions section under construction
      {/* <Grid container spacing={4} sx={{ 
        mt: 1,
        }}>
        {exhibitions.map((exhibition, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                image={exhibition.img}
                alt={exhibition.title}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutter>
                  {exhibition.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exhibition.date}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {exhibition.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  )
}
function FullWidthSection({ img }) {
  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: darkBg,
    py: pySection,
    px: 4,
    position: 'relative',
  }}>
    {/* <Box sx={{
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '51%',
    color: '#fff',
    p: 10,
    color: '#fff',
  }}>
    <SectionDiv title="THE ARTIST" align="center" dark/>
  </Box> */}
    <motion.div   {...motionProps}  >
      <img src={img} alt="Full Width Section" style={{
        maxWidth: '1000px',
        width: '100%',
        height: 'auto',
      }} />
    </motion.div>
  </Box>
}
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: customDelay,
    },
  }),
};
function Section2({ section }) {
  return (
    <Box sx={{
      px: 4,
    }}>
      <SectionDiv title={section.title} align={section.align} />
      {section.img && (
        <Media
          img={section.img}
          text={section.text}
          reverse={section.align === "right"}
        />
      )}
    </Box>
  )
}
function Section({ section }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Box sx={{}}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <SectionDiv title={section.title} align={section.align} />
        </motion.div>
        {section.img && (
          <Media
            img={section.img}
            text={section.text}
            reverse={section.align === "right"}
          />
        )}
      </Box>
    </motion.div>
  );
}
function Media({ img, text, reverse }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        gap: 4,
        py: pySection / 2,
        mt: 2,
      }}
    >
      <motion.div
        style={{ flex: 1, display: 'flex', }}
      >
        <CardMedia
          component="img"
          image={img}
          sx={{
            boxShadow: 4,
            width: "100%",
            height: "auto",
            borderRadius: .5,
          }}
        />
      </motion.div>
      <motion.div
        style={{ flex: 1 }}
      >
        <Typography variant="body1" color="text.primary" paragraph>
          {text}
          <br />
          <br />
          {text.split(" ").slice(10, 20).join(" ")}
          {text.split(" ").slice(0, 20).join(" ")}...
        </Typography>
        <motion.div variants={fadeInUp}
          viewport={{ once: true, amount: 0.2 }}
          custom={0.2}>
          <Button variant="default" 
          // no ripple
          // disableRipple
          color="secondary"
          fullWidth sx={{
            // border: '1px solid',
                  border: '1px solid',
            borderRadius: .3,
            color: 'primary.main',
            borderColor: 'primary.transparent',
            '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
      color: 'grey', // ripple color
    },
          }}>
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
}
function SectionDiv({ title, align, dark, Sub }) {
  return <Box sx={{
    transformOrigin: 'bottom center',
    width: '100%',
    display: 'flex',
    flexDirection: align === 'left' ? 'row' : 'row-reverse',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  }} >
    {align == 'center' ? <div style={{
      opacity: 0.3,
      width: '100%',
      height: '1px',
      backgroundColor: dark ? '#eee' : '#000',
      margin: '  4px',
    }} /> : null}
    <Box sx={{
      minWidth: 'max-content',
      flex: 1,
      textAlign: align === 'left' ? 'left' : align === 'right' ? 'right' : 'center',
      px: 2,
      fontSize: '36px',
      ...(align === 'left' ? {
        pr: 2,
      } : align === 'right' ? {
        pl: 2,
      } : {
        px: 2,
      }),
    }}>
      <Typography variant="h4" color={dark ? '#fff' : "text.primary"} sx={{
        fontSize: '1.725rem',
        textTransform: 'uppercase',
        letterSpacing: 1,
        lineHeight: 1.2,
      }}>
        {title}
      </Typography>
    </Box>
    <div style={{
      opacity: 0.2,
      width: '100%',
      height: '.8px',
      backgroundColor: dark ? '#eee' : '#000',
      margin: '4px 16px',
    }} />
    {Sub}
  </Box>
}
export default HomepageBody;