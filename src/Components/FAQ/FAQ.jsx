import styles from "./FAQ.module.css";
import Accordion from "../Accordion/Accordion";
import { useEffect, useState } from "react";

export default function FAQ({ faqSource }) {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    faqSource().then((res) => {
      const { data } = res;
      //   let slicedArr = data.slice(0, 3);
      setFaqs(data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 id={styles.heading}>FAQs</h1>
      {faqs.map((faq) => {
        return <Accordion question={faq.question} answer={faq.answer} />;
      })}
    </div>
  );
}
