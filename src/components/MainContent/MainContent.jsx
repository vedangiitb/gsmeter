import React from "react";
import Title from "../Title/Title";
import styled from "styled-components";
import Footer from "../Footer/Footer";

export const SectionHeader = styled.p`
  font-family: "Hedvig Letters Serif", serif;
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0;
  display: inline-block;
`;

export const Bigheader = styled.p`
  font-family: "Hedvig Letters Serif", serif;
  font-size: 3.4rem;
  font-weight: 750;
  margin: 0;
  text-align: center; /* Added to center the text */
`;

export const SubHeader = styled.p`
  font-family: "Hedvig Letters Serif", serif;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 750;
  margin-bottom: 1rem;
  display: inline-block;
  margin-left: 1rem;
`;

export const Points = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  list-style: none;
  font-size: 2rem;
  font-weight: 500;
`;
export const StyledPoints = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;

export const MainPoints = styled.ul`
  font-family: "Quattrocento Sans", sans-serif;
  list-style: none;
  font-size: 2.15rem;
  font-weight: 400;
`;

export const GuideSectionHeader = styled.p`
  font-family: "Hedvig Letters Serif", serif;
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0;
  display: inline-block;
`;


function MainContent() {
  return (
    <div className="container--main">
      <Title>The GS Meter</Title>
      <MainPoints>
        The GS meter maintained by the Insight team is a platform through which
        every student of IIT Bombay can stay up-to-date with the progress made
        by the General Secretaries for the points on their manifestos. The aim
        is to increase accountability by maintaining a public platform that
        tracks the progress of the elected representatives throughout the year.
        </MainPoints>
        <MainPoints>
        If you find any discrepancies in the information presented on this
        website, please drop a mail to insight@iitb.ac.in specifying the General
        Secretary, along with the change in status of the manifesto point(s) and
        any relevant proof, if applicable.
        </MainPoints>

      <GuideSectionHeader>Guide</GuideSectionHeader>
      <StyledPoints>
        <li>The meaning of symbols is specified at the top of each page</li>
        <li>
          You can click on ongoing/incomplete/unclear manifesto points for
          further elaboration if one has been provided by the concerned General
          Secretary
        </li>
        <li>
          At the end of each page, there is also a section for points that were
          not present on the manifesto but have been undertaken, if provided by
          the concerned General Secretary
        </li>
        <li>
          The pie chart at the top of each page displays the overall progress
          each General Secretary has made with regard to their manifesto
        </li>
      </StyledPoints>

      <MainPoints>
      Note: The GS meter is continuously updated. A point
        marked as incomplete/ongoing could be marked complete later in the
        tenure. Feel free to reach out to us via our social media handles or
        webmail for any clarifications.
      </MainPoints>

      <br></br>

      <Title>GS Satisfaction Survey</Title>
      <MainPoints>
      In February, Insight conducted the GS Satisfaction Survey which aimed to go beyond the General Secretaries’ manifestos in terms of gauging the institute’s satisfaction with the General Secretaries, their councils and their functioning. 
      The results of the survey for the respective General Secretaries can be found below the GS Meters in each section.
      The survey was filled by 171 respondents with the following composition:
        </MainPoints>
        <MainPoints>
        78.95 Male, 15.2% Female, 0.58% Non-Binary, 5.26% Prefer not to say
        </MainPoints>
        <MainPoints>84.12% UG, 15.88% PG</MainPoints>

        <MainPoints>
        Note: Only UG responses have been taken into account for the analysis for GSAA (UG).
        </MainPoints>

        <MainPoints>
        Note: Only PG responses have been taken into account for the analysis for GSAA (PG).
        </MainPoints>

      <Footer></Footer>
    </div>
  );
}

export default MainContent;
