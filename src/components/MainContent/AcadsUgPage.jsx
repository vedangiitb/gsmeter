import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import Title from "../Title/Title";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import IP from "../Points/IP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Footer from "../Footer/Footer";
import SurveyDescript from "./SurveyDescrip";
import GsSurveyImages from "./GsSurveyImages";

function AcadsUgPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"13/03/2024"}>Gsaa Meter</Title>
      <ImageContainer
        name={"Dheer Bhanushali"}
        manlink={
          "https://drive.google.com/file/d/19B50wyyGE43Gy_1WxlDvLft3l3HD9qgv/view"
        }
        chartsrc={"/ACADug.png"}
        imgsrc={"/gsaa_dheer.png"}
        por={"General Secretary Academic Affairs UG"}
        completed={41.7}
        notstarted={30.6}
        ongoing={27.8}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>Key Initiatives</SectionHeader>
      <Points>
        <OP
          reply={
            "UGAC is consulting the professors in IDC to design the program (one of the professors is already running a course on design thinking for second year students) - currently in initial stages."
          }
        >
          Pioneer an immersive cohort-based "Career Design Program" to enable
          students to evaluate different career paths and make choices towards
          building an intentional, well-suited vocation
        </OP>
        <OP
          reply={
            "A handbook is under works. Metrics are still being decided upon. We can only push for sensitization for FacAds, but we can't mandate or penalise them."
          }
        >
          Bolster the Faculty Advisor Program for constructive interaction
          between faculty and students: Push for the creation of a FacAd
          handbook, establish metrics for FacAds to check in on students'
          progress and assist them in recovering from performance drops in a
          semester; Push for sensitization on student issues for FacAds with SWC
          and student representatives
        </OP>
        <RP>
          Diversify the IDDDP to include Design and Mathematics & Computing
          streams
        </RP>

        <WP
          reply={
            "2 IDDDPs: for Mathematics and for Statistics have been approved. IDDDP in Statistics will be available from the next academic year. IDDDP in Design has not been done."
          }
        >
          Diversify the IDDDP to include Design and Mathematics & Computing
          streams
        </WP>

        <WP
          reply={
            "Dean RnD is not willing to plan another industrial meet after ResCon in such a short time frame. Currently working on a magazine, and planning on doing a year long industrial hackathon. DRCs are involved in this."
          }
        >
          Expand Student Industry Meets (SIM) to more departments to promote
          core engineering opportunities available for undergraduate students
          and connect them to industries
        </WP>
        <RP>
          Propose an English and Communications course under HASMED for students
          with language barriers by facilitating activity-based learning of
          verbal and written English
        </RP>
      </Points>
      <SectionHeader>INFORMATION DISSEMINATION AND AWARENESS </SectionHeader>
      <Points>
        <WP
          reply={
            "Core courses and curriculum for 3rd and 4th years haven't been decided, hence did not go ahead with this"
          }
        >
          Curate a cross-departmental 'Course Ladders and Recommendations
          Booklet' to help students select and schedule electives in their
          academic program based on interests
        </WP>
        <WP
          reply={
            "A query booklet was supposed to be released. A session was to be conducted. Wanted to organize a talk by Dean AP. But due to obstructions, couldn't be done. Freshies feel that they should have known more about planning their upcoming years."
          }
        >
          Conduct an academics awareness session in the spring semester for
          first-year students to help plan out upcoming coursework and branch
          change
        </WP>
        <RP>
          Extend the Sophomore 101 program to brief students about the structure
          of and motivation behind the revamped undergraduate curriculum
        </RP>
      </Points>
      <SectionHeader>ACADEMIC AND POLICY REFORMS </SectionHeader>
      <Points>
        <WP reply={"Did not start work on this"}>
          Propose a restructuring of the ARP policy to make it more
          student-friendly and implementable; Explore a department-specific
          dynamic ARP TA program based on course-specific needs
        </WP>
        <OP
          reply={
            "Proposed to Dean AP. He said he will push for implementation. Survey was conducted among the DGSecs, so that it can be made uniform across all the departments."
          }
        >
          Build on the ongoing efforts to include all departments under the
          policy to credit NPTEL courses
        </OP>
        <WP
          reply={
            "New curriculum for the first and second years have been made. Guidelines have been given to not have pre-requisites for courses. Doesn't make sense now to push FE grade. Grading revamp committee also closed."
          }
        >
          Follow through with the grading revamp to give more flexibility to
          professors and students: Push for a reduction in the minimum number of
          students registered to give an AP grade Push to introduce an FE grade
          to reduce cascading backlogs due to prerequisite courses
        </WP>
        <RP
          reply={
            "Branch Change Index: HASMED etc courses are not counted in CPI for branch change. So there was supposed to be an overall CPI and a CPI considered for branch change. This was done but branch change was removed shortly afterwards."
          }
        >
          Introduce a branch change index on ASC to increase transparency for
          first-year UG students
        </RP>
        <OP
          reply={
            " In the next UGPC, this will be proposed again. The delay has been due to the new curriculum being not finalised yet."
          }
        >
          Follow up on the implementation of the proposed Double Majors program
          for undergraduates
        </OP>
        <OP
          reply={
            "A survey was conducted across departments to take the opinions of DGSecs, and currently working on how to standardise that"
          }
        >
          Follow up on the proposal to take up industrial projects as
          in-semester credited RnD projects
        </OP>
      </Points>
      <SectionHeader>Web and Infrastructure</SectionHeader>
      <Points>
        <RP>
          Develop a portal for NOCS allocation for first-year students to
          systemize and optimise the selection process, ensure uniform timelines
          and transparency
        </RP>
        <RP
          reply={
            "A survey was conducted and the responses were shared with the central library, to put up a book stall with books at cheaper rates. The librarian said that they are already planning on organising a book exhibition like this, so why not collaborate. Done pre-midsem in the odd semester."
          }
        >
          Facilitate the setting up of book stalls in coordination with the
          Central Library during the initial stages of each semester for
          students to purchase reference books at subsidised rates
        </RP>
        <OP
          reply={
            "UGAC Web team is working on this. Currently in initial stages; skeleton of the website has been built - working on compilation right now"
          }
        >
          Revamp the UGAC website to serve as a repository for booklets, prep
          resources, portals and maintain a newsletter to highlight student
          academic achievements and policy updates
        </OP>
      </Points>
      <SectionHeader>PROMOTION OF WORK EXPERIENCE AND RESEARCH</SectionHeader>
      <Points>
        <RP
          reply={
            "Workshops were organised and informative posts were put on the EnPoWER instagram page"
          }
        >
          Conduct "Crafting your Research Persona", a series of workshops to
          help students to build personal profiles, research homepages, and
          network with professors to avail more opportunities
        </RP>
        <RP reply={"Started (few sessions have been conducted) "}>
          Instate a Gradmentorship Program to guide students and assist with the
          application process to promote dialogue between undergraduate
          researchers
        </RP>
        <OP
          reply={
            "In initial stages, plan and skeleton of the portal is ready and approved by Dean RnD. Reviews have been taken by professors. Research profiles are under works."
          }
        >
          Complete building the research portal to include information
          dissemination on external research opportunities, and form a community
        </OP>
      </Points>
      <SectionHeader>CAREER CELL</SectionHeader>
      <Points>
        <OP reply={"Currently in intial stages"}>
          Revamp the Career Info Booklet to encourage informed career decisions
          by including personalised experiences of alumni, overviews of
          professional life, and career trajectories{" "}
        </OP>

        <RP
          reply={
            "WhatsApp groups were created for IIM/MBA preparation as well as for Grad and University Internships in order to facilitate communication."
          }
        >
          Establish "Career Connect", a community to empower interaction among
          students, seniors, and alumni based on career interests and
          aspirations
        </RP>
        <RP
          reply={
            "An instagram series (Exploring Uncharted Paths) was initiated. Each post informs about different career options like music, filming etc."
          }
        >
          Initiate "Uncharted Horizons" - a series of activities to propagate
          unorthodox careers that might be better suited to the personal
          interests of students
        </RP>
      </Points>

      <SectionHeader>STUDENT SUPPORT SERVICES</SectionHeader>
      <Points>
        <WP
          reply={
            "Was planning to conduct a session for students to educate them on what the best scholarship for them would be. But the first meeting of the scholarship committee in the tenure decided to build an institute portal which would automatically suggest the best scholarship to the student. Hence, did not go ahead with this."
          }
        >
          Coordinate sessions on scholarships with the academic office to cover
          the different types, eligibility, FAQs, and evaluate the best possible
          scholarship on a case-by-case basis
        </WP>
        <RP
          reply={
            "Not on ResoBin, but was implemented in InstiApp - Academic Discussion Forum was launched recently. It helps to streamline topics of discussion."
          }
        >
          Expand the utility of ResoBin to increase student engagement by
          including a discussion forum for students to initiate conversations
          about academic matters
        </RP>

        <OP
          reply={
            "Course mapping for the first year has been completed. 3rd and 4th years' curriculum hasn't been finalized."
          }
        >
          Ensure course mapping between the new and old curriculum to smoothen
          backlog registration{" "}
        </OP>
      </Points>

      <SectionHeader>CLUBS</SectionHeader>
      <Points>
        <OP
          reply={
            "Conducted 2 sessions on venture capital, and a session on investment banking"
          }
        >
          Organise hands-on sessions on project walkthroughs across different
          careers in analytics, consulting, and finance to deliver practical
          experiences
        </OP>
        <WP
          reply={
            "Finance Club is working to set up a quantitative finance division."
          }
        >
          Facilitate industrial projects, internships, and educational programs
          for undergraduate students in Finance and Analytics in collaboration
          with innovation centres in IIT Bombay
        </WP>
        <RP
          reply={
            "DAV was involved in conducting surveys like Course Feedback. The team recently launched a Course Recommendation Portal."
          }
        >
          Extend the DAV team's duties to assist student bodies and institute
          functionaries in designing structured surveys, analysing collected
          data, and making data-driven recommendations
        </RP>
        <WP
          reply={"There were difficulties in bringing the companies for this."}
        >
          Establish a business development wing under the Consult Club to
          inculcate a foundation in management and business and promote roles
          like strategy, operations, etc.
        </WP>
        <RP
          reply={
            "Investment Team has made two reports with Aditya Birla Sun Life and Roots Ventures"
          }
        >
          Explore the possibility for the Investment Team to assist external
          funds in investment research
        </RP>
      </Points>

      <SectionHeader>EXTERNAL RELATIONS </SectionHeader>
      <Points>
        <WP
          reply={
            "Since the new curriculum was under works, course mappings were not done"
          }
        >
          Launch a Semester Exchange Guide to centralise information about
          applications, past experiences, course mappings, scholarships, and
          helpful tips
        </WP>
        <RP
          reply={
            "3 sessions have been conducted up till now: Princeton, Vanderbilt, Tshinghua universities"
          }
        >
          Conduct Ask Me Anything (AMA) sessions with admissions officers from
          target international universities for graduate applications
        </RP>
      </Points>
      <SectionHeader>Social Outreach</SectionHeader>
      <Points>
        <RP
          reply={
            "On suggestion of Dean AP, we approached the Kendriya Vidyalaya principal who agreed to allow 10th std students to be scribes. He gave a list of students to the PwD cell. A professor from Math department suggested that the high school students are not aware of the notations used in undergraduate maths. We can allow the TAs to be the scribes, and may be another TA can inviglate the scribe TA. Thus, the point is marked completed even though it was not executed finally."
          }
        >
          Streamline the process of requesting assistance in the form of a
          scribe during examinations
        </RP>
        <WP reply={"Planned for later"}>
          Engage UGAC divisions in community service for IIT Bombay staff and
          students wherever possible such as financial literacy and career
          counselling
        </WP>
      </Points>
      <SectionHeader>Extras</SectionHeader>
      <Points>
        <RP>
          After Branch Change policy was removed, an information session was
          conducted before the JoSAA Counselling Sessions begun.
        </RP>
        <RP>
          Extension students can't get a minor or honors degree. Proposal was
          made to allow extension students to get honors and minors. The Dean AP
          asked to repropose it with only include minors. Thus, the new proposal
          is under works.
        </RP>
      </Points>

      <SurveyDescript toShow={2}/>
      <GsSurveyImages
        titles={[
          "1. In what capacity were you associated with the Undergraduate Academic Council (UGAC)?",
          "2. Are you satisfied with the way UGAC functioned this tenure?",
          "3. Are you satisfied with the performance of the GSAA-UG (General Secretary of Academic Affairs - Undergraduate) this year?",
          "4.	Rate your experiences with the respective bodies under UGAC.",
          "5.	Rate your experiences with the respective bodies under UGAC. [EnPoWER]",
          "6.	Rate your experiences with the respective bodies under UGAC. [Career Cell]",
          "7.	Rate your experiences with the respective bodies under UGAC. [Student Support Services]",
          "8.	Rate your experiences with the respective bodies under UGAC. [Consult Club]",
          "9.	Rate your experiences with the respective bodies under UGAC. [Finance Club]",
          "10.	Rate your experiences with the respective bodies under UGAC. [Analytics Club]",
          "11.	Are you satisfied with the events and workshops organized by UGAC? [Quality]",
          "12.	Are you satisfied with the events and workshops organized by UGAC? [Performance]",
          "13.	Did you find the booklets and online resources provided by UGAC helpful?",
          "14.	How was your experience participating in the competitions organised by the clubs in UGAC?",
          "15.	Are you satisfied with the work of the Department Research Coordinator of your department?",
        ]}
        plots={Array.from(
          { length: 15 },
          (_, index) => `/GS_Satisfaction_survey/GSAAUG/${index + 1}_ug.png`
        )}
        responses={[
          138, 123, 122, "105.83 (Average responses per body)", 108, 104, 105, 104, 107, 107, 108, 107, 113, 93,
          84,
        ]}
      />

      <Footer></Footer>
    </div>
  );
}

export default AcadsUgPage;
