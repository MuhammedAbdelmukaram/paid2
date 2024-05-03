import React from "react";
import Image from "next/image";
import styles from "./RoadmapNew.module.css";

const RoadmapNew = () => {
  return (
    <div className={styles.roadmapContainer} id={"roadmap"}>
      <p className={styles.title}>ROADMAP</p>
      <p className={styles.subtitle}>The Only Roadmap That Doesn’t End!</p>
      <div className={styles.imageContainer}>
        <Image
          src="/RoadmapPlaceholder.png"
          alt="Roadmap Image"
          layout="responsive"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  );
};

export default RoadmapNew;
