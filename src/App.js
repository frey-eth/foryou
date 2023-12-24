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

        <h2>From: Ảnh</h2>
        {showLetter && (
          <div class="typewriter">
            <div className="bg-letter">
              <h2 className="letter">
                Dear Anh Thư, <br />
                Hôm nay là ngày em tuyệt vời nhất, ngày em trẻ nhất, tràn đầy
                năng lượng nhất trong những ngày sau này. Làm sao mà anh lại
                được ngày ngày được trò chuyện với em vậy ta? Một người luôn
                mang lại cho anh cảm giác yêu đời, lạc quan, một người quá đỗi
                xinh đẹp còn vui tính. Hi vọng em sẽ luôn luôn vui vẻ như cách
                mà em thể hiện ra bên ngoài ^^. Chẳng biết nữa, nhưng mà anh
                thấy thích em ghê, thích đến mức không thể nào tả được. Chúng
                mình giống nhau đến lạ thường, anh rất hi vọng cái ngày mình gặp
                nhau (Lúc đó nhớ trao cho anh một cái ôm nếu em có thể nhen ^^).
                Hi vọng em là em, mãi xinh đẹp như vậy, mãi cuốn hút như vậy! Em
                sẽ tuyệt nhất khi là chính mình đó.
                <br />
                Dù sau này em có thích ai hay yêu ai thì anh cũng mong rằng em
                sẽ có được hạnh phúc, em xứng đáng có được nó. Chúc em có một
                ngày sinh nhật đáng nhớ. Chúc mọi thứ sau này luôn nhẹ nhàng với
                em.
                <br />
                <br />
                <br />
                Giáng sinh vui vẻ!!
              </h2>
            </div>
          </div>
        )}
        <h3>To: Cổ</h3>
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
