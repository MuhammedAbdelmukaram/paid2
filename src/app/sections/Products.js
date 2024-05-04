"use client";
import React, { useState } from 'react';
import styles from './Products.module.css';
import Image from "next/image"; // Adjust the path as necessary

const Products = () => {
    const [product, setProduct] = useState('Product1');

    // Define your products here
    const products = {
        'Product1': {
            title: 'Build Web3 Brands',
            imgSrc: '/PaidGreen.png', // The small image inside the button
            showImage: '/PaidGreen.png', // The large main image that changes on click
            description: 'Description for Product 1...'
        },
        'Product2': {
            title: 'Exit Web2 Brands',
            imgSrc: '/PaidGreen.png',
            showImage: '/PaidGreen.png',
            description: 'Description for Product 2...'
        },
        'Product3': {
            title: 'Product 3',
            imgSrc: '/BuildSaaS.png',
            showImage: '/BuildSaaS.png',
            description: 'Description for Product 3...'
        },
        'Product4': {
            title: 'Exit Web2 SaaS',
            imgSrc: '/ExitSaas.png',
            showImage: '/PaidGreen.png',
            description: 'Description for Product 4...'
        }
    };


    return (
        <div className={styles.wrapper} id="products">

            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>REVENUE GENERATING PRODUCTS</p>
                <p className={styles.subHeading}>Peep through the window   &#x1F440; </p>

            </div>



        </div>
    );
};

export default Products;

