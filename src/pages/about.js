import AboutPage from "@/components/AboutPage/AboutPage";
import BookNow from "@/components/BookNow/BookNow";
import BrandOne from "@/components/BrandOne/BrandOne";
import CounterOne from "@/components/CounterOne/CounterOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import VideoOne from "@/components/VideoOne/VideoOne";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader title="About" outerPage="Pages" />
      <AboutPage />
      <BookNow />
      <TestimonialOne aboutPage />
      <VideoOne />
      <CounterOne />
      <TeamOne />
      <BrandOne brandThree />
    </Layout>
  );
};

export default About;
