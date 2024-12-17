import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle="Tours Details">
      <MainSlider />
      <TourDetailsPage />
    </Layout>
  );
};

export default TourDetails;
