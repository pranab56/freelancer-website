"use client";
import React from "react";
import { useSelector } from "react-redux";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ContactForm from "./ContactForm";

function ContactUs() {
  const messages = useSelector((state) => state.language.messages);
  const contactUsTranslations = messages?.contactUs || {};

  const contactUsBanner = {
    src: "/contact/contact_1.png",
    header: contactUsTranslations.banner?.header || "Contact Us",
    text:
      contactUsTranslations.banner?.text ||
      "We'd love to hear from you! Whether you have questions, need support, or want to share feedback, our team is here to assist you.",
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={contactUsBanner.src}
        header={contactUsBanner.header}
        text={contactUsBanner.text}
      />
      <div className="px-4 sm:px-6 2xl:px-0">
        <Heading
          heading={contactUsTranslations.heading?.main || "Get In Touch"}
          subheading={
            contactUsTranslations.heading?.subheading ||
            "Likewise, a range of activities enriches life, blending vigor with balance. The result is a lifestyle that's not only dynamic but also deeply rewarding."
          }
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
