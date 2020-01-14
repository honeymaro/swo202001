import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import imgLogo from "assets/logo.png";

export default () => {
  const headerStyle = { height: "100%", lineHeight: "64px" };

  return (
    <>
      <div className="header">
        <div className="container container--padding" style={headerStyle}>
          <Row style={headerStyle}>
            <Col span={8} style={headerStyle}>
              <Link to="/">
                <div
                  className="header__logo"
                  style={{ backgroundImage: `url('${imgLogo}')` }}
                />
              </Link>
            </Col>
            <Col span={16} style={{ ...headerStyle, textAlign: "right" }}>
              <Link className="header__link" to="/">
                ホーム
              </Link>
              <Link className="header__link" to="/">
                Articles
              </Link>
              <Link className="header__link" to="/">
                カテゴリー
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
