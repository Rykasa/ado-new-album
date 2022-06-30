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

    /*background-color: rgb(216, 0, 16);
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))
rgb(30, 215, 96) */
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
`;