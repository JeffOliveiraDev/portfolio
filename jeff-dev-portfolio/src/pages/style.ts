import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  @media screen {
  }
  header > img {
    position: absolute;

    width: 80%;
    height: 1000px;
    left: -6%;
    right: 10%;

    top: 100%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.11) 0%,
      rgba(29, 30, 34, 0) 100%
    );
  }

  header {
    height: 115px;
    width: 100%;
    background: var(--Color-background-dark);
    border-bottom: 3px solid rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(6px);
    background-color: black;
  }
  .BoxHeaderNameBtns {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .NameHeader {
    font-weight: 800;
    font-size: 20px;
    color: var(--Color-white);
  }
  .NameHeader h2 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .BtnsHeader {
    display: flex;
    gap: 15px;
    height: 100%;
    align-items: center;
  }
  .BtnsHeader button {
    color: var(--Color-white);
    font-size: 20px;
  }

  .BtnsHeader button:hover {
    color: #ff8e5e;
    border-color: #ff8e5e;
  }
  .BtnDownloadCv {
    width: 187px;
    height: 51px;

    border: 1px solid #ffffff;
    border-radius: 60px;
    font-size: 14px;
    font-weight: 700;
  }
  .BoxPresentation {
    width: 100%;
    background: var(--Color-background-dark);
    background-color: black;
    border-bottom: rgba(255, 255, 255, 0.02);
  }
  .InteriorBoxPresentation {
    width: 80%;
    margin: auto;
    color: white;
    padding-top: 90px;
    height: fit-content;
    display: flex;
  }
  @media (max-width: 850px) {
    .InteriorBoxPresentation {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      padding-bottom: 30px;
    }
    .BoxHeaderNameBtns {
      display: flex;
      flex-direction: column;

      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .NameDetailsLeft {
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
  .PhotoRight {
    width: 40%;
    width: 100%;
    height: 534px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .PhotoRight img {
    border-radius: 30px;
  }
  .NameDetailsLeft h3 {
    color: white;

    font-weight: 700;
    font-size: 18px;
  }
  .NameDetailsLeft h2 {
    color: #ff8e5e;
  }
  .NameDetailsLeft p {
    font-weight: 800;
    font-size: 30px;

    color: white;
  }
  .BtnProjects {
    padding: 20px 60px;
    gap: 10px;

    width: 215px;
    height: 59px;

    background: #ff8e5e;
    border-radius: 60px;
    color: white;
    cursor: pointer;
    z-index: 1;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .BtnProjects:hover {
    /* background-color: #ff8e00; */
    box-shadow: 0px 0px 4px 4px white;
  }

  .BoxLanguages {
    background: #ffffff;
    height: 80px;
    width: 100%;
    display: flex;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .BoxLanguages img {
    width: 30px;
    height: 40px;
    display: flex;
  }
  .BoxItens {
    width: 80%;
    display: flex;
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-around;
  }
  .LanguageInsideBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .LanguageInsideBox h2 {
    font-size: 14px;
  }
  .BoxAboutMe {
    width: 100%;
    height: fit-content;
    padding-top: 70px;
    padding-bottom: 20px;
    background-color: black;
    margin-top: 2px;
  }
  .BoxInsideAbout {
    width: 80%;
    color: white;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 850px) {
    .BoxInsideAbout {
      display: flex;
      flex-direction: column;
    }
  }
  .InsideBoxAboutMeLeft {
    width: 100%;
  }

  .InsideBoxAboutMeLeft span {
    color: #ff8e5e;
  }
  .InsideBoxAboutMeLeft h2,
  span {
    font-size: 40px;
    font-weight: 800;
  }
  .InsideBoxAboutMeLeft p {
    font-size: 15px;
    margin-top: 15px;
    font-weight: 400;
    line-height: 24px;
    max-width: 800px;
  }
  .BtnsAboutMe {
    width: 100%;
    height: 60px;
    display: flex;
    color: white;
    align-items: center;
    gap: 15px;
  }

  .ItenAbout {
    cursor: pointer;
    font-size: 20px;
  }
  .ItenAbout:hover {
    color: #ff8e5e;
  }
  .InsideBoxAboutMeRight {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .InsideBoxAboutMeRight img {
    /* width: 100%; */
    max-width: 630px;
    max-width: 430px;
  }
  /* .BoxEducationWork {
    background: var(--Color-background-dark);
    height: 500px;
    padding-top: 50px;
    color: white;
  }
  .BoxInteriorEducationWork {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  } */
  .BoxMyWorks {
    background: var(--Color-background-dark);
    color: white;
    height: fit-content;
    padding-bottom: 70px;
  }
  .BoxInsideWorks {
    padding-top: 50px;
    width: 80%;
    margin: auto;
  }
  .BoxTitleBtnsWorks {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .BoxBtnsWorks {
    display: flex;
    gap: 16px;
  }
  .BoxBtnsWorks button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 32px;
    gap: 10px;

    width: fit-content;
    height: 47px;

    /* Color 3 */

    background: rgba(57, 62, 70, 0.5);
    border-radius: 24px;

    color: #eeeeee;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 700;
  }
  .BoxBtnsWorks button:hover {
    background: #ff8e5e;
  }
  .BoxBtnsWorks button:focus {
    background: #ff8e5e;
  }

  @media (max-width: 730px) {
    .BoxBtnsWorks {
      flex-wrap: wrap;
    }
    display: flex;
    flex-wrap: wrap;
  }
  .Works {
    margin-top: 40px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }

  .InsideWorks {
    width: 300px;
    height: 433px;
    padding: 20px;
    line-height: 24px;

    background: rgba(57, 62, 70, 0.5);

    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .InsideWorks:hover {
    box-shadow: 0px 0px 2px 2px rgba(255, 142, 94, 1);
  }
  .boxBtnWork {
    display: flex;
    height: 100%;
    align-items: flex-end;
  }
  .BtnVisitWork {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 32px;

    width: 88px;
    height: 47px;

    /* Color 3 */

    background: rgba(57, 62, 70, 0.5);
    border-radius: 24px;

    color: #eeeeee;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 700;
  }
  .BtnVisitWork:hover {
    background: #ff8e5e;
  }
  .InsideWorks img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;
