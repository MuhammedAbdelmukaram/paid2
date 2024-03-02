import React from 'react';
import styles from './Loadingbar.module.css';

const LoadingBar = () => {
    return (
        <div className={styles.loadingBarContainer}>
            <div className={styles.loadingBarFill} style={{ width: '34%' }}>
                <span className={styles.loadingBarText}>34%</span>
            </div>
        </div>
    );
};

export default LoadingBar;