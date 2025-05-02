import { getDocs, collection } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import based on your project structure
import './Home.css'; // Assuming you have a CSS file for styling
import { deleteDoc, doc } from 'firebase/firestore';

const Home = () => {
  const [postLists, setPostLists] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/'; // Redirect to the home page after deletion
  };

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              <button onClick={() => handleDelete(post.id)}>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
