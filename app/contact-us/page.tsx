import React from "react";
import Contact from "../components/Contact";

function page() {
  return (
    <div>
      <div
        className=" relative flex flex-col min-h-[60vh] w-full justify-center pt-37 pb-24 px-6 mx-auto"
        style={{
          backgroundImage:
            "url('https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/cloudless-sky-NSEC2AH.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/30 from-0% to-60%" />
        <div className=" flex justify-center h-full w-full mx-auto max-w-full">
          <div className=" flex flex-col w-full basis-auto grow-0 shrink">
            <div className=" flex flex-col lg:flex-row w-full h-full gap-6 max-w-350 mx-auto justify-center items-center">
              <div className=" flex flex-col items-center justify-end w-full md:w-[38%] max-w-full">
                <div className=" max-w-full w-[51%] relative">
                  <h2 className=" text-base tracking-[4px] text-center font-normal uppercase text-white z-10">
                    Kohinoor Real-Estate
                  </h2>
                </div>
              </div>
              <div className=" flex overflow-hidden flex-col">
                <div className=" max-w-full">
                  <div className=" -mb-3 lg:-mb-5.5 h-full w-full">
                    <div className=" max-w-full">
                      <h2 className=" text-6xl lg:text-9xl font-normal z-1 relative">
                        Contact us
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div className=" bg-black">
        <div className=" h-px w-[90%] mx-auto bg-[#d8bc30]"></div>
      </div>
    </div>
  );
}

export default page;
