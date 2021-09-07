import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Button as MuiButton} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDC10E"
    }
  },
});

const Button = ({variant, color, size, label}) => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MuiButton variant={variant} color={color} size={size}>
          {label}
        </MuiButton>
      </ThemeProvider>
    </div>
  );
}

export default Button;