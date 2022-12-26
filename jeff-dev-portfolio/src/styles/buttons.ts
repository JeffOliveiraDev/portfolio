import { createGlobalStyle } from "styled-components";

export const StyledButtons = createGlobalStyle`
     
    .BtnDarkWhite{
        padding: 10px 14px;

        width: 112px;
        height: 38px;

        background: var(--Color-btn-blue);
        border-radius: 8px;

        color: var(--Color-white);
        font-weight: 450;
        font-size: var(--Code-Snippets-14);

    }
    .BtnDarkWhite:hover{
        
        background: var(--Color-btn-blue);

    }
    



        *{
        /* Colors */

        /* Primary */

        --Color-black: #01080E;
        --Color-light-blue: #011627;
        --Color-dark-blue: #011221;

        /* Secondary */

        --Color-grey: #607B96;
        --Color-dark-green: #3C9D93;
        --Color-purple: #4D5BCE;
        --Color-white: #FFFFFF;

        /* Accent colors */
        
        --Color-orange: #FEA55F;
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
    
`;
