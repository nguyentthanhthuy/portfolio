import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/2.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-image-container">
        <img src={heroImage} alt="Nguyễn Thị Thanh Thúy" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>✨</span>
          <span>Available for opportunities</span>
        </div>
        <h1>
          <span>Xin chào, tôi là</span>
          <span>Nguyễn Thị Thanh Thúy</span>
        </h1>
        <h2>
          <span>Full Stack Developer</span> tại Việt Nam
        </h2>
        <p>
          Tôi chuyên tạo ra những trải nghiệm web hiện đại, tối ưu và đẹp mắt.
          Với niềm đam mê mãnh liệt về công nghệ, tôi luôn tìm cách đưa những ý tưởng sáng tạo 
          vào thực tế thông qua code.
        </p>
        <div className="hero-action">
          <button className="hero-connect">Kết nối với tôi</button>
          <button className="hero-resume">Xem CV</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
