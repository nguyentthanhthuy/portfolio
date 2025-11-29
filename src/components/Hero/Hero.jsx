import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/2.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={heroImage} alt="Hero" />
      <h1><span>Chào mừng đến với Portfolio của tôi</span></h1>
      <h2><span>Tôi là Nguyễn Thị Thanh Thúy</span>, một Full Stack Developer tại Việt Nam</h2>
      <p>
        Tôi là một developer đầy đam mê với khả năng tạo ra những ứng dụng web
        tuyệt đẹp và chuyên nghiệp.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Kết nối với tôi!</div>
        <div className="hero-resume">Xem CV của tôi!</div>
      </div>
    </div>
  );
};

export default Hero;
