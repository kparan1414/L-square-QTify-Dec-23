import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./FeedbackModal.module.css";

const data = {
  fullName: "",
  email: "",
  subject: "",
  description: "",
};

export default function FeedbackModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // onClose();
    setFormData(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={styles.wrapper}>
        <h3>Feedback</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.row} id={styles.description}>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.row}>
            <button className={styles.submitBtn} type="submit">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
