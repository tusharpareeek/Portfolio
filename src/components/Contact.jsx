import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h3>Contact Me</h3>
      <p>Feel free to reach out for collaborations or just a chat!</p>
      <p>Email: tusharpareek1302@gmail.com</p>
      <p>
        LinkedIn: <a href="https://linkedin.com">linkedin.com/in/tusharpareek</a>
      </p>
    </section>
  );
}