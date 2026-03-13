import React, { useContext } from 'react';
import FinrisContext from '../context/FinrisContext';
import { Link } from 'react-router';

const SideBar: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { isSidebar, setIsSidebar } = context;
    if (isSidebar) console.log(isSidebar)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset()
    }
    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={() => setIsSidebar(pre => !pre)}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading" onClick={() => setIsSidebar(pre => !pre)}>
                        <Link to="#" className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/resources/logo-2.png" alt="" /></a>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                        labore et magna aliqua.</p>
                                </div>
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form onSubmit={handleSubmit} className="contact-form-validated" >
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button type="submit" className="thm-btn form-inner__btn">Submit Now</button>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;