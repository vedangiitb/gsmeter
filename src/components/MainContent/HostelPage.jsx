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

function HostelPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"11/03/2024"}>Gsha Meter</Title>
      <ImageContainer
        name={"Pratham Kapure"}
        manlink={
          "https://drive.google.com/file/d/1A4C79LBvjLxNLK-7dQobBm_F6zwJ0m7v/view"
        }
        imgsrc={"/kapure.png"}
        por={"General Secretary Hostel Affairs"}
        chartsrc={"/hostel.png"}
        completed={55.8}
        notstarted={11.6}
        ongoing={32.6}
        unclear={0}
      />
      <Indicator />

      <SectionHeader>Eateries and Mess</SectionHeader>
      <Points>
        <RP>
        Setup of a food outlet & installation of automatic snack and beverage vending machine in Central Library Area
        </RP>

        <OP>
        Push for night canteens for H-17, 18 in collaboration with the hostel councils
        </OP>

        <RP>
        Set up a branded Coffe Outlet's Express Service near H5 or Aromas at subsidized rates
        </RP>

        <RP>
        Restart Surplus Food donation campaign to ensure timely collection and donation of surplus mess food via partner NGOs
        </RP>

        <RP>
        Workshops by nutritionists for mess councillors along with chefs and mess managers
        </RP>

        <RP>
        Set up Fruit and Salad Centre near H1 or H14 and ensure delivery to hostels
        </RP>
      </Points>

      <SectionHeader>Institute Wide Facilities</SectionHeader>
      <Points>
        <OP
        reply = {
          "With regards to this point, cycle stands in front of indoor courts are completed and cycle shed for hostels are underway"
        }
        >
        Follow up on a comprehensive Cycle Shed Policy (to ensure construction of cycle sheds in hostels) and push for Cycle stand to be installed in front of indoor courts
        </OP>

        <OP>
        Propose to have a 24*7 medical store near H18 or old sac
        </OP>

        <RP>
        Push for execution of the umbrella project consisting of road renovation, the creation of a separate cycle track and footpath
        </RP>

        <RP>
        Follow up on proposal of a Playground facility near H-17,7 and a park near H-15,16
        </RP>

        <OP>
        Follow up on setting up of a unisex hair salon near H-12,13,14
        </OP>

        <OP>
        Push for setup of an Electronics Buy and Repair shop in H-15
        </OP>

        <OP>
        Ensure installation of sign boards and maps in the institute
        </OP>

        <RP>
        Push for the installation of Sanitary Napkin Dispensers in the academic area & female hostels
        </RP>

        <OP>
        Installation of coordinated Digital Display Boards at prominent locations in campus (to curb uses of posters and flexes)
        </OP>
      </Points>

      <SectionHeader>Transparency and Accountability</SectionHeader>
      <Points>
        <RP>
        Publish minutes of HGSC, Network and computing, Maintenance-Mess Committee meetings
        </RP>

        <RP>
        Follow up on setting up of the Student grievance cell (develop a portal for addressing issues with feedback)
        </RP>

        <OP>
        Follow up on the formation of the hostel constitution
        </OP>
      </Points>

      <SectionHeader>Transportation and Security</SectionHeader>
      <Points>
        <RP>
        Push for introduction of fast chargers as part of e shuttle charging facility and increase number of shuttles
        </RP>

        <RP>
        Push for time extension of e shuttle service and addition of new routes across campus 
        </RP>

        <OP>
        Ensure introduction of e rickshaws and e bicycles
        </OP>

        <OP>
        Propose to have a special transportation service for the Specially-Abled students with an on-call pickup & drop-off
        </OP>

        <RP>
        Push for the installation of Real-Time GPS Trackers in the electric shuttles and the integration of the 3-D Live Track of the same with the Insti app
        </RP>

        <OP>
        Propose building a Permanent Fence behind Hostel 12-13-14 to ensure security of the residents
        </OP>

        <RP>
        Push for Higher Fire Safety Standards by revamping the currently existing safety measures and by ensuring the conduction of fire safety Mock Drills and Training for fresher students 
        </RP>

        <OP>
        Follow up on building a Security Website with updated contact lists of the authorities and personnel along with the Security Code of Conduct, ensure maintenance of lost and found portal
        </OP>
        
      </Points>

      <SectionHeader>Sustainability Cell</SectionHeader>
      <Points>

        <RP>
        Introduce Awards for hostels on the basis of energy, water usage, & waste segregation
        </RP>
        
        <WP>
        Push for a 'Net Zero Campus': Usage of Renewable Energy for various purposes in the Hostels and Transport Facilities 
        </WP>

        <WP
        reply = {
          "There are too many stakeholders to bring together."
        }
        >
        Follow up on formation of the Umbrella Committee to unite sustainability stakeholders
        </WP>

        <RP>
        Follow up on the Waste Segregation project to provide for sustainable waste disposal,
        </RP>

        <RP>
        Conduct Drives in hostels to create awareness about the importance of sustainability. 
        </RP>

        <RP>
        Follow up on the Waste Data Mapping project to instil behavioural change among the students
        </RP>

      </Points>

      <SectionHeader>Hostel Facilities and Hospital</SectionHeader>
      <Points>
        <RP>
        Ensure the installation of 24x7 L-DAP Based Printers in all Hostels
        </RP>

        <RP>
        Increase the Amenities in hostel basic amenities list and ensure collaborative procurement
        </RP>

        <OP>
        Follow up on digitalization of room cleaning process through the PHO Digitalization initiative
        </OP>

        <RP>
        Ensure implementation of the Hostel Room Management Portal ensuring hassle-free paperwork
        </RP>

        <OP>
        Implement a Hospital Portal for online management of medical records, setting up appointments, and smoothening the process of voluntary blood donation and vaccination
        </OP>

        <WP>
        Conduct general Health Awareness Camps with workshops about healthy lifestyle & exercise
        </WP>

        <RP>
        Push for Medical Drives in hostels comprising Physicians, Dentists, & Eye Specialists
        </RP>
      </Points>

      <SectionHeader>Miscellaneous</SectionHeader>
      <Points>
        <WP>
        Re-introduce Passport Mela and Pan Card Drive
        </WP>

        <RP>
        Integrate Smart Map with Insti App
        </RP>

        <RP>
        Introduce an Online Interface for graduating students to facilitate the donation of belongings
        </RP>

        <WP>
        Follow up on Digital Guest Entry System for convenient entry-exit and record maintenance
        </WP>
        
      </Points>

      <SectionHeader>Off Manifesto Points</SectionHeader>

      <Points>
        <RP>
        Aesthetic campus project was initiated and primary works of seating space in front of Hostel 10 as well as various works in academic area including seating spaces for students
        </RP>

        <RP>
        Student subsidy at Dominos was increased to 20% and delivery charges reduced by 50%; Pav bhaji and live dosa center was established at Aromas; and the menu and timings of CCD were incremented
        </RP>

        <RP>
        Structural repair works initiated and completed in Hostels 6,9,1,16 with renovation of Hostel 3 under progress and external painting of Hostels Tansa and 15 under progress, external painting for H9 approved and work to be started soon; infrastructure facilities for Specially abled students worked upon and completed at various locations in the Institute. Playfield development of Hostel 9 completed and Hostel 13 approved. Conversion of box rooms into washrooms initiated in Hostel 1 and work under progress. Road repair works in Hostel area initiated and completed.
        </RP>

        <RP>
        Swachhata Pakhwada: Conducted Cleanliness drives at various places in the campus with collaboration of students, staff and external NGO. Coordinated with all the hostel council and successfully carried out a 15-day long event. Tree plantation was conducted in all the hostels which were provided and arranged by the institute. Award ceremony conducted to facilitate the best performing hostels. Students at IITB made a commitment to actively minimize food waste through a pledge. Implemented Comprehensive waste management policies, ensuring proper waste management practices in the hostel kitchens. Dedicated dry and waste bins were thoughtfully installed in hostels at IITB for effective waste segregation.
        </RP>

        <RP>
        The HGSC (Hostel General Secretaries Committee) award ceremony took place on the 13th of October. Students who had made invaluable contributions to the institute's community were recognized and awarded during the ceremony. The awards were presented by the Dean of Student Affairs (SA) and the Associate Dean of Student Affairs (A Dean SA).
        </RP>

        <RP>
        PhD second year females were provided with single occupancy rooms in Hostel 10/11.There was a policy of providing double occupancy rooms to 2nd year PhD female students, but through the efforts of HA council, they were provided single occupancy rooms. Coordinated and conducted the ‘Dinner with Instructors’ held for UG New entrants at Hostel 16 and 1.
        </RP>
      </Points>

      <SurveyDescript toShow = {0} />

      <GsSurveyImages 
      
      titles = {[
        "1. Which hostel are you a resident of?",
        "2. Are you satisfied with the way Hostel Affairs Council functioned this tenure?",
        "3. Are you satisfied with the performance of the GSHA (General Secretary of Hostel Affairs)?",
        "4. Rate your satisfaction with the IITB hospital.",
        "5. Rate your satisfaction with the transportation facilities available for students.",
        "6. Rate your satisfaction with the hygiene in canteens and other institute food outlets.",
        "7. Rate your satisfaction with the quality of food in canteens and other institute food outlets.",
        "8. Rate your satisfaction with the hygiene in hostel messes.",
        "9. Rate your satisfaction with the basic hostel amenities.",
        "10. Rate your satisfaction with the security in hostels."
      ]}    
    
    plots = {Array.from({ length: 10 }, (_, index) => `/GS_Satisfaction_survey/GSHA/${index + 1}_ha.png`)} 
    
    responses={["",122,121,120,124,123,121,121,122,122]}/>

<Points>The results of the survey are as follows:</Points>

      
      <Footer></Footer>
    </div>
  );
}

export default HostelPage;
