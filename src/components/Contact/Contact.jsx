import React, { useState } from 'react'
import { toast } from 'react-toastify';
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
    const [showMailView, setShowMailView] = useState(false);
    const [mailData, setMailData] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "08ab66ab-1c2b-47b2-8f66-bdcfcde54d28");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());
        
            if (res.success) {
                // Save email data for display
                setMailData({
                    name: object.name,
                    email: object.email,
                    message: object.message,
                    timestamp: new Date().toLocaleString()
                });
                setShowMailView(true);
                
                toast.success("Tin nhắn đã được gửi thành công! Tôi sẽ liên hệ với bạn sớm.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                event.target.reset(); // Reset form
            } else {
                toast.error("Gửi tin nhắn thất bại. Vui lòng thử lại.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Đã xảy ra lỗi. Vui lòng thử lại sau.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const closeMailView = () => {
        setShowMailView(false);
        setMailData(null);
    };

    return (
        <div className='contact' id="contact">
            <div className="contact-title">
                <h1>Liên hệ với tôi</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Hãy trò chuyện</h1>
                    <p>Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội được tham gia vào tầm nhìn của bạn. Hãy liên hệ với tôi qua các nền tảng bên dưới.</p>
                    <div className="contact-details">
                        <div className="contact-detail"><i className="fa-solid fa-envelope"></i> : thuynguyen@example.com</div>
                        <div className="contact-detail"><i className="fa-solid fa-phone"></i> : +84 XXX XXX XXX</div>
                        <div className="contact-detail"><i className="fa-solid fa-location-dot"></i> : Việt Nam</div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Tên của bạn</label>
                    <input type="text" name="name" id="name" placeholder="Nhập tên của bạn" required />
                    <label htmlFor="email">Email của bạn</label>
                    <input type="email" name="email" id="email" placeholder="Nhập email của bạn" required />
                    <label htmlFor="message">Tin nhắn của bạn</label>
                    <textarea name="message" id="message" rows={5} placeholder="Nhập tin nhắn của bạn" required></textarea>
                    <button type="submit" className="contact-submit">Gửi tin nhắn</button>
                </form>
            </div>

            {/* Mail View Modal */}
            {showMailView && mailData && (
                <div className="mail-view-overlay" onClick={closeMailView}>
                    <div className="mail-view-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="mail-view-header">
                            <h2>📧 Email đã được gửi thành công!</h2>
                            <button className="mail-view-close" onClick={closeMailView}>×</button>
                        </div>
                        <div className="mail-view-content">
                            <div className="mail-info">
                                <div className="mail-field">
                                    <strong>Từ:</strong> {mailData.name} ({mailData.email})
                                </div>
                                <div className="mail-field">
                                    <strong>Đến:</strong> thuynguyen@example.com
                                </div>
                                <div className="mail-field">
                                    <strong>Ngày:</strong> {mailData.timestamp}
                                </div>
                                <div className="mail-field">
                                    <strong>Chủ đề:</strong> Tin nhắn liên hệ mới từ Portfolio
                                </div>
                            </div>
                            <div className="mail-message">
                                <strong>Tin nhắn:</strong>
                                <div className="message-content">
                                    {mailData.message}
                                </div>
                            </div>
                            <div className="mail-status">
                                <div className="status-success">
                                    ✅ Tin nhắn đã được gửi thành công
                                </div>
                                <p>Tôi sẽ phản hồi bạn sớm nhất có thể!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact

