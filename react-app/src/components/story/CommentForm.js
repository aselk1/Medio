import { useState, useEffect } from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createComment } from "../../store/comment";

function CommentForm() {
  const [body, setBody] = useState("");
  const userId = useSelector((state) => state.session.user.id);
  const { storyId } = useParams()
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!body) {
      setValidationErrors([]);
      return;
    }
    console.log("uE running");
    const errors = [];
    if (!body.length) errors.push("Please enter your comment");
  }, [body]);

  const onSubmit = async (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    // Create a new object for the song form information.
    const commentForm = {
      body,
      userId,
      storyId
    };


    await dispatch(createComment(storyId, commentForm))

    // Reset the form state.
    setBody("");
    setValidationErrors([]);
    setHasSubmitted(false);
  };

  return (
    <form id="form1" noValidate onSubmit={onSubmit}>
    <ul>
      {validationErrors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ))}
    </ul>
    <label>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
    </label>
    <button type="submit">Submit</button>
  </form>
);
}

export default CommentForm;
