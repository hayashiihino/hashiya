import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function TwitterTimeline() {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="hashiya18"
      options={{ height: "120vh" }}
    />
  );
}
