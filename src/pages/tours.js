import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PopularTours from "@/components/PopularTours/PopularTours";
import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Tours">
      <PageHeader title="Popular Tours" page="Tours" />
      <PopularTours toursPage />
    </Layout>
  );
};

export default Tours;
