import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation ${siteConfig.title}`}
      description="Documentação completa para desenvolvedores que precisarem utilizar a API da Bembit."
    >
      <div className="container">
        
      </div>
    </Layout>
  );
}
