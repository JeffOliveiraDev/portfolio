import styled from "styled-components";

export const StyledDashboard = styled.div`
  header > img {
    position: absolute;

    width: 900px;
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
  .NameDetailsLeft {
    width: 60%;
    /* max-width: 700px%; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
  }
  .PhotoRight {
    width: 40%;
    width: 535px;
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
    /* color: #ffffff80; */
    font-weight: 700;
    font-size: 18px;
  }
  .NameDetailsLeft h2 {
    color: #ff8e5e;
  }
  .NameDetailsLeft p {
    font-weight: 800;
    font-size: 30px;
    /* line-height: 53px; */
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
  }
  .BtnProjects:hover {
  }

  .BoxLanguages {
    background: #ffffff;
    height: 80px;
    width: 100%;
    display: flex;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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
`;
