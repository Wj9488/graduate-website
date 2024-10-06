import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import VariableSizeHeading from "@/components/sitewide/VariableSizeHeading";

import { motion as a, useScroll, useTransform, useInView } from "framer-motion";

import Link from "next/link";
import WorkStatus from "@/components/specific/WorkStatus";
import AnimatedLgText from "@/components/sitewide/AnimatedLgText";

import { useState } from "react";
import Footer from "@/components/sitewide/Footer";

const Contact = () => {

    // State to store form inputs
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      reason: "",
      message: "",
    });
    const [status, setStatus] = useState("");
    const [statusColour, setStatusColour] = useState("")
  
    // Handle input change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      setStatusColour("text-gray-500");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setStatus("Message sent successfully!");
          setStatusColour("text-green-500")
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            reason: "",
            message: "",
          });
        } else {
          setStatus("Failed to send message. Please try again.");
          setStatusColour("text-red-500")
        }
      } catch (error) {
        setStatus("An error occurred. Please try again.");
        setStatusColour("text-red-500")
        console.error("Error:", error);
      }
    };

  return (
    <>
      <PageMetadata PageTitle={"Contact"} />
      <main className="overflow-x-hidden">
        <Nav NavPageIdentifierColour={"text__c_reduced_black"} />
        <header className="standard__x_padding_inner p-section-t">
          <WorkStatus />
          <VariableSizeHeading
            fontSize={
              "text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[6rem] pxs-t"
            }
            text={"Eager to work with you"}
          />
        </header>
        <section className="pl-t p-section-b standard__x_padding_inner lg:flex items-start justify-between gap-[1.25rem] lg:gap-[2.5rem] xl:gap-[5rem]">
          <div className="">
            <div className="flex gap-[1.25rem]">
              <Link
                href={"mailto:wtjones10@gmail.com?subject=Let's%20get%20in%20touch"}
                className="hover:opacity-50 duration-200 transition-all"
              >
                <button className="flex gap-1 items-center text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]">
                  Email
                  <div>
                    <svg
                      className="w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] 2xl:w-[27.5px] 2xl:h-[27.5px]"
                      fill="#15151554"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Link>
              <Link
                href={"https://linkedin.com/in/william-thibaut-jones"}
                target="_blank"
                className="hover:opacity-50 duration-200 transition-all"
              >
                <button className="flex gap-1 items-center text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]">
                  LinkedIn
                  <div>
                    <svg
                      className="w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] 2xl:w-[27.5px] 2xl:h-[27.5px]"
                      fill="#15151554"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
            <p className="pxs-t 2xl:text-lg">
              If you want to work together, report a bug or issue with this site
              or just say hi, feel free to drop me a line.
            </p>
            <p className="pxs-t text-xs lg:text-sm">
              Fields marked with a * are mandatory.
            </p>
          </div>
          <div className="w-full lg:w-3/4 mt-[5rem] lg:mt-0">
            <AnimatedLgText 
              text={"Contact Me"}
            />
<form onSubmit={handleSubmit} className="pxs-t">
      <div className="flex gap-[1.25rem]">
        <div className="mb-4 w-full">
          <label htmlFor="firstName" className="block text-xs lg:text-sm mb-2">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-transparent placeholder-[#76767654] py-1 accent__c_white border border-b-[#15151554] focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
            required
            placeholder="First Name..."
            aria-required="true"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="lastName" className="block text-xs lg:text-sm mb-2">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-transparent placeholder-[#76767654] py-1 accent__c_white border border-b-[#15151554] focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
            required
            placeholder="Last Name..."
            aria-required="true"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-xs lg:text-sm mb-2">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full placeholder-[#76767654] border-transparent py-1 accent__c_white border border-b-[#15151554] focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
          required
          placeholder="email@example.com"
          aria-required="true"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-xs lg:text-sm mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company / Organisation"
          className="w-full placeholder-[#76767654] border-transparent py-1 accent__c_white border border-b-[#15151554] focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reason" className="block text-xs lg:text-sm mb-2">
          I'm reaching out because*
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full border-transparent placeholder-[#76767654] py-1 accent__c_white border border-b-black focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
          required
          aria-required="true"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        >
          <option value="">Please select a reason</option>
          <option value="employment">I'd like to talk about employment</option>
          <option value="bug">I've found a bug</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-xs lg:text-sm mb-2">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full placeholder-[#76767654] py-1 border-transparent accent__c_white border border-b-[#15151554] focus:outline-none focus:border-b-black focus:border-b-2 text-[1.35rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1.75rem] leading-[1.1]"
          required
          placeholder="Your Message..."
          aria-required="true"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        ></textarea>
      </div>

      <div className="">
        <button
          type="submit"
          className="flex gap-1 items-center bg-gray-900 hover:opacity-50 transition-all duration-200 text__c_contrast py-3 px-5 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
          <div>
            <svg
              className="w-[17px] h-[17px] 2xl:w-[18px] 2xl:h-[18px] fill-[#fafafa]"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        <p className={`pxs-t text-sm ${statusColour}`}>{status}</p>
      </div>
    </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
