"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Product from "@/app/components/Roadmap/Product";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex(current => (current === 2 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setActiveIndex(current => (current === 0 ? 2 : current - 1));
    };

    const slideStyles = () => ({
        width: '100%', // Ensures each slide takes full width of the visible area
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.5s ease-in-out',
    });

    const renderDots = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                {[0, 1, 2].map(index => (
                    <span
                        key={index}
                        style={{
                            height: '7px',
                            width: '7px',
                            borderRadius: '50%',
                            background: activeIndex === index ? '#2BEA2A' : '#ddd',
                            margin: '0 5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => setActiveIndex(index)} // Set the slide to the selected dot
                    />
                ))}
            </div>
        );
    };

    return (
        <div style={{
            width: "100%",
            padding: "20px 20%",
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Aligns everything centrally
            position: "relative" // Set relative positioning for absolute child elements
        }} >

            <div style={{marginTop: 20, width: '100%', overflow: 'hidden'}}>
                <div style={{
                    display: 'flex',
                    width: '300%', // Combined width of all three slides
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${activeIndex * (100 / 3)}%)` // Correctly calculate the shift
                }}>
                    <div style={slideStyles()}>
                        <Product mainImagePath={"/nileLogo.png"} secondaryImagePath={"/NileSS.png"} description={"Everything on Web 3 is Bigger & Better right? So will the Amazon of Web 3 Be! The Go-To Marketplace for Physical Products Purchasable with Solana Exclusively. "}/>
                    </div>
                    <div style={slideStyles()}>
                        <p>Normal Event Content Here</p>
                    </div>
                    <div style={slideStyles()}>
                        <p>Minor Event Content Here</p>
                    </div>
                </div>
            </div>

            {renderDots()}

            <Image
                src="/arrowLeft.png"
                alt="Previous"
                width={48}
                height={48}
                onClick={prevSlide}
                style={{ cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} // Position the arrow
            />
            <Image
                src="/arrowRight.png"
                alt="Next"
                width={48}
                height={48}
                onClick={nextSlide}
                style={{ cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }} // Position the arrow
            />
        </div>
    );
};

export default Carousel;