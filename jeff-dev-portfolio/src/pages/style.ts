import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  @media screen {
  }
  header > img {
    position: absolute;

    width: 50%;
    height: 700px;
    left: -1%;
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
  .BoxBtnsHeader {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  @media (max-width: 430px) {
    .BoxBtnsHeader {
      flex-direction: column;
    }
    header {
      height: fit-content;
    }
    header img {
      display: none;
    }
    .BtnsHeader {
      justify-content: center;
      margin-top: 15px;
    }
  }

  .BtnsHeader {
    display: flex;
    gap: 15px;
    height: 100%;
    align-items: center;
  }
  .BtnsHeader a {
    color: var(--Color-white);
    font-size: 20px;
    cursor: pointer;
  }

  .BtnsHeader a:hover {
    color: #ff8e5e;
    border-color: #ff8e5e;
  }
  .CvsDownload {
    display: flex;
    gap: 10px;
  }
  .CvsDownload a {
    font-size: 12px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .BtnDownloadCv {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;

    width: 120px;
    height: 40px;
    color: var(--Color-white);

    border: 1px solid #ffffff;
    border-radius: 60px;
  }

  .BtnDownloadCv:hover {
    color: #ff8e5e;
    border-color: #ff8e5e;
  }
  .BoxPresentation {
    width: 100%;
    background: var(--Color-background-dark);

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
      padding-top: 30px;
    }
    .BoxHeaderNameBtns {
      display: flex;
      flex-direction: column;

      padding-top: 10px;
      padding-bottom: 10px;
    }
    header img {
      width: 45%;
      height: 500px;
      top: 500%;
      left: 22%;
      right: 10%;

      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 255, 255, 0.11) 0%,
        rgba(29, 30, 34, 0) 100
      );
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
    z-index: 1;
    border-radius: 30px;
    transition: all 0.3s;
  }
  .PhotoRight img:hover {
    transform: scale(1.3) rotate(10deg);
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

    width: 290px;
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
  @media (max-width: 394px) {
    .NameDetailsLeft p {
      font-size: 20px;
    }
    .BtnProjects {
      width: 160px;
      font-size: 14px;
      height: 70px;
    }
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

    z-index: 1;
    cursor: pointer;
  }
  .LanguageInsideBox img {
    transition: all 2.3s;
  }
  .LanguageInsideBox img:hover {
    transform: scale(1.2) rotateY(360deg);
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
  .InsideBoxAboutMeLeft a {
    color: var(--Color-orange);
  }
  .BtnsAboutMe {
    width: 100%;
    height: 60px;
    display: flex;
    color: white;
    align-items: center;
    gap: 15px;
  }
  .BtnsAboutMe a {
    color: var(--Color-white);
    font-size: 20px;
    cursor: pointer;
  }

  .BtnsAboutMe a:hover {
    color: #ff8e5e;
    border-color: #ff8e5e;
  }

  .ItenAbout {
    cursor: pointer;
    font-size: 20px;
    z-index: 1;
  }
  .ItenAbout:hover {
    color: #ff8e5e;
  }
  .InsideBoxAboutMeRight {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .InsideBoxAboutMeRight h2 {
    font-size: 16px;
  }
  .InsideBoxAboutMeRight img {
    max-width: 630px;
    max-width: 430px;
    height: 400px;
    transition: all 0.3s;
    z-index: 1;
    border-radius: 8px;
  }
  @media (max-width: 430px) {
    .InsideBoxAboutMeRight img {
      width: 90%;
    }
  }
  .InsideBoxAboutMeRight img:hover {
    transform: scale(1.2) rotate(3deg);
  }

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
  .BoxTitleBtnsWorks h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 53px;
    color: #ffffff;
  }
  .BoxTitleBtnsWorks span {
    color: #fe8e5e;
    font-size: 40px;
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
    width: 100%;
    margin-top: 40px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
  @media (max-width: 803px) {
    .Works {
      justify-content: center;
    }
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
  @media (max-width: 350px) {
    .InsideWorks {
      width: 280px;
    }
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
    transition: all 0.3s;
    cursor: pointer;
  }
  .InsideWorks img:hover {
    transform: scale(2.5);
  }

  .BoxSkills {
    width: 100%;
    background: var(--Color-background-dark);
    color: white;
    padding-top: 30px;
    padding-bottom: 50px;
    border-top: 3px solid rgba(255, 255, 255, 0.09);
  }
  .BoxInsideSkills {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .BoxInsideSkills h2 {
    font-weight: 800;
    font-size: 45px;
    line-height: 54px;

    color: #ffffff;
  }

  .TittleSkills > span {
    font-weight: 800;
    font-size: 45px;
    color: #fe8e5e;
    font-size: 45px;
  }
  .BoxHabsImgs {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 850px) {
    .BoxHabsImgs {
      flex-direction: column;
    }
  }
  .Habilities {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
  .Habilities span {
    /* color: orange; */
  }
  .WhatCanIdo h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 35px;

    color: #ffffff;
  }
  .WhatCanIdo p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    color: rgba(255, 255, 255, 0.7);
  }
  .BoxContact {
    width: 100%;
    height: fit-content;
    background-color: black;
    border-top: 3px solid rgba(255, 255, 255, 0.09);
    color: white;
    padding: 10px;
  }

  .BoxFooter {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;

    align-items: center;
    justify-content: space-around;
  }
  .BoxInteriorContact {
    display: flex;
    padding-right: 10px;
  }
  .BoxInteriorContact h2 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 35px;
    color: #ffffff;
  }
  .BoxFooter h3 {
    font-size: 1rem;
    align-items: center;
  }
`;
