import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>Hey, I'm Tushar 👋</h2>
        <p>React Developer | MERN Stack Enthusiast | Youtube Vlogs | Public Speaking | Judo Champ</p>
      </div>
    </section>
  );
}