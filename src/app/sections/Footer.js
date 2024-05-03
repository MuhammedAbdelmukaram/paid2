import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <div className={styles.footerContainer}>
        <Image
          src='/PaidGreenCr.png'
          alt='Paid Inc Logo'
          width={135}
          height={135}

          // layout={responsive}
        />

        <div className={styles.linksContainer}>
          <div className={styles.linksColumn}>
            <p className={styles.footerHeading}>Products</p>
            <p className={styles.footerLink}>Nile</p>
            <p className={styles.footerLink}>DeFuel</p>
            <p className={styles.footerLink}>DeStorez</p>
          </div>

          <div className={styles.linksColumn}>
            <p className={styles.footerHeading}>Pages</p>
            <p className={styles.footerLink}>Member Cards</p>
            <p className={styles.footerLink}>Re Roll</p>
            <p className={styles.footerLink}>Roadmap</p>
          </div>

          <div className={styles.linksColumn}>
            <p className={styles.footerHeading}>Contact Us</p>
            <p className={styles.footerLink}>contact@paidinc.xyz</p>
            <div className={styles.socialMedia}>
              <div className={styles.buttonStyleX}>
                <Image
                  src='/discord.png'
                  alt='Logo'
                  width={26}
                  height={26}
                  priority
                  style={{ marginRight: 1 }}
                />
              </div>
              <div className={styles.buttonStyleWP}>
                <a
                  href='https://twitter.com/PaidIncHQ'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/twitterIcon.png'
                    alt='Twitter Logo'
                    width={26}
                    height={26}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
      ></div>
      <p className={styles.copyRight}>
        &#xA9; 2024 All Rights Reserved, Paid Inc.
      </p>
    </div>
  );
};

export default Footer;
