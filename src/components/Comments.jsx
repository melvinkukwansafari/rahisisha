import React, { useState, useEffect } from 'react';

function CommentComponent(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(`/comment/${props.postCode}/post_comments?user_code=${props.userCode}`);
      const data = await response.json();
      setComments(data);
    }
    fetchComments();
  }, [props.postCode, props.userCode]);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.commentCode}>
          <p>{comment.content}</p>
          <p>{comment.userCode}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentComponent;


