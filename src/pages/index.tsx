import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container">
        
      </div>
    </Layout>
  );
}
