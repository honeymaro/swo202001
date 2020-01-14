import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";

export default () => {
  const [, setRerender] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      setRerender(rerender => ++rerender);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <TagCloud
        className="tag-cloud"
        // rotate={() => Math.round(Math.random()) * 90}
        style={{
          fontFamily: "sans-serif",
          fontSize: 24,
          color: () =>
            randomColor({
              hue: "red"
            }),
          padding: 5
        }}
      >
        {"KIX StartupWeekend 成人式 別れた 一人暮らし 引っ越し 卒業 家電品"
          .split(" ")
          .map(text => (
            <div>{text}</div>
          ))}
      </TagCloud>
    </div>
  );
};
