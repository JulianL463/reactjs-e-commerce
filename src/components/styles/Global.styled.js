import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        font-weight:300;
    }

    body {
        margin: 0;
        font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.2rem;
        background-color: black;
        color: ${({theme})=>theme.colors.main};
        background-image: url('https://iili.io/MN1I1I.png');
        background-size: 100% 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    .frosted{
        background-color: ${({ theme }) => theme.colors.transparent.lightblue};
        backdrop-filter: blur(5px);
        box-sizing:border-box;
        box-shadow: -0px -0px 15px ${({ theme }) => theme.colors.transparent.lightblue} inset;
        border: 1px solid ${({ theme }) => theme.colors.transparent.lightblue};
    }
`

export default GlobalStyles