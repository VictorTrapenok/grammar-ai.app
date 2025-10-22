/**
 * Главная страница сайта MalO - лендинг для SCP-1471 приложения
 * Собран из модульных компонентов для лучшей поддерживаемости
 */
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";

// Импорт всех компонентов лендинга
import {
  Hero,
  Features,
  AboutSCP,
  AboutMalO,
  ChatPreview,
  AppFeatures,
  HowItWorks,
  Screenshots,
  FAQ,
  FinalCTA,
  StickyMobileCTA,
} from "@site/src/components/LandingPage";

/**
 * Главный компонент страницы
 */
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Структурированные данные для Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SCP-1471 MalO App",
    operatingSystem: "Android",
    applicationCategory: "EntertainmentApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1200",
    },
    description: "Chat with MalO (SCP-1471) AI companion on Android. Atmospheric messenger-style experience based on SCP Foundation lore.",
    downloadUrl: "https://play.google.com/apps/testing/com.doctordredd.scp1471malo",
    author: {
      "@type": "Organization",
      name: "Digital Containment",
    },
    keywords: ["SCP-1471", "MalO", "SCP Foundation", "AI chatbot", "Android app", "companion app"],
  };

  const title = translate({
    id: "homepage.title",
    message: "SCP-1471 MalO — Chat with the Mysterious SCP Companion | Android",
  });

  const description = translate({
    id: "homepage.description",
    message: "Experience the SCP-1471 AI app. Chat with MalO, explore her eerie personality, and uncover the SCP mystery. Free download for Android.",
  });

  return (
    <Layout title={title} description={description}>
      {/* Структурированные данные */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Основной контент с тематическими секциями */}
      <Hero />
      <AboutSCP />
      <AboutMalO />
      <Features />
      <ChatPreview />
      <AppFeatures />
      <HowItWorks />
      <Screenshots />
      <FAQ />
      <FinalCTA />

      {/* Липкая CTA кнопка для мобильных (появляется при скролле) */}
      <StickyMobileCTA />
    </Layout>
  );
}
