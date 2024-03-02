"use client";
import React, {useState} from 'react';
import Image from "next/image";
import styles from "./Footer.module.css"

const Footer = () => {
    // Array to hold the state and content for each question
    const [questions, setQuestions] = useState([
        {id: 1, isOpen: false, text: 'Question 1', answer: 'Answer to Question 1 goes here...'},
        {id: 2, isOpen: false, text: 'Question 2', answer: 'Answer to Question 2 goes here...'},
        {id: 3, isOpen: false, text: 'Question 3', answer: 'Answer to Question 3 goes here...'},
        // Add more questions as needed
    ]);

    // Function to toggle the open state of a question
    const toggleQuestion = (id) => {
        setQuestions(questions.map(question =>
            question.id === id ? {...question, isOpen: !question.isOpen} : question
        ));
    };

    return (
        <div style={{width: "100%",  padding: "20px 10%",}}>


            <div style={{
                marginTop: 100,
                width: "100%",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>

                <div style={{width:"45%"}}>
                    {questions.map((question) => (
                        <div key={question.id}>
                            <div onClick={() => toggleQuestion(question.id)} style={{
                                cursor: 'pointer',
                                borderTop: '2px solid #fff',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                                <p>{question.text}</p>
                                <Image src={"/downArrow.png"} style={{
                                    transform: question.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease'
                                }} height={30} width={30}/>
                            </div>
                            {question.isOpen && (
                                <div style={{padding: '10px'}}>
                                    <p>{question.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


                <div style={{display: "flex", alignItems: "center", justifyContent:"center", width:"45%"}}>

                    <div style={{display:"flex",justifyContent:"center", width:"100%"}}>

                    <Image src={"/PaidGreen.png"} height={300} width={300}/>

                    </div>

                </div>
            </div>


            <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>


                <div style={{width: "fit-content", display: "flex", gap: 20, justifyContent: "flex-end"}}>
                    <div className={styles.buttonStyleWP}>
                        <Image
                            src="/TelegramIcon.png"
                            alt="Logo"
                            width={26}
                            height={26}
                            priority
                            style={{marginRight: 1}}
                        />
                    </div>

                    <div className={styles.buttonStyleWP}>
                        <Image
                            src="/twitterIcon.png"
                            alt="Logo"
                            width={26}
                            height={26}
                            priority

                        />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Footer;


