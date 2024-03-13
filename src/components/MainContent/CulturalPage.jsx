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

function CulturalPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"13/03/2024"}>Gsca Meter</Title>
      <ImageContainer
        name={"Rishi Kanodia"}
        manlink={
          "https://drive.google.com/file/d/17x_8Fs_CHwHH2ezpICIzsXgakevUjWS4/view"
        }
        imgsrc={"/rishi.png"}
        por={"General Secretary Cultural Affairs "}
        completed={28.21}
        notstarted={38.46}
        ongoing={33.33}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>EXPOSURE | Elevating Culturals</SectionHeader>
      <Points>
        <WP
          reply={
            "The team has decided to pursue it in a more entrepreneurial way, so it can’t be used"
          }
        >
          "TalentHub@IITB: Develop a portal for IIT-B students to market their
          skills in design, photography, videography, etc., to fulfill the
          requirements of students, faculty & institute bodies "
        </WP>
        <OP
          reply={
            "We conducted a showcase at Alumination and also distributed a newsletter. Additionally, we convened a meeting in the Dean's ACR office. However, the setup for the corpus fund has not yet obtained approval from the Dean's ACR office. There is a pressing need for assurance regarding the availability of funds to ensure sustainability. The pitch has not been presented as of now."
          }
        >
          Corpus Connect: Push to set up a Corpus Fund & invite donations from
          alumni through showcase events like Alumination & various newsletters
          to facilitate participation in external competitions
        </OP>
        <OP
          reply={
            "This wasn't a standalone event. 'IITB Got Talent' took place during the PG Cult Phase 2, and jam sessions have already occurred. Due to scheduling constraints, each element had to take place separately. Coordinating such an event was challenging. A similar event, the Mumbai Mela for freshmen, was held on a comparable scale, but not during the spring semester."
          }
        >
          "Mélange: Organize an informal night comprising of karaoke, art
          competition, board games, jamming, & IITB's Got Talent early in the
          spring semester at Old SAC & SAC back lawns "
        </OP>
        <RP
          reply={
            "Kaava conducted a full-fledged orientation. Workshops were held in December, taking place in the kitchen. Additionally, there was a karaoke barbecue night. Another competition is in the planning stages, with the intention of making it a grand competition within the next two years."
          }
        >
          Conduct cooking competitions & workshops to facilitate quality
          participation in Inter IIT Culturals
        </RP>
        <RP>
          Ensure formation of Genre Captains at the start of the tenure to
          handle contingent auditions, practices, & logistics for external
          competitions throughout the year & Inter IIT Cultural Meet
        </RP>
      </Points>
      <SectionHeader>SOCIAL IMPACT | Cult-For-A-Cause</SectionHeader>
      <Points>
        <OP
          reply={
            "For Kaladarshan, there were plans to launch a form for artwork submissions intended for donation, specifically paintings for auction purposes. In this process, artists who donate their paintings for auction will participate in a silent auction, with consent obtained from each artist. Verification of the artwork can be done through the form. Discussions were underway with a professor who runs a non-profit organization. If an agreement isn't reached with him, coordination will be pursued with NSS, although the preference is to proceed independently."
          }
        >
          "Culturally Conscious: Collaborate with NSS IIT Bombay & Non-Profit
          Organizations in the institute to raise funds for social causes by
          monetizing artworks & showcases in flagship even "
        </OP>
        <OP
          reply={
            "A script was prepared for a performance but never staged. Coordination was done with Sulaghna Ma'am for student initiatives, including addressing student issues with dance and music therapy sessions. The street play script was introduced through ICSP, with mentorship provided to students. Although initially planned for Sophie Prod, it didn't happen. Plans for  doing this in Fresshiezza part 2 are in progress, but not in the Street Play GC, which  won't occur due to event overload."
          }
        >
          Shattering Stigma: Collaborate with the Student Wellness Center to
          organize street plays & flash mobs on important issues, to raise
          awareness about mental health among institute residents
        </OP>
        <WP
          reply={
            "Work commenced in July to try minimize printing posters, but it did not work out further"
          }
        >
          "Reflex: Collaborate with NSS IIT Bombay to follow up on donation of
          PVC banners for reuse by NPOs; provide yearly statistics on waste
          reduction, thereby minimizing publicity waste "
        </WP>
      </Points>

      <SectionHeader>HOSTEL CULTURE | Reviving Culturals</SectionHeader>
      <Points>
        <RP
          reply={
            "All the councils have their own GC leaderboards, so there's no assurance that the leaderboard will be updated regularly by all the 3 council's as only Cult people approached devcom. This means that all work was done from ICC's side."
          }
        >
          "GC Meter: Create a 'General Championship Blog' on InstiApp in
          collaboration with DevCom to enhance transparency & competitiveness,
          by maintaining overall leader board, results & scores "
        </RP>
        <WP reply={"This did not happen"}>
          GC Lookback: Release semesterly document consisting of live recordings
          & testimonials of GC participants & Cultural Councilors to increase
          recognition of various art forms in hostelites
        </WP>
        <RP
          reply={
            "The event was successfully executed, aiming to distribute prizes from last year's PAF and Cult Cup. Each cultural coordinator was given an opportunity to be on stage. Notably, more participation came from non-performing hostels. Incentive points akin to sports were allocated based on participation. there was a turnout of approximately 700 people in the Convocation Hall."
          }
        >
          GC Ceremony: Conduct GC Opening Ceremony before first Cultural GC to
          increase awareness
        </RP>
        <WP reply={"This did not happen"}>
          Ensure jamming & workshops in common areas of hostels to improve
          hostel penetration
        </WP>
      </Points>
      <SectionHeader>LEARNING | Enriching Culturals</SectionHeader>
      <Points>
        <WP reply={"This did not happen"}>
          Propose introduction of courses like Western Vocals and Music
          Production in NSO Culturals
        </WP>
        <RP reply={""}>
          Conduct workshops on niche topics like Improv, Generative Art, Mime,
          Jazz Techniques etc.
        </RP>
        <RP
          reply={
            "we are making the students of NSO dramatics to make a street play script as project, we invited NSO students to jammings, we organised performances during Republic Day, Independence Day, Gandhi Jayanti from NSO Vocals to jammings"
          }
        >
          Push for project/performance within the NSO Culturals to ensure
          integration into cultural events
        </RP>
        <WP reply={"This did not happen"}>
          Ensure a mentorship structure in 'Cult Not Difficult' to engage newer
          people in cultural clubs
        </WP>
        <RP
          reply={
            "All projects were either in collaboration with a professor or initiated by an external individual. In journalism, WeSpeak produced a 7-minute video focused on policy change. Despite providing contacts of professors to participants who engaged in group work with professors, the expected output did not materialize. For the crossword puzzle, no newspaper agreed, leading to inviting Yahya instead. The music analysis project also occurred as planned."
          }
        >
          "Ensure professor guided ICSP & inclusion of professional mentorship
          in rest of the projects; Moreover, include new projects like music
          analysis, journalism & cryptic crosswords "
        </RP>
        <OP
          reply={
            "The tasks are still in progress. Data aggregation is underway on OneDrive, requiring additional storage due to workshop-related content. Permission from the CC is necessary for this purpose. The website is currently under construction"
          }
        >
          "Aggregate all the previous & future workshop recordings on culturals
          website for indefinite access "
        </OP>
        <RP
          reply={
            "workshop was conducted before the Inter-IIT event, taking place in the last week of October."
          }
        >
          Foster writing community by organizing regular inter-club writer's
          meet for writers of Literati, Fourthwall & Vaani to facilitate
          propagation of knowledge from various niches
        </RP>
      </Points>
      <SectionHeader>PG CULT | Expanding Culturals</SectionHeader>
      <Points>
        <WP reply={"There were attempts but it did not materialise"}>
          PG Sandhya: Host a PG open mic in the H12/13/14 cone area to engage a
          wider PG audience
        </WP>
        <OP
          reply={
            "Workshops were conducted in PG hostels, covering anchoring skills in Phase 1. Cult coordinators for phases 12, 13, and 14 were encouraged to participate. Collection of Phase 2 points is underway, which was skipped last year. The term 'bilegged' refers to separate consideration of Phase 1 and 2, still in practice. Departmental cultural secretaries need to demonstrate greater responsibility. "
          }
        >
          "Retain the bi-legged structure of Department GCs & hold regular
          workshops in PG Hostels "
        </OP>
      </Points>
      <SectionHeader>
        Web & Publications | Broadcasting Culturals{" "}
      </SectionHeader>
      <Points>
        <RP
          reply={
            "It was launched during Alumination, the second semesterly newsletter is planned to be released in April"
          }
        >
          The Cultural Heritage: Launch a semesterly newsletter of the Institute
          Cultural Council to publicize achievements, literature pieces &
          experiences to increase student & alumni outreach
        </RP>
        <OP
          reply={
            "A draft was made for the song, it was not chosen to be the final anthem, so the song was released independantly "
          }
        >
          Produce a Culturals Anthem to promote the rich diversity of Culturals
          in various genres in IITB
        </OP>
        <WP reply={"This did not happen"}>
          Create an Instagram page for regular sharing of informal student
          creations like poetry, & music as collaborative posts & providing
          better outreach for summer programs such as CultConnect
        </WP>
      </Points>
      <SectionHeader>"INFRASTRUCTURE | Equipping Culturals "</SectionHeader>
      <Points>
        <OP
          reply={
            "Aggregation was carried out using Google Sheets. However, a system for issuing inventory was not established. This idea was abandoned because the Student Activity Center provides the necessary equipment upon request."
          }
        >
          Inventory Digitization: Push for the creation of an aggregate of
          music, film, & photography inventory of SAC by institute secretaries
          to account for regular maintenance & transparency
        </OP>
        <OP
          reply={
            "Quotations for digital walls are currently being obtained, and the Design Secretary has developed a basic layout for the content placement."
          }
        >
          Refurbish the Gallery wall in SAC to showcase student artworks in
          genres such as Design, Fine Arts & Folk Arts; Mark important events on
          the monthly calendar created by StyleUp & Pixels
        </OP>
        <WP reply={"This did not happen"}>
          Create directory of vendors for student discounts on purchase & repair
          of music & other equipment
        </WP>
        <RP
          reply={
            "Five to six cameras were purchased, as a significant amount of inventory was lost post-COVID, there were also plans to procure sewing machines (which were intended for NSO fashion) and cupboards. The procurement process was facilitated through 3 to 4 meetings organized by IOE Doola. Only purchase of sewing machine is pending, rest were done"
          }
        >
          Push for the purchase of additional inventory such as cameras, theatre
          lights, hard drives, gimbals, amplifiers, microphones, projector,
          sewing machines & cupboards
        </RP>
      </Points>
      <SectionHeader>FOLLOW-UPS | Continuing Culturals</SectionHeader>
      <Points>
        <OP
          reply={
            "The site is live now, but a lot of changes are left to be made."
          }
        >
          Culturals.iitb: Develop a website to establish an online presence &
          create a one-stop portal to access important information, workshops,
          blogs, & past event videos & highlights of all genres
        </OP>
        <WP reply={"This did not take place."}>
          Revive 'Cult Yatra'- genre trips of cultural clubs to cultural
          institutions/events around Mumbai
        </WP>
        <WP
          reply={
            "Publicizing inter-college achievements was planned but not executed due to the higher number of participants, making it logistically challenging to implement."
          }
        >
          Ensure personalization of 'Know-Your-Contingent' & publicity of Inter
          College achievements
        </WP>
        <WP reply={"This did not take place."}>
          Revive Cult Buddy system in NSO Culturals for a prolonged association
          of students with clubs
        </WP>
        <OP
          reply={
            "We booked a recurring studio, shot it with alums like Sanskar Wavale and Prasann Joshi which took (10+ hours each), Editing is not done yet"
          }
        >
          Revamp Cult Chronicles to launch video podcasts on Cultural's
          Instagram & Youtube page of experiences shared by club seniors, &
          master talks by professors & industry experts
        </OP>
        <WP reply={"This could not take place."}>
          Push for regular meets of institute cultural secretaries & hostel
          genre secretaries to provide redressal for genre-specific grievances &
          ensure maximum outreach in events & GCs
        </WP>
        <OP
          reply={
            "The proposal was approved, but despite that, open gym equipment was stored there. However, IBS needed the rooms, but renovation hasn't taken place yet. The old yoga room was designated for the inventory, and it was supposed to happen in the theater room."
          }
        >
          Push for allocation of a common room in Old SAC for Literati, WeSpeak,
          Vaani, & ComedyCons, & designation of a storage space for inventory of
          StyleUp & The Design Club
        </OP>
        <WP reply={"This did not take place."}>
          Extend availability of Cultural merchandise to Mélange & Freshiezza
          along with orientations
        </WP>
        <RP>
          Conduct Freshiezza for the current freshers in summers to compensate
          for the missed opportunity
        </RP>
      </Points>
      <SectionHeader>MANAGEMENT | Augmenting Culturals</SectionHeader>
      <Points>
        <OP
          reply={
            "The workshops were not week-long; they spanned three days. The first day focused on video editing, the second day on design skills, and the third day on soft skills. The workshops were conducted with the expectation of early convener selections but ended up being scheduled after midterms."
          }
        >
          Restructure the current convenor training program to a week-long
          workshop in design, video making & editing to make them
          self-sufficient to manage the constant workload of clubs
        </OP>
        <WP reply={"This did not take place."}>
          Conduct monthly pan ICC town halls with conveners to increase
          transparency within the council
        </WP>
      </Points>
      <SurveyDescript />
      <GsSurveyImages
        titles={[
          "1.	In what capacity were you associated with the Institute Cultural Council?",
          "2.	Are you satisfied with the way the cultural council functioned this tenure?	",
          "3.	Are you satisfied with the performance of the GSCA (General Secretary of Cultural Affairs)?",
          "4.	How satisfied are you with the maintenance of facilities that are available on campus for culturals, including SAC?",
          "5.	Are you satisfied with the range of cultural activities available in the institute?",
          "6.	How satisfied were you with the inter-IIT organisation this year?",
          "7.	As a beginner, do you think that there were enough opportunities provided to you to in order to learn activities under culturals?",
          "8.	In case you are a PG student, were you satisfied with the way PG Cult handled cultural events this year?",
          "9.	Do you think the number and quality of the events conducted by ICC this year were up to the mark?",
          "10.	How satisfied were you with your experiences with the following cultural clubs?",
        ]}
        plots={Array.from(
          { length: 10 },
          (_, index) => `/GS_Satisfaction_survey/GSCA/${index + 1}_ca.png`
        )}
        responses={[74, 54, 56, 53, 54, 49, 51, 17, 47, 472]}
      />

      <Footer></Footer>
    </div>
  );
}

export default CulturalPage;
