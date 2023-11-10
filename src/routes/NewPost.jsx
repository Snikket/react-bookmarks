import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from '../components/Modal'

function NewPost(props) {
  const [postBody, setPostBody] = useState("HP and the Philosopher Stone");
  const [postAuthor, setAuthor] = useState("J.K. Rowling");

  function bodyChangeHandler(event) {
    setPostBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
        body: postBody,
        author: postAuthor
    };

    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <Link to=".." type="button" >
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}
import { Link } from "react-router-dom";

export default NewPost;
