import React, { useState, useEffect } from "react";
import {
  Comment,
  Avatar,
  Icon,
  Tooltip,
  Form,
  Button,
  List,
  Input,
  Col,
  Row
} from "antd";
import { inject, observer } from "mobx-react";
import imgLike from "assets/like.svg";
import imgDislike from "assets/dislike.svg";
import moment from "moment";

const { TextArea } = Input;

const CommentWithAction = props => {
  const [action, setAction] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleLikeClick = () => {
    setLikes(value => value + 1);
    setAction("liked");
  };
  const handleDislikeClick = () => {
    setDislikes(value => value + 1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip title="いいね">
      <Button
        key="comment-basic-like"
        onClick={handleLikeClick}
        style={{
          marginRight: ".5em",
          border: action === "liked" ? "1px solid green" : "none"
        }}
      >
        <img
          src={imgLike}
          alt="like"
          style={{ width: "2em", verticalAlign: "middle" }}
        />
        <span
          style={{
            paddingLeft: 8,
            cursor: "auto",
            fontSize: "1.5em",
            verticalAlign: "middle"
          }}
        >
          {likes}
        </span>
      </Button>
    </Tooltip>,
    <Tooltip title="やばいね">
      <Button
        key="comment-basic-dislike"
        onClick={handleDislikeClick}
        style={{
          marginRight: ".5em",
          border: action === "disliked" ? "1px solid green" : "none"
        }}
      >
        <img
          src={imgDislike}
          alt="dislike"
          style={{ width: "2em", verticalAlign: "middle" }}
        />
        <span
          style={{
            paddingLeft: 8,
            cursor: "auto",
            fontSize: "1.5em",
            verticalAlign: "middle"
          }}
        >
          {dislikes}
        </span>
      </Button>
    </Tooltip>
  ];

  return (
    <>
      <Comment {...props} actions={actions} />
    </>
  );
};

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <CommentWithAction {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item style={{ marginBottom: 0 }}>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item style={{ textAlign: "right" }}>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

export default inject("board")(
  observer(({ match, board }) => {
    const [article, setArticle] = useState({});
    const [action, setAction] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLikeClick = () => {
      setLikes(value => value + 1);
      setAction("liked");
    };
    const handleDislikeClick = () => {
      setDislikes(value => value + 1);
      setAction("disliked");
    };
    useEffect(() => {
      const { aid } = match.params;
      const result = board.getArticle(aid);
      if (result) {
        setArticle(result);
        setLikes(parseInt(result.likes, 10));
        setDislikes(parseInt(result.dislikes, 10));
      }
    }, []);

    return (
      <div className="container container--padding">
        <div className="article">
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={18}>
              <div className="article__body">
                <div className="article__header">
                  <div className="article__header__icon">
                    <Icon
                      type="question"
                      style={{ fontSize: "1.5em", color: "#ffffff" }}
                    />
                  </div>
                  <span className="article__title">{article.title}</span>
                </div>
                <div className="article__content">{article.body}</div>
                <Tooltip title="いいね">
                  <Button
                    key="comment-basic-like"
                    onClick={handleLikeClick}
                    style={{
                      marginRight: ".5em",
                      border: action === "liked" ? "1px solid green" : "none"
                    }}
                  >
                    <img
                      src={imgLike}
                      alt="like"
                      style={{ width: "2em", verticalAlign: "middle" }}
                    />
                    <span
                      style={{
                        paddingLeft: 8,
                        cursor: "auto",
                        fontSize: "1.5em",
                        verticalAlign: "middle"
                      }}
                    >
                      {likes}
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip title="やばいね">
                  <Button
                    key="comment-basic-dislike"
                    onClick={handleDislikeClick}
                    style={{
                      marginRight: ".5em",
                      border: action === "disliked" ? "1px solid green" : "none"
                    }}
                  >
                    <img
                      src={imgDislike}
                      alt="dislike"
                      style={{ width: "2em", verticalAlign: "middle" }}
                    />
                    <span
                      style={{
                        paddingLeft: 8,
                        cursor: "auto",
                        fontSize: "1.5em",
                        verticalAlign: "middle"
                      }}
                    >
                      {dislikes}
                    </span>
                  </Button>
                </Tooltip>
                <div className="article__comments">
                  {article.comments && (
                    <CommentList comments={article.comments} />
                  )}
                  <Comment
                    avatar={
                      <Avatar
                        src="https://randomuser.me/api/portraits/men/66.jpg"
                        alt="Han Solo"
                      />
                    }
                    content={
                      <Editor
                      // onChange={this.handleChange}
                      // onSubmit={this.handleSubmit}
                      // submitting={submitting}
                      // value={value}
                      />
                    }
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} lg={6}>
              <div className="article__profile">
                <Comment
                  author={article.author}
                  avatar={article.avatar}
                  content={<p>{article.profile}</p>}
                  // datetime={
                  //   <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  //     <span>{moment().fromNow()}</span>
                  //   </Tooltip>
                  // }
                />
                <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  })
);
