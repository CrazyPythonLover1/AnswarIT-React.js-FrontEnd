import React from "react";
import AdminData from "./AdminData";
import nazrul from "./image/Westin Nazrul 01890802802.JPG";
import shownSir from "./image/shown-sir.jpg";

const projects = [
  {
    id: 1,
    name: "Mr. H S M Shown Ahmed",
    title: "Founder & Chairman",
    image: shownSir,
    description:
      "Mr. H S M Shown Ahmed @ Scientist Shown was born on 15 April, July in Rajbari district, Pangsha upazila, Parnarayanpur village.His father’s name Ansar Ali Sheikh and mother’s name Johura Hazera Begum.He will research since childhood.For this reason, he is known as a scientist in his area. He is one of the mushroom researchers and scientists of Bangladesh. He did research at Dhaka Medical College Hospital,Dhaka. He also works in the medical profession and provides treatment for complex diseases.  He has deep knowledge in information technology. He acquired knowledge of technology from various government and private institutes.He works on blockchain technology in his organization. He works in these two NGO, named “Save The Water Bangladesh” and “Good Health Organization Bangladesh”. His business concerns are Prottassa Clean and Care, Good Health Organization Bangladesh, DotMail IT, Answar IT.He is thinking and working on 5-G with the destination of creating the condition of people easier and safer and destroying poverty of the people. He is a social worker and is working to create employment in the IT sector for the young generation of Bangladesh. He seeks the aid and blessings of everybody. ",
  },
  {
    id: 2,
    name: "Mr. Mohammad Nazrul Islam",
    title: "Director",
    image: nazrul,
    description:
      "Mr. Mohammad Nazrul Islam @ Westin Nazrul was born on 23 April, 1974 in Gazipur district. His father’s name Mohammad Abdul Jabber and mother’s name Johura Begum. He studied at Manipur Govt. Primary School, Narsingdi Govt. College and MSS from Jagannath University and MBA from UITS. Microsoft Certified Professional (MCP) completed from Microsoft Corporation, USA. Though he was a student of the department of social science, he was bewitched with exceptions and technology and business development from an early age. He started his career from Institute of Mentally Retarded Bangladesh (BIMR) and served many more local and international establishment including Meed Trading, KSA, Wills Intech Ltd and The Westin Dhaka, Bangladesh.He is the founder and chairman an NGO named “Save the Water Bangladesh”. His business concerns are Prottassa Clean and Care, Good Health Organization Bangladesh, DotMail IT, Answar IT. He is also a motivational speaker and delivered his speech in different stages to different audience though the country for 22 years specially in Marketing and Hospitality sectors. For business purpose and having vacation he visited KSA, India, Malassia, China, Singapore and UAE. He is thinking and working on 5-G with the destination of creating the condition of people easier and safer and destroying poverty of the people. He seeks the aid and blessings of everybody.",
  },
  // {
  //   id: 3,
  //   name: "Mr. Shamim Ahmed Dhali",
  //   title: "Director",
  //   image: samimSir,
  //   description:
  //     "Mr. Shamim Ahmed Dhali was born on 20 May in the year 1969 in Narayangonj district. His village house is at Kadomtoli next to Adamjee Jute Mill (present EPZ) under Siddhirganj police station in the Narayangonj district. His father was the late Abdul Hashem Dhali and his mother’s name is Mosa: Khairunnesa. He is the father of two children.",
  //   desc2: "He accomplished his education at Adamjee High School and Munshiganj Haraganga College. Later, in the year 2001, he had gone to Cyprus which is a European country, for higher education, and there he had engaged in the business of restaurant. In the year 2010, he returned to his homeland without a higher degree because of the people of his beloved country. Then, he started an export and import business with several countries like China, Thailand, India and established “Dhali Fashion” in Keraniganj, Dhaka. “London Boy” is one of the largest showrooms in the country. He is the founder and chairman of a large E-commerce organization in Bangladesh which is called Dhali Collection. Besides he is also working with the United States, London, Canada, Australia on several issues of information technology. He is also thinking and working extensively about 5-G. He has been working relentlessly to fetch agriculture under technology with creating employment for the people of the country. He seeks the aid and blessings of everybody",
  // },

  //   {
  //     id: 3,
  //     name: "MR. KAMAL",
  //     title: "programmer",
  //     image: "https://i.ibb.co/st14mjm/cox-bazar.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore incidunt enim, exercitationem beatae eum nulla quam commodi placeat voluptatem praesentium recusandae quae quia nobis dignissimos!",
  //   },
  //   {
  //     id: 4,
  //     name: "MR. KAMAL",
  //     title: "programmer",
  //     image: "https://i.ibb.co/st14mjm/cox-bazar.jpg",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore incidunt enim, exercitationem beatae eum nulla quam commodi placeat voluptatem praesentium recusandae quae quia nobis dignissimos!",
  //   },
];
const Admin = () => {
  const firstSide = {
    backgroundColor: "green",
    height: "40px",
    width: "40%",
  };
  const secondSide = {
    backgroundColor: "green",
    height: "40px",
    width: "42%",
  };
  return (
    <section className="container-fluid pb-5">
      <main className="pt-5 pb-4">
        {/* <div style={firstSide}></div> */}
        <h1
          className="text-center"
          style={{
            color: "#5c10e3",
            marginRight: "18px",
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <b>OUR TEAM</b>
        </h1>
        {/* <div style={secondSide}></div> */}
      </main>
      {projects.map((data) => (
        <AdminData key={data.id} singleData={data}></AdminData>
      ))}
    </section>
  );
};

export default Admin;
