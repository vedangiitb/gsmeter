import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import Title from "../Title/Title";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Footer from "../Footer/Footer";
import SurveyDescript from "./SurveyDescrip";
import GsSurveyImages from "./GsSurveyImages";

function AcadsPgPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"13/03/2024"}>Gsaa Meter</Title>
      <ImageContainer
        name={"Anmol"}
        manlink={
          "https://drive.google.com/file/d/1qGtsmgFv-dkcXcVBC7tUkUhTpDOc96YS/view"
        }
        imgsrc={"/anmol_gsaa.png"}
        por={"General Secretary Academic Affairs PG"}
        chartsrc={""}
        completed={26.30}
        notstarted={31.60}
        ongoing={42.10}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>New Initiatives</SectionHeader>
      <Points>
        <WP
        reply ={
          "Could not be executed due to a lack of time and resources."
        }
        >
        To organize a student-driven conclave as an annual PG-level research event with display and felicitation of exemplary work done by our PG community.
        </WP>
        <WP
        reply = {
          "Projects were not floated but already completed Masters and PhD projects were showcased Tech RnD Expo"
        }
        >
        To float mini-research projects throughout the years to help students enhance their employability. 
        </WP>
        <OP
          reply={
            "A session for this was conducted in the autumn semester but collaboration with nation wide library schemes was not executed"
          }
        >
          To facilitate students with various journals, books, and other library resources by pushing for collaboration of IITB Central Library with nationwide library schemes.
        </OP>
      </Points>
      <SectionHeader>Skill Development & Career Opportunities</SectionHeader>
      <Points>
        <WP
        reply = {
          "Video series wasn't executed, instead PGAC conducted placement experience series (mentioned in off-manifesto initiatives)."
        }
        >
        To create a video series featuring placed students sharing their placement experiences, to aid the upcoming PG batches in preparing for pre-placement tests and interviews.
        </WP>

        <RP>
        To conduct experience series of semester-exchange students, to facilitate the prospective students in their planning.
        </RP>

        <OP
          reply={
            "Was conducted for some departments but not in all. "
          }
        >
          To enhance support to incoming students by conducting department-specific preparatory sessions that help them navigate their coursework easily.
        </OP>
        <RP>
          To revitalize the Events subcommittee of the PGAC and equip them to conduct informative and engaging sessions that demonstrate career prospects and essential skills across domains.
        </RP>
        
      </Points>
      <SectionHeader>Policy</SectionHeader>
      <Points>
        <OP
        reply={
          "A survey was conducted to gauge student opinions on the issue; a policy has been drafted and the council is in touch with the administration to get it enforced."
        }
        >
        Ideate to minimize the average duration of the PhD in the institute through the creation of the institute-wide policy in cooperation with the administration and faculty.
        </OP>

        <OP
          reply={
            "The policy has been enforced in the chemical department. The council is pushing for the policy to be implemented on an institute basis."
          }
        >
          To make a policy for documentation of the TA work completed by students to prevent overburdening and ensure fair distribution of responsibilities.
        </OP>

        <OP
          reply={
            "The council has proposed the policy to the administration and it is yet to be discussed and passed through the Post Graduate Programmes Committee (PGPC)."
          }
        >
          To streamline the process of conference funding for the master's students and propose changes to motivate them to showcase their rigor in research.
        </OP>

        <RP>
        To review and suggest increasing the caps on daily allowances - food, travel, accommodation - for official travel within the country based on the city's tier.
        </RP>

        <OP
        reply = {
          "The policy has been ideated and discussed with the administratiion but is yet to be implemented."
        }>
        To outstretch the Institute Gold and Silver Medals for all PG programs along with UG programs.
        </OP>
      </Points>
      <SectionHeader>RefoRIN</SectionHeader>
      <Points>
        <WP
        reply = {"Could not be executed due to a lack of time and resources."}
        >
        To organize events under the name of "Researching for Resilient India (RefoRIN)” inspiring the development and commercialization of indigenous products to reduce dependence on foreign countries for research and development.
        </WP>

        <RP 
        reply = {""}
        >
        To follow up on the commencement of ResIEx - Research Information Exchange Portal which would include the database of the labs, equipment & facilities, lab people and theses available at the IIT Bombay campus.
        </RP>

        <WP
        reply = {"The council faced time and resource contraints when approaching industry."}
        >
        To organize an exposition to showcase student talents that are working on equipment/materials, otherwise mainly sourced from foreign industries, under the name of "Aatmanirbhar Bharat EXPO". It would include industry talks and/or workshops.
        </WP>
      </Points>
      <SectionHeader>Teachers of Tomorrow</SectionHeader>
      <Points>
        <OP
        reply = {"1 event was conducted in July but executing further events was a problem due to lack of availability of professors and presence of other institute events (like fests, placements etc.) during the other parts of the tenure."}
        >
        To organize a set of events aimed at honing the teaching skills of prospective professors through a series of sessions and workshops, under the banner of "Teachers of Tomorrow".
        </OP>

        <OP
        reply = {"1 event was conducted in July but executing further events was a problem due to lack of availability of professors and presence of other institute events (like fests, placements etc.) during the other parts of the tenure."}
        >
        TOT, IITB would cover events on Presentation skills, Scientific storytelling, Panel discussions, and healthy communication of science to the masses.
        </OP>
      </Points>

      <SectionHeader>Social Media Outreach</SectionHeader>
      <Points>
        <RP>
        To improve social media outreach, promote PGAC's initiatives and work towards building stronger connections with the PG student community.
        </RP>

        <WP
        reply = {"The reach of PGAC's social media handles was increased significantly but video form content wasn't executed by the council."}
        >
        To promote PGAC's events and initiatives consistently and efficiently across all social media platforms using innovative methods like short-form video content to provide timely updates.
        </WP>
      </Points>

      <SectionHeader>Off Manifesto Points</SectionHeader>
      <Points>
        <OP
        reply={"The council is still working to ensure the smooth resolution of the issue"}
        >
        PGAC pushed the admin to expedite the disbursement of the updated stipend and arrears.
        </OP>

        <RP>
        Conducted 5+ sessions and workshops with IITB alumni to help students with placement preparation; these included resume and interview prep sessions with incentive points for attendees.
        </RP>

        <RP>
        PGAC conducted a panel discussion with the Director and Deputy Directors of IIT Bombay on their journey from academic to administrative on 7th February 2024.
        </RP>

        <RP>
        PGAC collaborated with SARC for "Alumni Odyssey: The PG Guide to Success"
        </RP>

        <RP>
        PGAC organized and event featuring Mr Sameer Patwardhan - Ola Electric's Association Director.
        </RP>

        <RP>
        PGAC organized a introductory orientation session about DSSE for PG students
        </RP>

        <RP
        reply ={"This has been approved for the batch joining from 2023 onwards"}
        >
        PGAC proposed to decouple the 2 degrees for MSc + PhD dual degree students which will allow them to get 2 separate degrees, each after the completion of the respective program.
        </RP>

        
      </Points>

      <SurveyDescript toShow = {0} />
      <Points>
      Note: Only PG responses have been taken into account for the analysis for GSAA (PG).
      </Points>
      <br></br>

      <GsSurveyImages 
      
      titles = { [
        "1. In what capacity were you associated with the Post Graduate Academic Council (PGAC)?",
        "2. Are you satisfied with the way the PG Academic Council (PGAC) functioned during this tenure?",
        "3. Are you satisfied with the performance of the GSAA-PG?",
        "4. Do you feel that PGAC was receptive to your concerns and relayed them to the administration effectively?",
        "5. Are you aware of the PG Grievance Redressal portal?",
        "6. Were the AURAAs approachable and did they address your academic related issues effectively?",
        "7. Do you think the number & quality of the events, sessions and workshops PGAC conducted this year was up-to the mark? a. Placement preparatory sessions",
        "b. Academic sessions/workshops",
        "c. Career guiding sessions",
        "d. Other events"
      ]}    
    
    plots = {Array.from({ length: 10 }, (_, index) => `/GS_Satisfaction_survey/GSAAPG/${index + 1}_pg.png`)} 
    
    responses={[19,18,18,16,18,16,16,17,17,16]}/>

      <Footer></Footer>
    </div>
  );
}

export default AcadsPgPage;
