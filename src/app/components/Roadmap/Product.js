import React from 'react';
import Image from 'next/image';
import styles from './product.module.css'

const Product = ({
                     ctaText,
                     progress,
                     mainImagePath,
                     mainImageAlt,
                     description,
                     secondaryImagePath,
                     secondaryImageAlt,
                 }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop:8,
                width: '100%', // Adjusted for a wider div
                height: 'max-content',
                color: 'white', // Text color set to white
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                borderRadius: '10px', // Rounded corners

            }}
        >
            {/* Row 1 */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column', // Stack items vertically
                    width: '100%', // Take full width of the parent div
                    alignItems: 'center', // Center items horizontally
                }}
            >
                {/*<div style={{marginBottom: '20px'}}>
              <Image
                  src={mainImagePath}
                  alt={mainImageAlt}
                  width={100}
                  height={100}
                  style={{

                      // textAlign: 'left', // Text aligned to the left
                      // marginTop: '-80px',
                      // marginBottom: '-90px',
                  }}
                  className={styles.mainImagePath}
                  layout='responsive' // Makes the image responsive
              />
          </div>*/}
                <div
                    style={{
                        width: '100%', // Adjusted for space around line
                        textAlign: 'left', // Text aligned to the left
                        // marginTop: '-70px',
                    }}
                >
                    {/*<p className={styles.desc}>{description}</p>*/}
                </div>
            </div>

            {/* Row 2 */}
            <div
                style={{
                    width: "100%", // Take full width of the parent div
                    textAlign: "center", // Centering text or contents
                    borderTop: "0px solid #fff", // Top border
                    borderLeft: "0px solid #fff", // Left border
                    borderRight: "0px solid #fff", // Right border
                    borderBottom: "none" // No bottom border
                }}
            >
                <Image
                    src={secondaryImagePath}
                    alt={secondaryImageAlt}
                    width={560} // Full width within padding
                    height={100}
                    layout='responsive'
                />
            </div>
            {/* Progress bar */}
            <div style={{ width: '100%', height: '5px', backgroundColor: '#ccc', marginBottom: '10px', marginTop:'-4px' }}>
                <div style={{ height: '5px', width: `${progress}%`, backgroundColor: '#2BEA2A', transition: 'width 25ms linear' }}></div>
            </div>

            <div className={styles.cta}>
                <p style={{color: "#000", fontWeight: "bold"}}>{ctaText}</p>
            </div>
        </div>
    );
};

export default Product;
