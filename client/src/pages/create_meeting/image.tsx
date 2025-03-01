import {
  motion,
  MotionValue,
  useScroll,

  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import "./index.css";
import { dataType } from ".";

import GitHubIcon from "@mui/icons-material/GitHub";

import UndoIcon from "@mui/icons-material/Undo";
import { Button, Popover, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Image({ data }: { data: dataType }) {
  const [anchorElGitHub, setAnchorElGitHub] = useState<HTMLElement | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpenGitHub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElGitHub(event.currentTarget);
  };

  const handlePopoverCloseGitHub = () => {
    setAnchorElGitHub(null);
  };

  const openGitHub = Boolean(anchorElGitHub);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <motion.div
        className="flex"
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        <a
          aria-owns={openGitHub ? "mouse-over-popover-github" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpenGitHub}
          onMouseLeave={handlePopoverCloseGitHub}
          className="scale"
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" color="primary" />
        </a>
        <Popover
          id="mouse-over-popover-github"
          sx={{ pointerEvents: "none" }}
          open={openGitHub}
          anchorEl={anchorElGitHub}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverCloseGitHub}
          disableRestoreFocus
        >
          {" "}
          <Typography sx={{ p: 1 }}>Visit GitHub Repository</Typography>
        </Popover>

        <Button
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          onClick={() => {
            navigate(`/home`);
          }}
        >
          <UndoIcon fontSize="large" />
        </Button>
        <Popover
          id="mouse-over-popover"
          sx={{ pointerEvents: "none" }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>back to home</Typography>
        </Popover>
      </motion.div>
      <div ref={ref} className="div-img">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <img src={data.image} alt="A London skyscraper" />
        </a>
      </div>

      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {data.title}
      </motion.h2>

      <motion.p
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {data.id===2? <div style={{color:"red", textAlign:"center", fontSize:30 }}>important!! Email:user@user.com password:user</div> :""}
        {data.description}
      </motion.p>
    </section>
  );
}
