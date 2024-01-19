import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryHeading } from "../components/Text";
import { Icons } from "../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Upwork() {
  const data = [
    {
      image: require("../assets/images/upwork/feedback.png"),
      title: "Card 1",
      description: "Description 1",
    },
    {
      image: require("../assets/images/upwork/feedback2.png"),
      title: "Card 2",
      description: "Description 2",
    },
    {
      image: require("../assets/images/upwork/feedback3.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback4.png"),
      title: "Card 1",
      description: "Description 1",
    },
    {
      image: require("../assets/images/upwork/feedback5.png"),
      title: "Card 2",
      description: "Description 2",
    },
    {
      image: require("../assets/images/upwork/feedback6.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback6.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback7.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback8.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback9.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback10.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback11.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback12.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback13.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback14.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback15.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback16.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback17.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback18.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback19.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback20.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback21.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback22.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback23.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback24.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback25.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback26.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback27.png"),
      title: "Card 3",
      description: "Description 3",
    },
    {
      image: require("../assets/images/upwork/feedback28.png"),
      title: "Card 3",
      description: "Description 3",
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-4 w-4 mx-2 mt-10  bg-gray-500 rounded-full hover:bg-dark-primary active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"></div>
    ),
    // prevArrow: (
    //   <button className="slick-prev" style={{ display: "none" }}></button>
    // ),
    // nextArrow: (
    //   <button className="slick-next" style={{ display: "none" }}></button>
    // ),
    prevArrow: (
      <button className="slick-prev bg-red-300">
        <FontAwesomeIcon icon={Icons.Facebook} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        {/* <FontAwesomeIcon icon={faChevronRight} /> */}
        <FontAwesomeIcon icon={Icons.ArrowUp} />
      </button>
    ),
  };

  return (
    <>
      <div className="bg-[#929597] py-10">
        <div className=" container mx-auto text-white">
          <div className="">
            <PrimaryHeading
              title={"Upwork Section"}
              style={"text-center mx-auto"}
            />
          </div>
          <Slider {...settings}>
            {data.map((card, index) => (
              <div className="card p-5" key={index}>
                <img
                  src={card.image}
                  alt="timage"
                  className="mx-auto mb-4 rounded-[10px]"
                />
                {/* <h2 className="text-xl font-bold mb-2">{card.title}</h2> */}
                {/* <p className="text-gray-600">{card.description}</p> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

// // Upwork.js
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { PrimaryHeading } from "../components/Text";

// export default function Upwork() {
//   const data = [
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 1",
//       description: "Description 1",
//     },
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 2",
//       description: "Description 2",
//     },
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 3",
//       description: "Description 3",
//     },
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 4",
//       description: "Description 4",
//     },
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 5",
//       description: "Description 5",
//     },
//     {
//       image: require("../assets/images/upwork/feedback.png"),
//       title: "Card 6",
//       description: "Description 6",
//     },
//   ];

//   const settings = {
//     dots: true,
//     autoplay: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     appendDots: (dots) => (
//       <div>
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="h-4 w-4 mx-2 mt-10  bg-gray-500 rounded-full hover:bg-dark-primary active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"></div>
//     ),
//     prevArrow: (
//       <button className="slick-prev" style={{ display: "none" }}></button>
//     ),
//     nextArrow: (
//       <button className="slick-next" style={{ display: "none" }}></button>
//     ),
//   };

//   return (
//     <div className="container mx-auto my-6 px-4">
//       <PrimaryHeading title={"Upwork Section"} style={"text-center mx-auto"} />
//       <Slider {...settings}>
//         {data.map((card, index) => (
//           <div className="card p-5" key={index}>
//             <img
//               src={card.image}
//               alt="timage"
//               className="mx-auto mb-4 rounded-[10px] object-cover w-48 h-48"
//             />
//             <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//             <p className="text-gray-600">{card.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
