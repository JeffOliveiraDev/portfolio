import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    *{
        /* Typography */

        font-family: 'Inter', sans-serif;

        --Headline-62: 3.875rem;
        --Subheadline-32: 2rem;
        --Name-Title: 1.5rem;
        --Menu-18: 1.125rem;
        --Lables-16: 1rem;
        --Code-Snippets-14: 0.875rem;

    }

    *{
        /* Colors */

        /* Primary */

        --Color-black: #01080E;
        --Color-teal: #00ADB5;
        --Color-white-text: #EEEEEE;

        /* Secondary */

        --Color-background-dark: #1d1e22;

        --Color-white: #FFFFFF;
        --Color-grey: #393E46;
        --Color-line: rgba(238, 238, 238, 0.1);

        /* Accent colors */
        
        --Color-orange: #ff8e5e;
        --Color-zomp: #43D9AD;
        --Color-dark-salmon: #E99287;
        --Color-lavender: #C98BDF;

        /* Lines */

        --Color-yanke-blue: #1E2D3D;

        /* Gradients */
        
        --Color-gradient-blue: #4D5BCE;
        --Color-eucalyptus: #43D9AD;

        /* Buttons */


        --Color-btn-blue: #1C2B3A;
        --Color-btn-blue-hover: #263B50;


        /* Alerts */
    

        --Sucess: #168821;
        --Warning: #FFCD07;
        --Negative: #E60000;
        --Information: #155BCB;

    }

   
    body::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}

    body::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
}

    body::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
}

`;

// const ColorsDarkTheme = {
//     colors:{
//     white: #FFFF;
//     orange: ,
//     black:
//     }

// }
