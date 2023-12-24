import "./App.css";
import React, { useState } from "react";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  const handleGiftClick = () => {
    setShowLetter(true);
  };
  return (
    <div className="main-page">
      <div class="xmasTree"></div>
      <div className="">
        <div class="gift" onClick={handleGiftClick}>
          <i></i>
          <i></i>
        </div>

        <h2>From: Duong</h2>
        {showLetter && (
          <div class="typewriter">
            <div className="bg-letter">
              <h2 className="letter">
                Chào cậu, <br />
                Hôm nay là ngày em tuyệt vời nhất, ngày cậu trẻ nhất, tràn đầy
                năng lượng nhất trong những ngày sau này. Thật cảm thấy may mắn
                khi tớ quen biết một người như cậu. Hi vọng cậu luôn luôn vui
                vẻ, lạc quan để đón nhận nhiều thứ tuyệt vời hơn nữa nhé!
                <br />
                Chúc cậu có một cuộc sống nhẹ nhàng. Làm được những điều cậu
                muốn làm, yêu được người muốn yêu và hạnh phúc với những gì mình
                có.
                <br />
                Giáng sinh vui vẻ!!
              </h2>
            </div>
          </div>
        )}
        <h3>To: You</h3>
      </div>

      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
        type="text/css"
      ></link>
    </div>
  );
}

export default App;
