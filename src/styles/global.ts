import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
  }

  :root{
    --primary-color: #E60011;
    --primary-color-dark: #BB010F;
    --light-gray: #666666;
    --dark-color: #1F0002;
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
`;