import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import SurveyDescript from "./SurveyDescrip";
import GsSurveyImages from "./GsSurveyImages";

function TechnicalPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"13/03/2024"}>GSTA Meter</Title>
      <ImageContainer
        name={"Prathmesh Shimpi"}
        manlink={
          "https://drive.google.com/file/d/1PIzj1a229YV9kdBkM6J0IGAnJsIA9JK7/view?"
        }
        imgsrc={"/shimpi.png"}
        chartsrc={"/tech.png"}
        por={"General Secretary Technical Affairs"}
        completed={77.40}
        notstarted={0.00}
        ongoing={22.60}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>TINKERERS’ LABORATORY</SectionHeader>
      <Points>
        <RP>
        TL Funds - Increase the frequency of Alumni pitches to procure more funds for the TL
        </RP>

        <RP>
        TL Inventory - Develop an inventory management system in TL with to maintain a proper database of the inventory available
        </RP>
        
        <RP>
        TL Infrastructure - Push for setting up Project showcasing stand, Trophy stand which defines the glory of the tech culture in the institute
        </RP>

        <RP>
        ChemE TL - Encourage interdisciplinary collaboration and innovation in underexplored domains, such as BioX, Chemistry, and Energy, through events and well-stocked labs
        </RP>

      </Points>
      <SectionHeader>TECHNICAL PROJECTS & RESOURCES</SectionHeader>
      <Points>
        <RP>
        Tech for Social Good - Push for procuring techno-social projects from various industries and departments like CTARA for an overall betterment of society
        </RP>

        <RP
        reply={
          "The equipment has been procured and is even available for the student to utilise anytime, whenever required, with permission from the stakeholders, as certain minimum skills need to be met before using these equipments because they are heavy and expensive equipment. We have also got temporary space for setting up these equipments, and it will be shifted to the permanent space (the New DSSE building which is being constructed where the floor plan is already ready and space is allocated for all these labs)"
        }
        >
        Tech Zone - Procure equipment and make them available to all the students where they can experiment with emerging technologies, such as AI, AR/VR, blockchain, and IoT
        </RP>

        <OP
        reply={
          "The website is ready to be hosted (we have done the local hosting), but just due to some Gymkhana server issue, we are not able to make it online. We have tried using multiple technologies for the website, but the issue persists in all of them. Firstly, the website was made using Nest.JS, but then the server issue came up, so the team again tried using “React” for the same website, but the issue still remained the same from the server side. "
        }
        >
        Create an Institute Technical Summer Activities (ITSA) website to streamline the ITSP process and maintain an online repository with ITSP, SoC, and SOS documentation
        </OP>

        <RP>
        Reconstruct Technovation with DSSE to provide personalized mentorship, workshops, and resources for student projects fostering a culture of innovation and tech entrepreneurship
        </RP>

        <RP>
        Collaborate with Dean R&D to foster innovation by organizing a large-scale Tech R&D Expo with the involvement of big companies to scale up projects and provide growth opportunities
        </RP>

        <OP
        reply={
          "Emphasized getting more women speakers at council events. We also conducted a WiSE workshop for female students, which was a hands-on rover-building session. A calendar is being compiled for all female opportunities, which will be launched soon"
        }
        >
        Revamp the WISE program to empower and promote women in science and engineering by providing talks, mentorship, and resources to create a supportive environment for their success
        </OP>

        <RP>
        Organize ITSP Bootcamps to provide a basic understanding of various tech domains to students
        </RP>


      </Points>
      <SectionHeader>TECH TEAMS</SectionHeader>
      <Points>
        <RP>
        Organize a mini-expo during tech team orientation for showcasing the work of current tech teams to inspire and encourage freshmen to participate
        </RP>

        <OP
        reply={
          "We have conducted climate change awareness events; the Energy Swaraj was one of them; climate clocks were assembled and will be put up across institute soon. We also have introduced GFI's Alt Protein student chapter in Mumbai to educate the community about the sustainable protein movement. "
        }
        >
        Create a comprehensive database of technical facilities in the institute with details on access, required training, and time slots to ensure efficient utilization by students and tech teams
        </OP>

        <RP>
        Organize closed community sessions and group discussions led by industry leaders to equip tech teams with real-life knowledge and current innovations
        </RP>
      </Points>
      
      <SectionHeader>TECH FOR INSTI (DEVCOM + INSTIX) & HOSTEL TECH</SectionHeader>
        <Points>
      <OP
      reply={
        "We have conducted climate change awareness events; the climate clock was one of them; these clocks will be put up at different places on campus."
      }
      >
      Push for Green Campus programs through food waste and energy management projects to promote sustainability in hostels
      </OP>

      <RP>
      Introduce Genre Cups to technical GC, with a diverse range of technical genre like coding, robotics, hardware, and award winning hostels of each genre with a genre cup
      </RP>

      <RP>
      Create a Hostel GC portal with live dashboard, detailed information for each technical genre, and updated rankings for transparency and competitiveness in InstiApp
      </RP>

      <RP>
      Conduct a Hostel Case Study GC with a structured format spanning over a semester, involving problem identification, solution design, and four checkposts to promote out-of-the-box thinking
      </RP>

      <RP>
      Add competition-based GCs that encompass various non-core Inter IIT domains, including product management, supply chain, tech entrepreneurship in technical GC
      </RP>
      </Points>

      <SectionHeader>TECH CLUBS</SectionHeader>
      <Points>
      <RP>
      Follow up on Tech Mentors: An initiative to help freshmen explore and navigate institute technical opportunites and assist them in developing their technical skills
      </RP>

      <RP>
      Enhance the AI community with a major focus on NLP, CV, and RL to promote the development of advanced AI technologies and solutions
      </RP>

      <RP>
      Reinstate convener camp as Tech Carnival showcasing diverse initiatives through interactive display, demos, workshops, and competitions
      </RP>

      <RP>
      Expand the current scope of DIY projects to encompass all the clubs to promote the culture of Do-It-Yourself among students in the institute
      </RP>

      </Points>
      
      <SectionHeader>INTER-IIT TECH MEET</SectionHeader>
      <Points>
      <RP
      reply={
        "Conducted a Quant Bootcamp and other hackathons (1 week LLM Bootcamp in collaboration with Pathway, Blockchain workshop in collaboration with Filecoin, Regular CP contest on Leetcode, Codeforces and Codechef) were also conducted keeping Inter IIT in mind; there were plans of hardware hackathons which were dropped off because  IIT Madras dropped off those domains"
      }
      >
      Launch Intra IIT competitions based on specific segments of past Inter IIT competitions and organise advance bootcamps to prepare students for the event and promote technical skills.
      </RP>

      <RP>
      Revamp a video and blog series called InterIIT Diaries featuring past participants' experiences to raise awareness about Inter IIT and inspire more students to participate
      </RP>
      </Points>

      <SectionHeader>PG TECH</SectionHeader>

      <Points>
      <OP
      reply={
        "The website is in the development phase with the backend, which is the major portion of the website being ready; just the UI needs to be finalized. This is getting delayed because the web team is rigorously working on multiple projects at a time. This will be completed by the end of March. "
      }
      >
      Integrate PG Tech Forum with InstiWiki where PG students from different technical disciplines can come together to discuss and exchange ideas on the latest technical advancements and innovations
      </OP>


      <OP
      reply={
        "This will be launched in the next 2 weeks as the content is ready but the final compilation and designing part is being done."
      }
      >
      Launch a PG-centric newsletter to promote awareness and participation in technical activities beyond research organized by various tech teams and hobby clubs
      </OP>
      </Points>

      <SectionHeader>MISCELLANEOUS</SectionHeader>

      <Points>

      <RP>
      Conduct Open Source events to promote contributions to open source projects like instiApp, gymkhana SSO login to increase the awareness of GSOC
      </RP>

      <OP
      reply={"The tender for the digital noticeboards has been released, and locations for setting up these digital notice boards have been finalized in collaboration with the Hostel Affairs Council."}
      >
      Implements different ways for publicising events like digital notice boards which help in saving paper wastage and a sustainable approach
      </OP>

      <RP>
      Follow up on setting up infrastructure for media team like camera, tripods, laptops and working space to ensure proper publicity of each club
      </RP>

      <RP>
      Organise field visits to give industrial and real-life technical exposure to the students
      </RP>

      <RP>
      Follow up on building infrastructure of STAB room including cupboards for inventory of clubs, Wi-Fi, mats, and other essential facilities to provide an optimal environment for students
      </RP>

      </Points>

      <SurveyDescript toShow = {0} />

      

      <GsSurveyImages 
      
      titles = {[
        "1. In what capacity were you associated with the tech council?",
        "2. Are you satisfied with the way the Tech Council functioned during this tenure?",
        "3. Are you satisfied with the performance of the General Secretary of Technical Affairs (GSTA)?",
        "4. Do you think the number and quality of the events, sessions and boot camps conducted by ITC this year were up to the mark?",
        "5. How would you rate the availability of tech infrastructure (equipment/special assistance required) in Tinkerer’s Laboratory?",
        "6. How would you rate the quality of the available equipment and lab infrastructure in Tinkerer’s Laboratory?",
        "7. How would you rate the availability of tech infrastructure (equipment/special assistance required) in ChemE TL?",
        "8. How would you rate the quality of the available equipment and lab infrastructure in ChemE TL?",
        "9. How would you rate the number of external opportunities/competitions brought in by the council?",
        "10. How would you rate the support you received from the council when it came to these competitions?",
        "11. Rate your experiences with the following clubs/communities under the Tech Council"
    ]}    
    
    plots = {Array.from({ length: 11 }, (_, index) => `/GS_Satisfaction_survey/GSTA/${index + 1}_tech.jpg`)} 
    
    responses={[78,62,60,51,49,46,40,37,41,37,"35.85 (Average per club)"]
    }/>
    
    </div>
  );
}

export default TechnicalPage;
