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
          />

          <div className={styles.linksContainer}>
            <div className={styles.linksColumn}>
              <p className={styles.footerHeading}>Products</p>
              <p className={styles.footerLink}>
                <a href="#products">Nile</a> {/* Each product links to the products section */}
              </p>
              <p className={styles.footerLink}>
                <a href="#products">DeFuel</a>
              </p>
              <p className={styles.footerLink}>
                <a href="#products">DeStorez</a>
              </p>
            </div>

            <div className={styles.linksColumn}>
              <p className={styles.footerHeading}>Features</p>
              <p className={styles.footerLink}>
                <a href="#membercards" className={styles.footerLink}>Member Cards</a> {/* Link to the Member Cards section */}
              </p>
              <p className={styles.footerLink}>
                <a href="#reroll" className={styles.footerLink}>Re Roll</a> {/* Link to the Re Roll section */}
              </p>
              <p className={styles.footerLink}>
                <a href="#seasontwo" className={styles.footerLink}>Season Two</a> {/* Link to the Roadmap section */}
              </p>
            </div>

            <div className={styles.linksColumn}>
              <p className={styles.footerHeading}>Contact Us</p>
              <p className={styles.footerLink}>contact@paidinc.xyz</p>
              <div className={styles.socialMedia}>
                <div className={styles.buttonStyleWP}>
                  <a
                      href='https://t.me/thepaidinc'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <Image
                        src='/telegramIcon.png'
                        alt='Telegram Logo'
                        width={26}
                        height={26}
                        priority
                    />
                  </a>
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
        <p className={styles.copyRight}>
          &#xA9; 2024 All Rights Reserved, Paid Inc.
        </p>
      </div>
  );
};

export default Footer;
