import React, { useState } from "react";
import styles from "./FAQ.module.css";

/**
 * Interface for one FAQ item
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Component for one FAQ accordion
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
          <p style={{ whiteSpace: "pre-line" }}>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/**
 * FAQ component - frequently asked questions block
 */
export default function FAQ(): JSX.Element {
  /**
   * List of frequently asked questions
   */
  const faqItems: FAQItem[] = [
    {
      question: "📱 Is Grammar AI free to use?",
      answer: "Yes, Grammar AI is completely free to use. No subscriptions, no hidden fees, no ads.",
    },
    {
      question: "🌐 What languages does it support?",
      answer:
        "Grammar AI supports multiple languages for grammar correction and translation, including English, Spanish, French, German, Portuguese, Russian, and more.",
    },
    {
      question: "✍️ How accurate is the grammar correction?",
      answer:
        "Our AI uses advanced language models to provide high-accuracy corrections for grammar, spelling, and punctuation. However, we recommend reviewing suggestions for critical documents.",
    },
    {
      question: "🔒 Is my text data safe and private?",
      answer: "Yes. Your text is processed in real-time and is never stored on our servers. We don't collect or retain any of your text content.",
    },
    {
      question: "📲 Does it work offline?",
      answer:
        "Currently, Grammar AI requires an internet connection to process corrections and translations using our AI servers. Offline mode may be added in future updates.",
    },
    {
      question: "🤖 What AI technology powers Grammar AI?",
      answer:
        "Grammar AI uses state-of-the-art natural language processing models trained on vast amounts of text data to understand context and provide accurate corrections.",
    },
    {
      question: "💬 Can I use it for professional documents?",
      answer:
        "Yes! Grammar AI is suitable for emails, essays, reports, and other professional documents. Always review AI suggestions before finalizing important documents.",
    },
    {
      question: "🔄 How does translation work?",
      answer:
        "Simply enter text in the source language, select the target language, and our AI will translate it while maintaining context and meaning as accurately as possible.",
    },
  ];

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>❓ Frequently Asked Questions</h2>
        <p className={styles.sectionSubtitle}>Everything you need to know about Grammar AI</p>

        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <FAQAccordion key={idx} item={item} />
          ))}
        </div>

        <div className={styles.faqFooter}>
          <p>💬 Have more questions? Contact us at too.imbadev@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
