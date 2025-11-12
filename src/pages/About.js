import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About Our News Portal</h1>

      <p className="mb-4 text-lg">
        Welcome to our News Portal! We aim to bring you the latest news, insights, and updates
        from around the world. Our team is dedicated to providing accurate, timely, and
        trustworthy news on various topics including technology, sports, entertainment,
        politics, and more.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4 text-lg">
        Our mission is to keep our readers informed with up-to-date news while maintaining
        journalistic integrity. We believe that access to reliable news empowers people to
        make better decisions in their daily lives.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="mb-4 text-lg">
        We envision a world where news is easily accessible, engaging, and trustworthy.
        Through innovative technology and passionate journalism, we aim to be your go-to
        news source.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
      <p className="mb-4 text-lg">
        Our team consists of experienced journalists, editors, and developers who work
        together to deliver high-quality content. We are passionate about news and committed
        to keeping our readers informed.
      </p>

      <div className="mt-6 text-center">
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
