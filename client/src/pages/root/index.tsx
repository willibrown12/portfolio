import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import CodeIcon from "@mui/icons-material/Code";

import { FormControlLabel, FormGroup, Grid, useTheme } from "@mui/material";
import { MaterialUISwitch } from "../../componets/switch";
import { useThemeSet } from "../../context";

import ProfessionalCard from "./mainCard";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AboutCard from "./aboutmyself";

function ResponsiveAppBar() {
  const themeMui = useTheme();

  const { theme, setTheme } = useThemeSet();

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          mt: 4,
          mx: "auto",
          width: "80%",
          maxWidth: "xl",
          borderRadius: 2,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CodeIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: themeMui.palette.secondary.main,
                  fontSize: "40px",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Willi Brown Portfolio
              </Typography>
            </div>

            <CodeIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: themeMui.palette.secondary.main,
                fontSize: "40px",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: themeMui.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Willi Brown portfolio
            </Typography>

            <div
              style={{ display: "flex", alignItems: "flex-end", gap: "5px" }}
            >
              <a
                href={"https://github.com/willibrown12"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" color="secondary" />
              </a>
              <a
                href={"https://www.linkedin.com/in/willi-brown/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" color="secondary" />
              </a>
              <a
                href={"mailto:https://mail.google.com/mail/u/0/#inbox"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon fontSize="large" color="secondary" />
              </a>
              <FormGroup>
                <FormControlLabel
                  control={
                    <MaterialUISwitch sx={{ m: 1 }} onChange={handleChange} />
                  }
                  label={theme}
                />
              </FormGroup>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProfessionalCard />
          <AboutCard />
        </Grid>
      </Container>
    </>
  );
}

export default ResponsiveAppBar;
