import Image from "next/image";
import React from "react";

function ThankYouPageLayout() {
  const content = {
    job: {
      title: <h1>Thank You for Posting Your Job!</h1>,
      description: (
        <p>
          We appreciate you choosing our platform to find the right freelancer
          for your project. Your job post is now live and will be visible to
          talented professionals who are ready to help bring your vision to
          life. You’ll start receiving proposals shortly, and we’re here to
          assist if you need any help along the way.
          <br />
          Thank you for trusting us with your hiring needs – we look forward to
          helping you connect with the perfect freelancer!
        </p>
      ),
    },
    tender: {
      title: <h1>Thank you for posting your tender!</h1>,
      description: (
        <p>
          We appreciate your trust in our platform to find the right
          professionals for your project. Your tender is now live and will be
          seen by qualified freelancers ready to submit their best proposals.
          We’re excited to help you connect with the perfect candidate to bring
          your vision to life. If you have any questions or need further
          assistance, feel free to reach out.
        </p>
      ),
    },
  };
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 2xl:px-0">
      <div>
        <Image
          src="/thank-you-page.png"
          alt="thank you"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        {content.title}
        {content.description}
      </div>
    </div>
  );
}

export default ThankYouPageLayout;
