import React from "react";
import { Row, Col, Card, Icon, Input, Button } from "antd";
import Lottie from "react-lottie";
import * as animationData from "assets/9697-ftw.json";
import imgDown from "assets/down.svg";
import Board from "components/Board";
import Tags from "./Tags";
import Chart from "./Chart";

// 11143-sending-mail.json

const { Search } = Input;

const lottieOption = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
export default () => {
  return (
    <>
      <div className="hero">
        <div
          className="container container--padding"
          style={{ textAlign: "center" }}
        >
          <div>
            <Lottie
              options={lottieOption}
              height={240}
              width={240}
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
            />
          </div>
          <br />
          <h1 style={{ fontSize: "3em", color: "#ffffff" }}>
            あなたの「はじめて」を教えます
          </h1>
          <div className="hero__form">
            <Search
              className="hero__search"
              placeholder="気になることを検索する"
            />
          </div>
          <br />
          <br />
          <br />
          <a href="#trends">
            <Button type="primary">
              <h3 style={{ color: "#ffffff", padding: 0, margin: 0 }}>
                <Icon type="down" /> &nbsp; 最近の事例 &nbsp;
                <Icon type="down" />
              </h3>
            </Button>
          </a>
        </div>
      </div>
      <div id="trends" className="container container--padding">
        <br />
        <br />
        <br />
        <Card
          title={
            <h1>
              <Icon type="trophy" />
              &nbsp; Trends
            </h1>
          }
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={8}>
              <Card title="流行の失敗（Keyword）">
                <div style={{ width: "100%", height: 240 }}>
                  <Tags />
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card title="失敗のレシピ集（Category）">
                <div style={{ width: "100%", height: 240 }}>
                  <Chart />
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card title="ユーザー">
                <div style={{ width: "100%", height: 240 }}>dd</div>
              </Card>
            </Col>
          </Row>
        </Card>

        <br />
        <br />
        <br />
      </div>
      <div className="container container--padding">
        <Card
          title={
            <h1>
              <Icon type="unordered-list" />
              &nbsp; Articles
            </h1>
          }
        >
          <Board />
        </Card>
      </div>
    </>
  );
};
