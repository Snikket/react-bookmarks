import NewPost from "../components/NewPost";
import Post from "../components/Post";
import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";

function Posts() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList onStopPosting={hideModalHandler} isPosting={isModalVisible}/>
      </main>
    </>
  );
}

export default Posts;
