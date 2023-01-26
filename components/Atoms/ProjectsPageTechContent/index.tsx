import React from "react";
import Image from "next/image";

import styles from "./rwd.module.scss";

const ProjectsPageTechContent = ({
  image: { src, alt },
  index,
  tech,
  description,
}: any) => {
  return (
    <div key={index} className={styles.wrapper}>
      <div className={styles.wrapperImage}>
        <Image src={src} alt={alt} width={370} height={150} />
      </div>
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperContentDetails}>{description}</div>
        <div className={styles.wrapperContentBottomBlock}>
          <button className={styles.wrapperContentBottomBlockButton}>
            <a href="">view-project</a>
          </button>
          <ul className={styles.wrapperContentBottomBlockTech}>
            {tech.map(({ icon }: any, i: any) => (
              <li key={i}>{icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageTechContent;
