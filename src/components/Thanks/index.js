import React from "react";
import Lottie from "react-lottie";
import * as animationData from "assets/941-submit-smile.json";

const lottieOption = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

// 941-submit-smile
export default () => {
  return (
    <div className="modal">
      <Lottie
        options={lottieOption}
        height={240}
        width={240}
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused}
      />
      <br />
      <h3>ご意見をいただきありがとうございます。</h3>
    </div>
  );
};
