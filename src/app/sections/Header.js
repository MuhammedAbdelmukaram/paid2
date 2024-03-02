import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Assuming you're using Next.js's Link component for navigation

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: "100%",
            padding: '0.8rem 4rem', // Adjust padding as needed
            backgroundColor: '#141415', // Adjust the background color as needed
            color: '#fff', // Adjust the text color as needed
        }}>
            <div style={{
                display: 'flex',
                gap: '20rem', // Adjust the gap between logo and buttons as needed
                alignItems: 'center',
            }}>
                <Image
                    src="/PaidGreen.png"
                    alt="Logo"
                    width={75}
                    height={75}
                    priority
                />
                <div style={{
                    display: 'flex',
                    gap: '1rem', // Adjust the gap between buttons as needed
                }}>
                    <Link href="/Products"><p style={buttonStyle}>Products</p></Link>
                    <Link href="/tokenomics"><p style={buttonStyle}>Tokenomics</p></Link>
                    <Link href="/team"><p style={buttonStyle}>Roadmap</p></Link>
                    <Link href="/how-to-buy"><p style={buttonStyle}>How to Buy</p></Link>
                    <Link href="/how-to-buy"><p style={buttonStyle}>Team</p></Link>
                    <Link href="/how-to-buy"><p style={buttonStyle}>FAQ</p></Link>
                </div>
            </div>

            <nav style={{
                display: 'flex',
                justifyContent: 'flex-end', // This will align the buttons to the right
                flexGrow: 1, // This will push the nav to occupy all remaining space
                gap: '1rem', // Adjust the gap between buttons as needed
            }}>
                <div style={{
                    display: 'flex',
                    gap: '1rem', // Adjust the gap between buttons as needed
                    marginRight: 70,
                }}>
                    {/*<Link href="/visit-dapp"><p style={buttonStyleTwo}>Visit dApp</p></Link>*/}
                    <Link href="/raffle"><p style={buttonStyleThree}>Whitepaper</p></Link>
                </div>

                <div style={buttonStyleWP}>
                    <Image
                        src="/TelegramIcon.png"
                        alt="Logo"
                        width={26}
                        height={26}
                        priority
                        style={{marginRight:1}}
                    />
                </div>

                <div style={buttonStyleWP}>
                    <Image
                        src="/twitterIcon.png"
                        alt="Logo"
                        width={26}
                        height={26}
                        priority

                    />
                </div>

            </nav>
        </header>
    );
};

const buttonStyle = {
    padding: '0.5rem 1rem', // Adjust padding as needed
    textDecoration: 'none',
    color: '#fff', // Button text color
    backgroundColor: 'transparent', // Button background color
    border: 'none',
    borderRadius: '4px', // Adjust border radius as needed
    cursor: 'pointer',
};

const buttonStyleTwo = {
    padding: '0.5rem 2rem', // Adjust padding as needed
    textDecoration: 'none',
    fontSize: 14,
    color: '#fff', // Button text color
    backgroundColor: '#323232', // Button background color
    border: 'none',
    borderRadius: '18px', // Adjust border radius as needed
    cursor: 'pointer',
};


const buttonStyleThree = {
    padding: '0.5rem 1rem', // Adjust padding as needed
    textDecoration: 'none',
    color: '#000', // Button text color
    fontWeight: "bold",
    backgroundColor: '#2BEA2A', // Button background color
    border: 'none',
    borderRadius: '4px', // Adjust border radius as needed
    cursor: 'pointer',
};


const buttonStyleWP = {

    padding: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "fit-content",

    textDecoration: 'none',
    color: '#fff', // Button text color
    backgroundColor: '#444', // Button background color
    border: 'none',
    borderRadius: '114px', // Adjust border radius as needed
    cursor: 'pointer',
};

export default Header;
