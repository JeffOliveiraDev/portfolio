import React, { useState } from "react";
import { StyledDashboard } from "./style";
import { HeaderDashboard } from "../components/HeaderDashboard/HeaderDashboard";

import { Presentation } from "../components/Presentation/Presentation";
import { LanguagesDivisor } from "../components/LanguagesDivisor/LanguagesDivisor";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { MyProjects } from "../components/MyProjects/MyProjects";
import { MySkills } from "../components/MySkills/MySkills";
import { Footer } from "../components/Footer/Footer";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <HeaderDashboard />
      <Presentation />
      <LanguagesDivisor />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <Footer />
    </StyledDashboard>
  );
};
