import React from "react";
import styles from "./Timeline.module.scss";
import MoriniIcon from "./MoriniIcon";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({ timelineItems }) => {
  return (
    // <div className={styles.container}>
    <VerticalTimeline>
      {timelineItems.map((item) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date={item.date}
          iconStyle={{
            background: "#fff",
            color: "#ff0000",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          icon={<MoriniIcon />}
          key={item.date}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.body}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    // </div>
  );
};

export default Timeline;
