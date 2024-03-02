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
        <div className={styles.wrapper}>

            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>REVENUE GENERATING PRODUCTS</p>
                <p className={styles.subHeading}>Leveraging the power of utility $PAID token to enable fractional ownership in businesses and startups</p>

            </div>


            <div className={styles.productContainer}>

                <div style={{}}>
                    <div className={styles.productButtons}>
                        {Object.entries(products).map(([key, { title, imgSrc, description }]) => (
                            <button
                                key={key}
                                onClick={() => setProduct(key)}
                                className={`${styles.button} ${product === key ? styles.selectedButton : ''}`}
                            >
                                <img src={imgSrc} alt={title} className={styles.buttonImage} />
                                <div className={styles.buttonTextContainer}>
                                    <div className={styles.buttonTitle}>{title}</div>
                                    <div className={styles.buttonDescription}>{description}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {product && (
                    <div className={styles.productDetails}>
                        <img src={products[product].showImage} alt={products[product].title} className={styles.mainProductImage} />


                    </div>

                )}

                {product && (
                    <div className={styles.productDetails}>
                        <div className={styles.rightSide}>
                            <h2>{products[product].title}</h2>
                            <p>{products[product].description}</p>
                        </div>

                    </div>

                )}



            </div>
        </div>
    );
};

export default Products;

