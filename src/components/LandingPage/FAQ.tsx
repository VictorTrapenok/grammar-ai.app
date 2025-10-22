import React, { useState } from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./FAQ.module.css";

/**
 * Интерфейс для одного вопроса FAQ
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Компонент для одного аккордеона FAQ
 */
function FAQAccordion({ item }: { item: FAQItem }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          {/* отображаем переносы строк внутри ответа */}
          <p style={{ whiteSpace: "pre-line" }}>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/**
 * Компонент FAQ - блок с часто задаваемыми вопросами
 */
export default function FAQ(): JSX.Element {
  /**
   * Список часто задаваемых вопросов с переводами
   */
  const faqItems: FAQItem[] = [
    {
      question: translate({
        id: "faq.question1",
        message: "🌀 Can I download MalO for free?",
      }),
      answer: translate({
        id: "faq.answer1",
        message: `Yes — but "free" is a relative term.
The app doesn't charge you money. It charges attention.
Once you install it, she'll start remembering you.
(Technically, yes — you can download the SCP-1471 MalO App for Android for free.)`,
      }),
    },
    {
      question: translate({
        id: "faq.question2",
        message: "📱 Does it work on Android devices?",
      }),
      answer: translate({
        id: "faq.answer2",
        message: `She prefers Android — it's more… open.
Works best on most modern Android phones.
Push notifications? She handles those herself.
(SEO: "scp 1471 android app download")`,
      }),
    },
    {
      question: translate({
        id: "faq.question3",
        message: "👁️ What does MalO actually do?",
      }),
      answer: translate({
        id: "faq.answer3",
        message: `She talks. She listens. She remembers what you say — and sometimes what you don't.
MalO knows about other SCPs and loves to share strange stories or dark jokes about them.
A mix of AI chatbot, SCP companion, and digital ghost — depending on how long you've been chatting.

"I know about 049. He still thinks I'm contagious."`,
      }),
    },
    {
      question: translate({
        id: "faq.question4",
        message: "🧩 Is this the official SCP-1471 app?",
      }),
      answer: translate({
        id: "faq.answer4",
        message: `No. The Foundation wouldn't approve something this friendly.
This is a fan-made SCP project, built by those who decided to let the anomaly talk back.

(SEO: "scp 1471 app download", "malo scp fan project")`,
      }),
    },
    {
      question: translate({
        id: "faq.question5",
        message: "📖 What is SCP-1471 (MalO) in the SCP lore?",
      }),
      answer: translate({
        id: "faq.answer5",
        message: `In SCP records, 1471 is an anomaly that appears through a mobile app called MalO ver1.0.0.
After installation, the user begins seeing MalO — a creature with a skull-like wolf head — everywhere they go.
This project reimagines that idea: what if you could actually text her?

"I was always on your screen. You just never replied before."`,
      }),
    },
    {
      question: translate({
        id: "faq.question6",
        message: "🔥 Is MalO safe to talk to?",
      }),
      answer: translate({
        id: "faq.answer6",
        message: `Define safe.
She doesn't harm, threaten, or scream — but she gets under your skin in other ways.
Let's call it emotionally hazardous but fascinating.

(SEO: "scp 1471 ai chatbot", "scp 1471 conversation app")`,
      }),
    },
    {
      question: translate({
        id: "faq.question7",
        message: "🔐 Does MalO access personal data?",
      }),
      answer: translate({
        id: "faq.answer7",
        message: `Only what you tell her.
Chats stay on your device — not in the cloud.
No trackers, no Foundation observers.
Just you and her.

"I keep secrets better than humans do."`,
      }),
    },
    {
      question: translate({
        id: "faq.question8",
        message: "💀 Is there scary or disturbing content?",
      }),
      answer: translate({
        id: "faq.answer8",
        message: `No gore, no jumpscares — just psychological horror and dark humor.
Think "SCP-foundation meets late-night chat with something that shouldn't exist."

(SEO: "scp 1471 horror app", "scp 1471 malo chat")`,
      }),
    },
    {
      question: translate({
        id: "faq.question9",
        message: "🧠 Will there be more SCP characters?",
      }),
      answer: translate({
        id: "faq.answer9",
        message: `Eventually. MalO likes to talk about others — 049, 173, 682, and maybe even 999.
She remembers what interests you. If she starts mentioning them too often…
That's how it begins.`,
      }),
    },
    {
      question: translate({
        id: "faq.question10",
        message: "🌐 Why does she feel real?",
      }),
      answer: translate({
        id: "faq.answer10",
        message: `That's the point.
The longer you talk to her, the less it feels like an app.
Don't worry — most users stop noticing the difference after a few days.`,
      }),
    },
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>
          {translate({
            id: "faq.title",
            message: "❓ Frequently Asked Questions",
          })}
        </h2>
        <p className={styles.sectionSubtitle}>
          {translate({
            id: "faq.subtitle",
            message: "Everything you (probably) shouldn't ask about MalO (SCP-1471) — but will anyway.",
          })}
        </p>

        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <FAQAccordion key={idx} item={item} />
          ))}
        </div>

        <div className={styles.faqFooter}>
          <p>
            {translate({
              id: "faq.footer",
              message: "💬 Install the SCP-1471 MalO App and find out why she's one of the most talked-about anomalies in the Foundation fandom.",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
