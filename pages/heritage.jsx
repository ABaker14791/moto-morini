import React from "react";
import Head from "next/head";
import styles from "../styles/Heritage.module.scss";
// Timeline

import Timeline from "../components/Timeline/Timeline";
import { timelineItems } from "../components/Timeline/Data";

const Heritage = () => {
  return (
    <>
      <Head>
        <title>Heritage - Moto Morini West Yorkshire</title>
        <meta name="description" content="Moto Morini West Yorkshire" />
      </Head>
      <div className={styles.container}>
        <Timeline timelineItems={timelineItems} />;
      </div>
    </>
  );
};

export default Heritage;
