
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import Fade from "../../componets/slide";
import { useNavigate } from "react-router-dom";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/willi brown resume .pdf";
  link.download = "willi brown resume.pdf"; // Optional: Specify the default filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ProfessionalCard = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Card
        sx={{
          p: "2%",
          margin: "auto",
          boxShadow: 3,
          display: "flex",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} sx={{ padding: "20px" }}>
            <Fade />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                flex: 1,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color="secondary"
                  >
                    Hi, I'm Willi Brown
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    color="secondary"
                  >
                    Full Stack Developer
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 2.5,
                  }}
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ marginLeft: "50px", textAlign: "left" }}
                  >
                    Welcome to my portfolio, where I showcase the projects I've
                    built and the skills I've developed. See options down below.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 4,
                  }}
                  style={{
                    marginLeft: "50px",
                    marginTop: "50px",
                    justifyContent: "flex-start",
                    gap: 50,
                    display: "flex",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      navigate(`/parallax`);
                    }}
                  >
                    Check my Portfolio
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={handleDownload}
                  >
                    Download My CV
                  </Button>
                </motion.div>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProfessionalCard;
