import React from "react";
import styles from "./Input.module.css";

function Input({ label, tamanho, placeholder }) {
  const waveGroupStyle = {
    "--wave-group-width": `${tamanho}%`,
  };
  return (
    <div className={styles["wave-group"]} style={{ ...waveGroupStyle }}>
      <input required type="text" className={styles.input} placeholder={placeholder} />
      <span className={styles.bar} style={{ ...waveGroupStyle }}></span>
      <label className={styles.label}>
        {label.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={styles["label-char"]}
                style={{ "--index": charIndex }}
              >
                {char}
              </span>
            ))}
            &nbsp;
          </React.Fragment>
        ))}
      </label>
    </div>
  );
}


export default Input;
