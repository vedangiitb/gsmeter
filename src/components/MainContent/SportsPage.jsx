import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import IP from "../Points/IP";
import Indicator from "../Points/Indicator";
import Title from "../Title/Title";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Footer from "../Footer/Footer";
import SurveyDescript from "./SurveyDescrip";
import GsSurveyImages from "./GsSurveyImages";

function SportsPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"13/03/2024"}>Gssa Meter</Title>
      <ImageContainer
        name={"Utkarsh Godwal"}
        manlink={
          "https://drive.google.com/file/d/1MSbKxTSYkXoedryA9qCXuARRLAI-020a/view"
        }
        imgsrc={"/gssa.jpeg"}
        por={"General Secretary, Sports Affairs "}
        completed={55.3}
        ongoing={28.9}
        notstarted={15.8}
        unclear={0}
      />
      <Points>Note: The original manifesto of the ex-GSSA [Anshul Panwar] has been followed for the making of this GS meter</Points>
      <Indicator />

      <Title>INITIATIVES </Title>
      <SectionHeader> Athlete's Odyssey | </SectionHeader>
      <SubHeader>Promoting Holistic Wellness</SubHeader>
      <Points>
        <RP
          reply={
            "A one day event conducted with Fitistan with the Push India Push challenge"
          }
        >
          {" "}
          Triumphs of the Mind and Body event on account of National Sports Day
          which intends to advocate mental and physical fitness into an
          immersive experience of 3-action packed days{" "}
        </RP>
        <RP>
          Sports Union - the Alumni Day, before Inter IIT Camp to leverage event
          as an opportunity to introduce collection of blog posts commemorating
          the remarkable achievements of IITB sports
        </RP>

        <WP reply={"Not completed due to packed schedule owing to Inter-IIT "}>
          Launch the inaugural edition of Abhivyakti- Embracing our Heritage, to
          promote indigenous games like Pitto, Gilli-Danda in all the hostels
          and cultivate cultural pride among the students
        </WP>
      </Points>
      <SectionHeader>
        <strong>Witness Fitness | </strong>
      </SectionHeader>
      <SubHeader>Fuelling your Fitness journey</SubHeader>
      <Points>
        <RP>
          Elevate fitness standards by pushing for a Fitness Club Manager to
          oversee gym and initiatives
        </RP>

        <OP
          reply={
            "Mock GCs will be conducted at the end of the semester after all of the GCs"
          }
        >
          Upraise a culture of fitness by introducing a mock Fitness GC to
          engage and motivate students
        </OP>
        <OP
          reply={
            "Get Set Fit sessions were revamped but fitness workshops were not conducted in hostels"
          }
        >
          Revamp Get Set Fit sessions and host fitness workshops in hostels to
          promote healthier lifestyle
        </OP>
      </Points>
      <SectionHeader>
        <strong>Expanding Sporting Horizons | </strong>
      </SectionHeader>
      <SubHeader> Towards Exponential growth</SubHeader>

      <Points>
        <OP reply={"Hostel 7 grounds have been levelled"}>
          Introduction of Archery, Skating and Handball to elevate enthusiasm,
          promote and diversify the council events in other sports by making use
          of the old swimming pool area and hostel 7 ground
        </OP>
        <RP
          reply={
            "CCTV cameras have been installed in badminton court, new SAC and swimming pool"
          }
        >
          Implement surveillance system through installation of CCTV cameras in
          key facilities of New SAC building, outside swimming pool, badminton
          courts, & indoor gymkhana grounds
        </RP>
        <RP>
          Setting up of portable mosquito repellent machines close to mosquito
          hotspots at sports venue
        </RP>
      </Points>

      <Title>FACILITIES AND INFRASTRUCTURE</Title>
      <Points>
        <OP reply={"Approval completed, open tendering in process"}>
          Construct a Hammer-Discus throwing cage to elevate athletics safety
          standards and transform the tennis storeroom into changing rooms and
          set up an adequate storage facility for table tennis
        </OP>
        <RP>
          Upgrade Gymkhana facilities by resurfacing outdoor basketball courts
          and tennis courts, matting basketball poles, installing volleyball
          rebounder nets and synthetic flooring for table tennis court
        </RP>
        <RP>
          Initiate Wi-Fi facilities in new SAC to ensure efficient internet
          connectivity for events and meets
        </RP>
        <RP>
          Introduce a ground space for Frisbee to ensure involvement in the game
          and replace halide lamps with LED lights in outdoor gymkhana for
          efficient power consumption
        </RP>
      </Points>
      <Title>INTER-IIT AND INSTITUTE TEAMS</Title>
      <Points>
        <OP reply={"Will be done after midsemesters due to undergoing GC"}>
          Champion's Circle - Recognising our Inter-IIT contingent by organising
          a felicitation ceremony
        </OP>
        <RP reply={"An informal session and cake cutting was organised"}>
          Conduct Wave Warriors to raise awareness and support for the Aquatics
          Inter IIT contingent
        </RP>
        <OP reply={"Coach advertisement has been sent, will take 2-3 months"}>
          Introduce NSO Frisbee programme to promote sports diversity and
          inclusivity among students
        </OP>
        <WP reply={"Can't take place due to Aavhan staggering the timeline"}>
          Revitalise Pragati- consisting of intermediate camps across all
          sports, inspired by Prarambh
        </WP>
      </Points>

      <Title>GIRLS SPORTS</Title>
      <Points>
        <RP
          reply={
            "Camps have been conducted in a few sports for female instizens"
          }
        >
          Reduce the gender participation gap by incorporating institute-wide
          Mixed Sports Expedition throughout the year incorporating sports like
          hockey, basketball, football, and racket sports
        </RP>
        <RP
          reply={
            "Girls team have gone for Sparsha,Udhghosh and local tournaments"
          }
        >
          Boost team spirit and empower female sports teams via increased
          tournament representation
        </RP>
        <WP reply={"Can't happen due to complete staff quota"}>
          Appoint a female gym trainer and swimming coach for accessibility and
          familiarity with facility
        </WP>
        <WP
          reply={"Not possible due to unavailabilty of space in female hostels"}
        >
          Enhance cardiovascular health by organizing bi-monthly aerobics
          sessions in the girls' hostels
        </WP>
      </Points>

      <Title>PG SPORTS</Title>
      <Points>
        <RP>
          Conduct various beginner workshops during off-academic time
          culminating in PG Sports Mania
        </RP>
        <WP
          reply={
            "Not completed due to the lack of initiative taking by PG representatives and communication gap"
          }
        >
          Revitalize and improve PG Sports Newsletter: Utsav for better
          institute-wide communication
        </WP>
        <RP>
          Conduct PG orientation during even semester to incorporate PGs &
          increase event participation
        </RP>
      </Points>
      <Title>HOSTEL COORDINATION AND GC </Title>
      <Points>
        <OP reply={"Proposal has been sent for making"}>
          Install GC Tally board in the New SAC to keep all students informed
          about hostel GC standings
        </OP>
        <OP
          reply={
            "Mock GCs will be conducted at the end of the semester after all of the GCs"
          }
        >
          Propose a mock Pool GC for board game enthusiasts to showcase skills
          and engage strategically
        </OP>
        <RP>
          Organize routine workshops for squash, hockey, athletics, and
          weightlifting to improve hostel players' skills and techniques for
          excelling in their respective sports before particular GC
        </RP>
        <WP
          reply={"Not undertaken due to poor gym facilities in several hostels"}
        >
          Boost the fitness level of hostel residents by conducting regular gym
          workshops at hostel gyms
        </WP>
      </Points>

      <Title>ASSISTANCE AND ENHANCEMENT</Title>
      <SectionHeader>Outreach:</SectionHeader>
      <Points>
        <OP reply={"To be done this sem,half tenure video is complete"}>
          Recap Rhapsody-relive the year's events, camps and Inter-IIT
          experience in a rewind video
        </OP>
        <RP
          reply={
            "Has been done by respective secretaries of different sports which happens every year"
          }
        >
          Introducing Sportswear Spectrum an exclusive range of merchandise
          lines for IITB Sports
        </RP>
        <RP>
          Launch digitized freshie sports handbook- Sporting Starters to
          publicise sports and inspire talent
        </RP>
      </Points>

      <SectionHeader>Institute Sports App:</SectionHeader>
      <Points>
        <OP reply={"Has been made,local testing is being done"}>
          Digitize sports facilities and utilise the app to monitor occupancy of
          table tennis, badminton courts, gym, and pool to improve availability
          and avoid overcrowding during peak hours
        </OP>
        <OP reply={"Has been done by the council, yet to be released"}>
          Develop the sports app to include a racket sports ladder ranking and
          fantasy league portal, as well as a catalogue of sports facilities
          available in hostels and Gymkhana, for better accessibility
        </OP>
        <RP>
          Efficiently integrate the Yearbook into the app, automate the process
          for athletes, and create a student tab featuring profiles showcasing
          the accomplishments and accolades of players
        </RP>
      </Points>

      <Title>Follow UPs</Title>
      <Points>
        <RP>
          Expedite the construction of synthetic tracks, outdoor cricket net
          relocation, badminton courts and new SAC squash courts renovation to
          modernise and enhance the institute sporting facilities
        </RP>
        <RP>
          Build an outdoor gym to improve the facility's ventilation and promote
          fitness in the institute
        </RP>
        <RP>
          Pursue the height increment of football field fencing and levelling up
          of sand in long jump pits
        </RP>
        <RP>
          Follow up on movable cricket net cages, bowling machine, motorized
          roller, and lawn mower
        </RP>
      </Points>
      <Title>OFF MANIFESTO POINTS</Title>
      <Points>
        <RP>Installation of dugouts in the cricket and football field</RP>
        <RP>Appointment of permanent physiotherapist in New Sac</RP>
        <OP reply={"Proposal has been sent for budget approval"}>
          Proposal for construction of new cricket ground besides hostel 17
        </OP>
        <OP reply={"Proposal has been sent for budget approval"}>
          Proposal for construction of hockey turf
        </OP>
        <OP
          reply={
            "Dedicated space has been allocated, tendering process is onway"
          }
        >
          Establishment of sports equipment shop in New SAC
        </OP>
      </Points>
      <SurveyDescript toShow={0}/>
      <GsSurveyImages
        titles={[
          "1.	In what capacity were you associated with the sports council?",
          "2.	Are you satisfied with the way the sports council functioned this tenure?",
          "3.	Are you satisfied with the performance of the GSSA (General Secretary of Sports Affairs)?",
          "4.	How satisfied are you with the maintenance of sports facilities that are available on campus?",
          "5.	Are you satisfied with the range of sporting activities available in the institute?",
          "6.	How satisfied were you with the inter-IIT organisation this year?",
          "7.	Did you find the new permanent physiotherapist approachable and effective in diagnosis?",
          "8.	As a beginner do you think that there were enough beginner level camps conducted for the sport of your choice?",
          "9.	How satisfied are you with the quality of coaches available for different sports on campus?",
          "10.	If you are a female, were you hesitant about the use of swimming and gym facilities due to lack of a female instructor?",
          "11.	How satisfied were you with your experiences with any or all of the given sports council?",
        ]}
        plots={Array.from(
          { length: 11 },
          (_, index) => `/GS_Satisfaction_survey/GSSA/${index + 1}_sa.jpg`
        )}
        responses={[117, 102, 100, 100, 100, 98, 88, 91, 88, 11, "52.5(Average respondants Per Sport)"]}
      />
      <Footer></Footer>
    </div>
  );
}

export default SportsPage;
