import React from 'react'
import './Footer.css'
import mailIcon from '../../assets/mail_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import locationIcon from '../../assets/location_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <span className="footer-name">Thanh Thúy</span>
              <span className="footer-title">FullStack</span>
            </div>
            <p>Tạo ra những trải nghiệm số truyền cảm hứng và thu hút</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#about">Về tôi</a></li>
            <li><a href="#services">Dịch vụ</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Thông tin liên hệ</h3>
          <div className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span>thuynguyen@example.com</span>
          </div>
          <div className="contact-item">
            <img src={callIcon} alt="Phone" />
            <span>+84 XXX XXX XXX</span>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" />
            <span>Việt Nam</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Theo dõi tôi</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; 2025 Portfolio - Nguyễn Thị Thanh Thúy. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  )
}

export default Footer
