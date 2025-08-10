import React from "react";
import Banner from "../common/banner/Banner";
import Heading from "../common/heading/Heading";
import ContactForm from "./ContactForm";
const setContactUsBanner = {
  src: "/contact/contact_1.png",
  header: "Contact Us",
  text: "We’d love to hear from you! Whether you have questions, need support, or want to share feedback, our team is here to assist you. We are committed to providing you with a seamless and enjoyable experience. Don’t hesitate to reach out—whether it’s for assistance with a project, inquiries about our services, or suggestions to improve your experience. Our dedicated support team is ready to ensure you get the help you need, when you need it. Your satisfaction is our priority, and we look forward to connecting with you soon.",
};
function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        src={setContactUsBanner.src}
        header={setContactUsBanner.header}
        text={setContactUsBanner.text}
      />
      <div className="px-4 sm:px-6 2xl:px-0">
        <Heading
          heading="Get In Touch"
          subheading="Likewise, a range of activities enriches life, blending vigor with balance. The result is a lifestyle that’s not only dynamic but also deeply rewarding."
        />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
