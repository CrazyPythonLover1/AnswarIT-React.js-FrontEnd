import React from "react";
import AdminData from "./AdminData";
import armanSir from "./image/arman-sir.jpg";
import samimSir from "./image/samim-sir.jpg";
import shownSir from "./image/shown-sir.jpg";

const projects = [
  {
    id: 1,
    name: "Mr. H S M Shown Ahmed",
    title: "Founder & Chairman",
    image: shownSir,
    description:
      "Mr. H S M Shown Ahmed was born on 12 December in the year 1984 in Rajbari district. His father Mr. Answar Ali Sheikh was a government employer (now retired) and his mother Mrs: Hajera Begum is also a housewife.",
    desc2: "He studied at Kazi Abdul Majed Government Primary School, Kazi Abdul Majed High School, Pangsha George Pilot High School, Pangsha University College, Sylhet Jalalabad College and Sylhet M C University College. Though he was a student of the department of science, he was bewitched with exceptions and technology from an early age. During his student life and career, he accomplished several IT courses successfully from Sylhet Government Technical Training Center, KOICA, Sylhet Shahjalal University of Science and Technology, Bangladesh German Technical Training Center, Dhaka University, and many other government and non-government institutions. Instead of working as a freelancer in the world’s largest online market Up-Work, he began working with several companies with software and he is also doing business with several countries of the world such as the USA, UK, Australia, Canada. People around the world are thinking and working on 5-G with the destination of creating the condition of people easier and safer and destroying poverty of the people. He is the founder and Co-chairman of Dhali Collection which is one of the largest E-commerce companies in Bangladesh. He has been working relentlessly to fetch agriculture under technology with creating employment for the people of the country. He seeks the aid and blessings of everybody.",
  },
  {
    id: 2,
    name: "Mr. Md. Arman Hossain Shokin Molla ",
    title: "Director",
    image: armanSir,
    description:
      "Mr. Md. Arman Hossain Shokin Molla was born on 23 October in the year 1994 in Gopalgonj district. His father late Mohammad Ali Molla and his mother Mrs: Amena Begum is also a housewife.",
    desc2: "He studied at 5 Nong Gopinathpur Shorifpara Government Primary School, Gopenathpur Buhimukhi High School, Govt. Bangabandhu College and Govt. Titumir University College from complete M.A. Master of Arts. He started an export and import business with several countries like China, Dubai, Koria and established “Amior Interior”, “Sadman Interior”, “Captain Cafe Restaurant”, “Answar IT” in Dhaka. IT company branch office is United State of America: 40-20 39th Avenue, Suite #400 Long Island City, NY 11101. He has been working relentlessly to fetch agriculture and make freelancer all student’s under technology with creating employment for the people of the country. He seeks the aid and blessings of everybody.",
  },
  {
    id: 3,
    name: "Mr. Shamim Ahmed Dhali",
    title: "Director",
    image: samimSir,
    description:
      "Mr. Shamim Ahmed Dhali was born on 20 May in the year 1969 in Narayangonj district. His village house is at Kadomtoli next to Adamjee Jute Mill (present EPZ) under Siddhirganj police station in the Narayangonj district. His father was the late Abdul Hashem Dhali and his mother’s name is Mosa: Khairunnesa. He is the father of two children.",
    desc2: "He accomplished his education at Adamjee High School and Munshiganj Haraganga College. Later, in the year 2001, he had gone to Cyprus which is a European country, for higher education, and there he had engaged in the business of restaurant. In the year 2010, he returned to his homeland without a higher degree because of the people of his beloved country. Then, he started an export and import business with several countries like China, Thailand, India and established “Dhali Fashion” in Keraniganj, Dhaka. “London Boy” is one of the largest showrooms in the country. He is the founder and chairman of a large E-commerce organization in Bangladesh which is called Dhali Collection. Besides he is also working with the United States, London, Canada, Australia on several issues of information technology. He is also thinking and working extensively about 5-G. He has been working relentlessly to fetch agriculture under technology with creating employment for the people of the country. He seeks the aid and blessings of everybody",
  },
  
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
          <h1 className="text-center"
            style={{
              color: "#5c10e3",
              marginRight: "18px",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <b >OUR TEAM</b>
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