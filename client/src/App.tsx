import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Parallax from "./pages/create_meeting";

import ResponsiveAppBar from "./pages/root";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ContextWrapper, useThemeSet } from "./context";

// Define custom colors
const darkModeColors = {
  primary: {
    main: "#ffffff",
  },
  secondary: {
    main: "#76ff03",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
};

const lightModeColors = {
  primary: {
    main: "#2e7d32",
  },
  secondary: {
    main: "#ffeb3b",
  },
  background: {
    default: "#f5f5f5",
    paper: "#2e7d32",
  },
};

// Create dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkModeColors, // Apply custom dark mode colors
  },
});

// Create light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightModeColors, // Apply custom light mode colors
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: <ResponsiveAppBar />,
  },
  {
    path: "Parallax",
    element: <Parallax />,
  },
]);

function ThemedApp() {
  const { theme } = useThemeSet(); // Now this is inside ContextWrapper

  console.log(theme);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ContextWrapper>
      <ThemedApp />
    </ContextWrapper>
  );
}

export default App;
