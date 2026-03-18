"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

function Aboutus() {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });

  const progress = useMotionValue(0);

  const roundedProgress = useTransform(progress, (v) => `${Math.round(v)}%`);
  const progressWidth = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    if (isInView) {
      animate(progress, 90, {
        duration: 1.8,
        ease: "easeOut",
      });
    }
  }, [isInView, progress]);

  return (
    <div className=" flex flex-col w-full h-full gap-30 pt-40 md:pt-49 px-6 pb-24 bg-[#090909]">
      <div className=" flex w-full h-full gap-12">
        <div className=" flex flex-col md:flex-row gap-12 h-full max-w-350 mx-auto">
          <div className=" flex flex-col md:w-[40%] gap-8 max-w-full justify-between min-h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
          <div className=" flex flex-col md:flex-row gap-6 w-full h-full ">
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
        <div className=" max-w-350 mx-auto flex flex-col md:flex-row gap-12 md:gap-30 lg:gap-60 w-full">
          <div className=" w-full lg:w-[85%] flex">
            <motion.div
              ref={progressRef}
              className=" w-full lg:w-[80%] bg-[#121212] flex flex-col p-6 justify-between border border-[#1E1E1E] rounded-lg"
            >
              <div className="w-[57%] min-h-62.5">
                <h2 className="text-xl font-normal">
                  Architectural Excellence
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {/* Percentage */}
                <motion.div className="text-lg font-normal">
                  <motion.span className=" float-right">
                    {roundedProgress}
                  </motion.span>
                </motion.div>

                {/* Progress bar */}
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
              className=" w-full md:w-[79%] min-h-62.5 max-w-full "
            >
              <div className=" h-full">
                <p className=" text-left text-[22px] md:text-3xl lg:text-4xl font-normal text-[#929292]">
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
    </div>
  );
}

export default Aboutus;
