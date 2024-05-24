import React from "react";
import fr from "../../../assets/fr.jpg";
import check from "../../../assets/checked.png";
const DevInfo = () => {
  return (
    <div className="w-auto  p-6 text-center my-16 ">
      <div className="w-[80vw] mx-auto lg:flex justify-center items-center text-center p-6">
        <div className="mr-16 w-52 mx-auto">
          <img className="" src={fr} alt="" />
        </div>
        <div className="text-center lg:text-start w-[50vw] mx-auto pt-6 lg:pt-2">
          <h2 className="text-2xl font-mono">Faria Rahman</h2>
          <div className="lg:flex flex-wrap justify-between gap-4 items-center mt-8">
            <div>
              <p className="font-bold mb-2">TITLE</p>
              <p className="font-semibold font-mono">MERN Stack Developer</p>
            </div>
            <div>
              <p className="font-bold mb-2">PHONE</p>
              <p>+880 1970-477973</p>
            </div>
            <div>
              <p className="font-bold mb-2 ">EMAIL</p>
              <p className="lowercase">FARIARAHMAN622@GMAIL.COM</p>
            </div>
            <div className=" mt-6">
              <p className="font-bold mb-2 ">Technology</p>
              <div className="flex w-auto justify-between items-center gap-x-16">
                <div>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    ReactJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    Javascript
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    ES6
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    TailwindCSS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    Firebase
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                   ExpressJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                  NodeJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                  JWT
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                   RESTAPI
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                   CRUD
                  </p>
                </div>
              </div>
            </div>
            <div className="w-auto mt-6">
              <p className="font-bold mb-2 ">Education</p>
              <p className="">
                Bsc In{" "}
                <span className="font-mono font-bold">
                  Computer Science & Engineering
                </span>
              </p>
              <p className="">Graduation Year : 2023</p>
              <p className="">CGPA : 3.84</p>
            </div>
          </div>
          <div className=" pt-6  w-[30vw] my-4 ">
            <div>
              <button className="btn border-2 border-black hover:bg-black hover:text-white text-black bg-transparent rounded-none px-20 py-4 mb-8 text-center ">
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
