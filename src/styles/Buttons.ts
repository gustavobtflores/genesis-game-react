import styled from "styled-components";

const Button = styled.button<{ selected?: boolean }>`
  outline: none;
  border: none;
  opacity: ${(props) => (props.selected ? 0.6 : 1)};
  transition: opacity 0.1s ease-out;
  cursor: pointer;
`;

const ButtonBlue = styled(Button)`
  grid-area: blue;
  background-color: #004e89;
  border-bottom-right-radius: 100%;
`;

const ButtonRed = styled(Button)`
  grid-area: red;
  background-color: #cc0000;
  border-top-right-radius: 100%;
`;

const ButtonGreen = styled(Button)`
  grid-area: green;
  background-color: #00cc00;
  border-top-left-radius: 100%;
`;

const ButtonYellow = styled(Button)`
  grid-area: yellow;
  background-color: #ffcc00;
  border-bottom-left-radius: 100%;
`;

const StartButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #707070;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1.2em;
`;

export { ButtonBlue, ButtonRed, ButtonGreen, ButtonYellow, StartButton };
