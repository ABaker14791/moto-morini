import React from "react";
import styles from "../styles/Heritage.module.scss";
// Timeline

import Timeline from "../components/Timeline/Timeline";
import { timelineItems } from "../components/Timeline/Data";

const Heritage = () => {
  return (
    <div className={styles.container}>
      <Timeline timelineItems={timelineItems} />;
    </div>
  );
};

export default Heritage;
