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
    <div>
      {comments.map(comment => (
        <div key={comment.commentCode}>
          <p>{comment.content}</p>
          <p>{comment.userCode}</p>
        </div>
      ))}
    </div>
  );
}
export default CommentComponent;