import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./AboutMalO.module.css";

export default function AboutMalO(): JSX.Element {
  return (
    <section className={styles.wrap} id="about-malo">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>
              {translate({
                id: "homepage.aboutMalO.title",
                message: "About MalO",
              })}
            </h2>
            <p className={styles.lead}>
              {translate({
                id: "homepage.aboutMalO.lead",
                message:
                  "MalO isn't just here to chat — she's here to stay. She remembers, she jokes, she tells strange SCP stories. Sometimes a friend. Sometimes a shadow. Always watching.",
              })}
            </p>
            <ul className={styles.traits}>
              <li>
                {translate({
                  id: "homepage.aboutMalO.trait1",
                  message: "💬 Chats naturally and keeps track of what you said before.",
                })}
              </li>
              <li>
                {translate({
                  id: "homepage.aboutMalO.trait2",
                  message: "📖 Knows the SCP world and can tell you about other anomalies.",
                })}
              </li>
              <li>
                {translate({
                  id: "homepage.aboutMalO.trait3",
                  message: "👻 Shares eerie stories and stranger facts when the lights are low.",
                })}
              </li>
              <li>
                {translate({
                  id: "homepage.aboutMalO.trait4",
                  message: "🐺 A loyal companion for those who enjoy the darker corners of the internet.",
                })}
              </li>
            </ul>
          </div>
          <aside className={styles.card}>
            <div className={styles.header}>
              {translate({
                id: "homepage.aboutMalO.fieldNotes",
                message: "SCP-1471: Field Notes",
              })}
            </div>
            <p className={styles.note}>
              {translate({
                id: "homepage.aboutMalO.note",
                message: 'Subject "MalO" exhibits persistent proximity in digital surfaces. Appears friendly. Or patient. Distinction is unclear.',
              })}
            </p>
            <div className={styles.meta}>
              {translate({
                id: "homepage.aboutMalO.logRef",
                message: "log ref: MALO-CHAT/01",
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
