"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ContactForm from "./ContactForm";

function ContactUs() {
  const t = useTranslations("contactUs");

  const contactUsBanner = {
    src: "/contact/contact_1.png",
    header: t("banner.header"),
    text: t("banner.text"),
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
          heading={t("heading.main")}
          subheading={t("heading.subheading")}
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
