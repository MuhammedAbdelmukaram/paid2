"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Assuming you're using Next.js's Link component for navigation
import styles from "./Header.module.css";
import { useDetectDevice } from "../hooks/useDetectDevice";

const Header = () => {
  const { isMobile } = useDetectDevice();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleMobileSubmenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (isMobile) {
      if (openMobileMenu) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }
  }, [openMobileMenu, isMobile]);

  const thirdContent = useMemo(
    () => (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem", // Adjust the gap between buttons as needed
            marginRight: isMobile ? 0 : 70,
          }}
        >
          {/*<Link href="/visit-dapp"><p style={buttonStyleTwo}>Visit dApp</p></Link>*/}
          <a
            href="https://20s-organization-2.gitbook.io/lets-talk-usdpaid-inc./roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonStyleThree}
          >
            Whitepaper
          </a>
        </div>
        <div className={styles.buttonStyleX}>
          <Image
            src="/discord.png"
            alt="Logo"
            width={26}
            height={26}
            priority
            style={{ marginRight: 1 }}
          />
        </div>
        <div className={styles.buttonStyleWP}>
          {/* Twitter Icon with external link */}
          <a
            href="https://twitter.com/PaidIncHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitterIcon.png"
              alt="Twitter Logo"
              width={26}
              height={26}
              priority
            />
          </a>
        </div>
      </>
    ),
    [isMobile]
  );

  return (
    <>
      <nav className={styles.nav}>
        <input type="checkbox" className={styles.navToggle} id="navToggle" />
        <div className={styles.logo}>
          <Image
            src="/PaidGreen.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        <ul className={styles.links}>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#home">
              Products
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#about">
              Member Cards
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#work">
              Re-Roll
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#projects">
              Roadmap
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#contact">
              TEAM
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.buttonStyle} href="#contact">
              FAQ
            </Link>
          </li>
          {isMobile && thirdContent}
        </ul>

        <label
          htmlFor="navToggle"
          className={styles.iconBurger}
          onClick={() => isMobile && handleMobileSubmenu()}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </label>

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              justifyContent: "flex-end", // This will align the buttons to the right
              flexGrow: 1, // This will push the nav to occupy all remaining space
              gap: "1rem", // Adjust the gap between buttons as needed
            }}
          >
            {thirdContent}
          </nav>
        )}
      </nav>
    </>
  );
};

export default Header;
