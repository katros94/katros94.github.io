import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const App = (props: Props) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const appStyle = {
    backgroundColor: '#F7F7F8',
    height: '100vh',           // Ensure it covers the full viewport height
    margin: 0,
  };

  return (
    <div style={appStyle}>
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor: "#F7F7F8", color: "#000"}}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Katrinas web portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `This is my web portfolio`,
            )
            .join('\n')}
        </Box>
      </Container>
      </ThemeProvider>
    </React.Fragment>
    </div>
  )
};

const rootElement = document.getElementById("root") as Element;
const root = createRoot(rootElement);

root.render(<App />);