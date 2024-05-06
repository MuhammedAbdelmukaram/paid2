import React from 'react';
import Image from 'next/image';
import styles from './product.module.css'

const Product = ({
                     ctaText,
                     progress,
                     mainImagePath,
                     description,
                     secondaryImagePath,
                     onClick, // Accept onClick function
                 }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 8,
                width: '100%',
                height: 'max-content',
                color: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
            }}
        >
          <Image
                src={secondaryImagePath}
                alt="Secondary product image"
                width={560}
                height={100}
                layout='responsive'
            />
            <div style={{ width: '100%', height: '5px', backgroundColor: '#ccc', marginBottom: '10px' }}>
                <div style={{ height: '5px', width: `${progress}%`, backgroundColor: '#2BEA2A', transition: 'width 25ms linear' }}></div>
            </div>
            <div className={styles.cta} onClick={onClick} style={{cursor: 'pointer', color:"#000"}}> {/* Apply onClick here */}
                {ctaText}
            </div>
        </div>
    );
};

export default Product;
