import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentComponent(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const result = await axios.get(`/comment/${props.postCode}/post_comments?user_code=${props.userCode}`);
      setComments(result.data);
    }
    fetchComments();
  }, [props.postCode, props.userCode]);

  return (
    <div className="container">
      <div className="row">
        {comments.map(comment => (
          <div className="col-12" key={comment.commentCode}>
            <div className="card mb-3 border-primary">
              <div className="card-body">
                <p className="card-text text-secondary">{comment.content}</p>
                <p className="card-text font-weight-bold">{comment.userCode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;
