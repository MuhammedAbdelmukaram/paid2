import React from 'react';
import Image from 'next/image';
import styles from './product.module.css'
const Product = ({
  mainImagePath,
  mainImageAlt,
  description,
  secondaryImagePath,
  secondaryImageAlt,
}) => {
  return (
    <div
      style={{
        border: '1px solid white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', // Adjusted for a wider div
        height: 'max-content',
        backgroundColor: '#001300', // A darker background for modern aesthetic
        color: 'white', // Text color set to white
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
        borderRadius: '10px', // Rounded corners
        margin: '20px', // Some margin for spacing around the component
      }}
    >
      {/* Row 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // Stack items vertically
          width: '100%', // Take full width of the parent div
          alignItems: 'center', // Center items horizontally
          marginBottom: '20px',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <Image
            src={mainImagePath}
            alt={mainImageAlt}
            width={400}
            height={400}
            style={{
              // width: '100%', // Adjusted for space around line
              // textAlign: 'left', // Text aligned to the left
              marginTop: '-120px', 
              marginBottom: '-90px', 
            }}
            className={styles.mainImagePath}
            layout='responsive' // Makes the image responsive
          />
        </div>
        <div
          style={{
            width: '100%', // Adjusted for space around line
            textAlign: 'left', // Text aligned to the left
            // marginTop: '-70px',
          }}
        >
          <p className={styles.desc}>{description}</p>
        </div>
      </div>

      {/* Row 2 */}
      <div
        style={{

          width: "100%", // Take full width of the parent div
          textAlign: "center", // Centering text or contents
            border:"6px solid #fff"
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
    </div>
  );
};

export default Product;
