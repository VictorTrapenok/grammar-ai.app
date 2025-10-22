/**
 * Main page - landing for Grammar AI application
 * Built from modular components for better maintainability
 */
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Import all landing page components
import { Hero, Features, HowItWorks, FAQ, FinalCTA, StickyMobileCTA } from "@site/src/components/LandingPage";

/**
 * Main page component
 */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Grammar AI",
    operatingSystem: "Android",
    applicationCategory: "ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "AI-powered grammar correction and translation tool. Fix spelling and grammar errors instantly with artificial intelligence.",
    downloadUrl: "https://play.google.com/store/apps/details?id=app.grammar.ai",
    author: {
      "@type": "Organization",
      name: "Grammar AI",
    },
    keywords: ["grammar checker", "AI grammar", "text correction", "translation", "writing assistant"],
  };

  const title = "Grammar AI — AI-Powered Grammar Correction & Translation";
  const description = "Fix grammar and spelling errors instantly with AI. Translate text between languages. Simple, fast, and accurate.";

  return (
    <Layout title={title} description={description}>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Main content */}
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      {/* Sticky CTA button for mobile */}
      <StickyMobileCTA />
    </Layout>
  );
}
