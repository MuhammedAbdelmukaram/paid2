"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Faq.module.css";

const Faq = () => {
  // Initialize state to manage FAQs
  const [questions, setQuestions] = useState([
    {
      id: 1,
      isOpen: false,
      text: "How Big Are The Discount Codes?",
      answer: "Exact % TBA. Make sure to follow us on X to find out 1st.",
    },
    {
      id: 2,
      isOpen: false,
      text: "How Big Are The Cutback Rewards?",
      answer: "Exact % TBA. Make sure to follow us on X to find out 1st.",
    },
    {
      id: 3,
      isOpen: false,
      text: "How many sPAID Tokens do I get with my Member Card?",
      answer: "TBA. Make sure to follow us on X to find out 1st.",
    },
    {
      id: 4,
      isOpen: false,
      text: "Can Anyone Use My Discount Code?",
      answer:
        "Yes! We are incentivizing you to share your code with as many degens as possible",
    },
    {
      id: 5,
      isOpen: false,
      text: "When are Discount Rewards Paid Out?",
      answer: "As soon as we process the order, you get your Cutback.",
    },
    {
      id: 6,
      isOpen: false,
      text: "Where can I Trade sPAID Token?",
      answer:
        "sPAID is not yet available for trading (all others are SCAMS). Initial Liquidity Pool will be setup post Presale.",
    },
    {
      id: 7,
      isOpen: false,
      text: "When Presale?",
      answer: "Presale will be announced 1st our official X.com account.",
    },
    {
      id: 8,
      isOpen: false,
      text: "Total Supply?",
      answer: "TBA. Make sure to follow us on X to find out 1st.",
    },
  ]);

  // Function to toggle the open state of a question
  const toggleQuestion = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, isOpen: !question.isOpen }
          : question
      )
    );
  };

  return (
    <div className={styles.faqContainer}>
      <p className={styles.faqTitle}>
        Frequently asked <span>Questions</span>
      </p>

      <div className={styles.questionsContainer}>
        {questions.map((question) => (
          <div key={question.id} className={styles.question}>
            <div
              onClick={() => toggleQuestion(question.id)}
              className={styles.questionHeader}
            >
              <p className={styles.questionText}>{question.text}</p>
              <Image
                src="/downArrow.png"
                alt="Expand"
                height={30}
                width={30}
                className={`${styles.arrowIcon} ${
                  question.isOpen ? styles.rotate : ""
                }`}
              />
            </div>
            {question.isOpen && (
              <div className={styles.answer}>
                <p className={styles.answerText}>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
