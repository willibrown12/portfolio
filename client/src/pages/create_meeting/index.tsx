import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";
import Image from "./image";
import { MobileComponent } from "./mobilecomponet";
import { Box, Button, Grid } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import { useNavigate } from "react-router-dom";
import  data  from "../../../public/data.json";

export default function Parallax() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [_isMobile, setIsMobile] = useState(window.innerWidth < 500); // Set initial state based on screen size

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on window width (mobile view < 768px)
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <div id="example">
  <Grid container spacing={2}>
        {/* Mobile view active for xs */}
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } ,}}>
          <div style={{display:"flex", gap:6, flexDirection:"column"}}>
          {data.map((a) => (
            <MobileComponent data={a} key={a.id} />
          ))}
          </div>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button onClick={() => navigate(`/home`)}>
              <UndoIcon fontSize="large" />
            </Button>
          </Box>
        </Grid>

        {/* Desktop view active for sm and above */}
        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } , } }>
          {data.map((a) => (
            <Image data={a} key={a.id} />
          ))}
          <motion.div className="progress" style={{ scaleX }} />
        </Grid>
      </Grid>
    </div>
  );
}
export type dataType ={

  id:number,
  title:string
  ,image:string
  github:string,
  description:string,
  link:string
  important?:string,
}






