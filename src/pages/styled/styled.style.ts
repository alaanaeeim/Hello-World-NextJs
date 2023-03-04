import styled, { keyframes } from "styled-components";
import Image from "next/image";

const StyledButton = styled.button`
  background-color: ${(props: any) =>
    props.variant === "primary" ? "blue" : "white"};
  color: ${(props: any) => (props.variant === "primary" ? "white" : "blue")};
  border: ${(props: any) =>
    props.variant === "primary" ? 0 : "2px solid blue"};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  height: 40px;
  margin-right: 20px;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "primary" ? "blue" : "white"};
    color: ${(props: any) => (props.variant !== "primary" ? "white" : "blue")};
    border: ${(props: any) =>
      props.variant !== "primary" ? 0 : "2px solid blue"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to left, #ff8a00, #da1b60);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;
  background-color: "red";
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled(Image)`
  animation: ${rotate} infinite 5s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;

export default StyledButton;
