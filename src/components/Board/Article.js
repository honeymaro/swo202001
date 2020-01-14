import React from "react";
import { Link } from "react-router-dom";
import { Comment, Card } from "antd";

export default props => {
  return (
    <Link to={"/articles/" + props.aid}>
      <Card size="small" style={{ marginBottom: "1em" }}>
        <Comment {...props} />
      </Card>
    </Link>
  );
};
