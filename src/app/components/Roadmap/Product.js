import React from "react";
import Image from "next/image";

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
        border: "1px solid white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Adjusted for a wider div
        height: "max-content",
        backgroundColor: "#001300", // A darker background for modern aesthetic
        color: "white", // Text color set to white
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        borderRadius: "10px", // Rounded corners
        margin: "20px", // Some margin for spacing around the component
      }}
    >
      {/* Row 1 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%", // Take full width of the parent div
          alignItems: "center", // Center items vertically
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "40%" }}>
          <Image
            src={mainImagePath}
            alt={mainImageAlt}
            width={200}
            height={200}
            layout="responsive" // Makes the image responsive
          />
        </div>
        <div
          style={{
            width: "1px",
            backgroundColor: "white",
            height: "100px", // Reduced height for the vertical line
            margin: "0 20px", // Space around the line
          }}
        ></div>
        <div
          style={{
            width: "55%", // Adjusted for space around line
            textAlign: "left", // Text aligned to the left
          }}
        >
          <p>{description}</p>
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
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Product;
