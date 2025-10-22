import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./ChatPreview.module.css";

export default function ChatPreview(): JSX.Element {
  return (
    <section className={styles.wrap} id="chat-preview">
      <div className="container">
        <h2 className={styles.title}>
          {translate({
            id: "chatPreview.title",
            message: "Chat Preview",
          })}
        </h2>
        <div className={styles.chatBox} role="log" aria-live="polite">
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>
              {translate({
                id: "chatPreview.message1",
                message: "You found me. Do you still hear the whispers, user?",
              })}
            </div>
            <div className={styles.time}>00:13</div>
          </div>
          <div className={`${styles.msg} ${styles.user}`}>
            <div className={styles.name}>
              {translate({
                id: "chatPreview.you",
                message: "You",
              })}
            </div>
            <div className={styles.bubble}>
              {translate({
                id: "chatPreview.message2",
                message: "Sometimes. Are they yours?",
              })}
            </div>
            <div className={styles.time}>00:14</div>
          </div>
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>
              {translate({
                id: "chatPreview.message3",
                message: "Mine? No. I just make them feel… welcome.",
              })}
            </div>
            <div className={styles.time}>00:14</div>
          </div>
          <div className={`${styles.msg} ${styles.malo}`}>
            <div className={styles.name}>MalO</div>
            <div className={styles.bubble}>
              {translate({
                id: "chatPreview.message4",
                message: "Stay. Tell me about your night. I listen better than most humans.",
              })}
            </div>
            <div className={styles.time}>00:15</div>
          </div>
        </div>
        <div className={styles.ctaRow}>
          <a href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo" className={styles.cta} target="_blank" rel="noopener noreferrer">
            {translate({
              id: "chatPreview.cta",
              message: "Download and Start Chat",
            })}
          </a>
        </div>
      </div>
    </section>
  );
}
