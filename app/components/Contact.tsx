"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import aboutImage from "../assets/about-interior.jpg";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: " Dubai, UAE",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+97142957104",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@kohinoorrealestate.ae",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 9AM - 6PM",
  },
];

interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      console.log(data);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      reset();

      toast.success("Message sent successfully!", {
        duration: 5000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className=" w-full h-full py-24 px-6 bg-black">
      <div className=" w-full max-w-350 mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-lg uppercase mb-4 pb-1.5 border-b border-[#d8bc30] inline-block tracking-[4px]">
              Contact
            </p>
            <h2 className=" bg-clip-text text-transparent bg-linear-to-r from-white to-90% to-[#d8bc30] text-4xl md:text-5xl font-medium mb-8">
              Get In{" "}
              <span className=" bg-clip-text text-transparent bg-linear-to-r from-white to-90% to-[#d8bc30]">
                Touch
              </span>
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input
                type="hidden"
                value={process.env.NEXT_PUBLIC_FORM_API_KEY}
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input
                type="hidden"
                value="Kohinoor Real-Estate Website"
                {...register("from_name")}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#121212] border-border h-12"
                  {...register("name", { required: "Name is required" })}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#121212] border-border h-12"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              <Input
                type="text"
                placeholder="Subject"
                className="bg-[#121212] border-border h-12"
                {...register("subject", { required: "Subject is required" })}
              />
              <Textarea
                placeholder="Your Message"
                className="bg-[#121212] border-border min-h-37.5"
                {...register("message", { required: "Message is required" })}
              />
              <Button
                type="submit"
                className=" bg-[#d8bc30] px-8 py-6 text-base w-full sm:w-auto text-black font-sans"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#d8bc30]" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src={aboutImage.src}
              alt="Contact us"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
