import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Product from "@/app/components/Roadmap/Product";
import Modal from "@/app/components/Modal";
import TasteTheChartsModalContent from "@/app/components/ModalContent/TasteTheCharts";
import NileModalContent from "@/app/components/ModalContent/NileModalContent";
import DeFuelModalContent from "@/app/components/ModalContent/DeStorezModalContent";
import DeStorezModalContent from "@/app/components/ModalContent/DeStorezModalContent"; // Ensure you have a Modal component

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const products = [
        {
            ctaText: "Amazon of Web3",
            mainImagePath: "/nileLogo.png",
            secondaryImagePath: "/nileBanner.png",
            description: "Everything on Web 3 is Bigger & Better right? So will the Amazon of Web 3 Be! The Go-To Marketplace for Physical Products Purchasable with Solana Exclusively.",
            modalContent: <NileModalContent onClose={() => setIsModalOpen(false)} />
        },
        {
            ctaText: "Make your Store",
            mainImagePath: "/DestorezLogo.png",
            secondaryImagePath: "/DestorezBanner.png",
            description: "Monetize your Audience with Solana & Native token payments, Detailed customization, and Hassle-free fulfillment, Focus on Creating while we Handle the Rest.",
            modalContent: <DeStorezModalContent onClose={() => setIsModalOpen(false)} />
        }
    ];

    const nextSlide = () => {
        setActiveIndex(current => (current === 1 ? 0 : current + 1));
        resetProgressBar();
    };

    const prevSlide = () => {
        setActiveIndex(current => (current === 0 ? 1 : current - 1));
        resetProgressBar();
    };

    const resetProgressBar = () => {
        setProgress(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress < 100) {
                    return oldProgress + 0.5; // Increase the progress bar by 0.5% every 25ms to sum up to 100% in 5000ms (5 seconds)
                }
                nextSlide(); // Move to the next slide when progress reaches 100%
                return 0; // Reset progress bar when it fills up
            });
        }, 25);

        return () => clearInterval(interval);
    }, []);

    const openModal = (product) => {
        setModalContent(product.modalContent);
        setIsModalOpen(true);
    };


    return (
        <div style={{
            width: "100%",
            padding: "10px 19%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative"
        }}>
            <div style={{ marginTop: 0, width: '100%', overflow: 'hidden' }}>
                <div style={{
                    display: 'flex',
                    width: '200%',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${activeIndex * (100 / 2)}%)`
                }}>
                    {products.map((product, index) => (
                        <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'transform 0.5s ease-in-out' }}>
                            <Product
                                progress={progress}
                                ctaText={product.ctaText}
                                mainImagePath={product.mainImagePath}
                                secondaryImagePath={product.secondaryImagePath}
                                description={product.description}
                                onClick={() => openModal(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Image
                src="/arrowLeft.png"
                alt="Previous"
                width={38}
                height={38}
                onClick={prevSlide}
                style={{ cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}
            />
            <Image
                src="/arrowRight.png"
                alt="Next"
                width={38}
                height={38}
                onClick={nextSlide}
                style={{ cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
            />

            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    content={modalContent}
                />
            )}
        </div>
    );
};

export default Carousel;
