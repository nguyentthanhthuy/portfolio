import React from "react";
import "./About.css";
import profile_img from "../../assets/images/1.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>Về tôi</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" style={{ width: "400px", height: "500px", objectFit: "cover", }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Xin chào! Tôi là Nguyễn Thị Thanh Thúy, một Full Stack Developer đến từ Việt Nam.
              Tôi có niềm đam mê với việc tạo ra những ứng dụng web động và responsive.
              Với nền tảng vững chắc về cả công nghệ front-end và back-end, tôi luôn
              nỗ lực mang đến trải nghiệm người dùng mượt mà và chức năng mạnh mẽ.
            </p>
            <p>
              Hành trình phát triển web của tôi bắt đầu từ sự tò mò về cách mọi thứ
              hoạt động đằng sau hậu trường. Qua nhiều năm, tôi đã trau dồi kỹ năng
              trong nhiều ngôn ngữ lập trình và framework khác nhau, cho phép tôi
              giải quyết những thách thức phức tạp và biến những ý tưởng sáng tạo thành hiện thực.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>NĂM KINH NGHIỆM</p>
        </div>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>DỰ ÁN HOÀN THÀNH</p>
        </div>
        <div className="about-achievement">
          <h1>15+</h1>
          <p>KHÁCH HÀNG HÀI LÒNG</p>
        </div>
      </div>
    </div>
  );
};

export default About;
