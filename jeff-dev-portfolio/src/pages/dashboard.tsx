import React, { useState } from "react";
import { StyledDashboard } from "./style";
import { HeaderDashboard } from "../components/HeaderDashboard";
import { Presentation } from "../components/Presentation";
import { LanguagesDivisor } from "../components/LanguagesDivisor";
import { AboutMe } from "../components/AboutMe";
import { MyProjects } from "../components/MyProjects";
import { MySkills } from "../components/MySkills";
import { Footer } from "../components/Footer";

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
