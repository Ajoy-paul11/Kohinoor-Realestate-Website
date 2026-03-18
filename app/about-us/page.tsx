"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { useTransform } from "framer-motion";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import Aboutus from "../components/Aboutus";

function page() {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });

  const progress = useMotionValue(0);

  const roundedProgress = useTransform(progress, (v) => `${Math.round(v)}%`);
  const progressWidth = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    if (isInView) {
      animate(progress, 90, {
        duration: 1.6,
        ease: "easeOut",
      });
    }
  }, [isInView, progress]);
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
            <div className=" flex flex-col md:flex-row w-full h-full gap-6 max-w-350 mx-auto justify-center">
              <div className=" flex flex-col items-center justify-end md:w-[38%] max-w-full">
                <div className=" max-w-full w-[51%] relative">
                  <h2 className=" text-base tracking-[4px] text-center font-normal uppercase text-white z-10">
                    Kohinoor Real-Estate
                  </h2>
                </div>
              </div>
              <div className=" flex overflow-hidden flex-col ">
                <div className=" max-w-full">
                  <div className=" -mb-4 lg:-mb-5.5 h-full w-full">
                    <div className=" max-w-full">
                      <h2 className=" text-7xl lg:text-9xl font-normal text-center z-1 relative">
                        About us
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col w-full h-full gap-30 pt-49 px-6 pb-24 bg-[#090909]">
        <div className=" flex w-full h-full gap-12">
          <div className=" flex gap-12 h-full max-w-350 mx-auto">
            <div className=" flex flex-col w-[40%] max-w-full justify-between min-h-full">
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className=" w-[32%] pb-1.5 max-w-full border-b border-[#d8bc30]"
              >
                <h2 className=" text-base font-normal uppercase">About Us</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className=" max-w-full h-full flex items-end"
              >
                <h2 className=" text-2xl font-normal ">
                  {" "}
                  Redefining Modern Elegance, One Home at a Time
                </h2>
              </motion.div>
            </div>
            <div className=" flex gap-6 w-full h-full ">
              <motion.div
                initial={{ opacity: 0, y: -270 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className=" max-w-full text-left"
              >
                <img
                  className=" w-full h-75 object-cover object-center rounded-lg inline-block align-middle max-w-full border-none"
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/with-a-glas-KSDDCRB.jpg"
                  alt="image"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 370 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className=" max-w-full text-left -my-17"
              >
                <img
                  className=" w-full h-75 object-cover object-center rounded-lg inline-block align-middle max-w-full border-none"
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/young-family-2GJXQGR.jpg"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" flex w-full h-full ">
          <div className=" max-w-350 mx-auto flex gap-60 w-full">
            <div className="w-[85%] flex">
              <motion.div
                ref={progressRef}
                className="w-[80%] bg-[#121212] flex flex-col p-6 justify-between border border-[#1E1E1E] rounded-lg"
              >
                <div className="w-[57%] min-h-62.5">
                  <h2 className="text-xl font-normal">
                    Architectural Excellence
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  <motion.div className="text-lg font-normal">
                    <motion.span className=" float-right">
                      {roundedProgress}
                    </motion.span>
                  </motion.div>
                  <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#d8bc30] rounded-full"
                      style={{ width: progressWidth }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className=" flex  justify-between flex-col">
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className=" w-[79%] min-h-62.5 max-w-full "
              >
                <div className=" h-full">
                  <p className=" text-left text-4xl font-normal text-[#929292]">
                    Where architectural innovation meets timeless{" "}
                    <span className=" text-white bg-black px-2">
                      sophistication our passion lies in creating homes{" "}
                    </span>
                    that reflect both artistry and legacy.
                  </p>
                </div>
              </motion.div>
              <div className=" max-w-full">
                <h2 className=" text-xl font-normal">
                  Crafted by top architects fluent in luxury.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative bg-[#121212] px-6  mx-auto w-full overflow-hidden">
          <div className="  w-full py-6 marquee-mask">
            <Marquee gradient={false} speed={50} className=" flex gap-6">
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-5.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-4.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-3.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-2.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-1.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-5.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-4.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-3.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-2.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector-1.png"
                  alt=""
                />
              </div>
              <div className=" mx-6 lg:mx-9">
                <img
                  src="https://templates.studioniskala.com/luxhom/wp-content/uploads/sites/31/2025/11/Vector.png"
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div> */}
      <Aboutus />
    </div>
  );
}

export default page;
