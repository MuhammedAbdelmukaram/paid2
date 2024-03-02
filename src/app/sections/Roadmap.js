import React from 'react';
import styles from './Roadmap.module.css'

const Roadmap = () => {
    return (
        <div style={{
            width: "100%",
            padding: "20px 10%",
            marginTop: 130,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
        }}>
            <p style={{fontSize: 38, alignSelf: "flex-start", marginBottom: 40}}>
                ROADMAP
            </p>

            <p>
                Leveraging the power of utility $PAID token to enable fractional ownership in businesses and startups
            </p>
            <div style={{
                padding: "20px 70px",
                border: "1px solid #fff",
                borderRadius: 6,
                display: "flex",
                justifyContent: "flex-start",
                gap: 120,
                marginTop: 60
            }}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.indicator} style={{backgroundColor: '#D2FF51'}}></div>
                        <p className={styles.text}>Major Event</p>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.indicator} style={{backgroundColor: '#76E2AE'}}></div>
                        <p className={styles.text}>Normal Event</p>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.indicator} style={{backgroundColor: '#8926EA'}}></div>
                        <p className={styles.text}>Minor event</p>
                    </div>
                </div>


                <div style={{display:"flex"}}>


                    <div className={styles.verticalLine}></div>
                    <div className={styles.containerTwo}>

                        <div className={styles.row}>
                            <div className={`${styles.indicator} ${styles.triangleUp}`}></div>
                            {/* Triangle pointing up */}
                            <p className={styles.text}>WEB 2</p>
                        </div>
                        <div className={styles.row}>
                            <div className={`${styles.indicator} ${styles.triangleDown}`}></div>
                            {/* Triangle pointing down */}
                            <p className={styles.text}>WEB 3</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Roadmap;