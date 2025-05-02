import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">今はReactの学習中です。</div>
        <div className="nameAndDeleteButton">
          <h3>@</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
