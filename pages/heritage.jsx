import React from "react";
import styles from "../styles/Heritage.module.scss";
// Timeline

import Timeline from "../components/Timeline/Timeline";
import { timelineItems } from "../components/Timeline/Data";

const Heritage = () => {
  return <Timeline timelineItems={timelineItems} />;
};

export default Heritage;
