import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./styled.style";

const theme = {
  dark: {
    primary: "#000",
    text: "#FFFFFF",
  },
  light: {
    primary: "#FFFFFF",
    text: "#000",
  },
  fontFamily: 'Segoe UI',
};

const GlobaleStyle = createGlobalStyle`
  button {
    font-family: ${(props: any) => props.theme.fontFamily};
  }
`;

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobaleStyle />
      <div>
        <h1>Styled Component</h1>
        <StyledButton type="submit" variant="primary">
          Button Test
        </StyledButton>
        <StyledButton>Button Test</StyledButton>
        <FancyButton as="a">FancyButton</FancyButton>
        <SubmitButton>SubmitButton</SubmitButton>
        <AnimatedLogo src="/cat.jpeg" width={200} height={200} alt="Image" />
        <DarkButton>DarkButton</DarkButton>
      </div>
    </ThemeProvider>
  );
}
