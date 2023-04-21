import React from 'react'

const Footer = () => {
    return (
        <div className='w-100'>
            <footer className="bg_dark footer_dark">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-8 col-sm-12">
                                <div className="widget">
                                    <div className="footer_logo">
                                        <a href="index-6.html"><img src="./../assets/images/logo_light.png" alt="logo" /></a>
                                    </div>
                                    <p>If you are going to use a passage of Lorem Ipsum you need to be sure there isn't
                                        anything
                                        embarrassing hidden in the middle of text</p>
                                </div>
                                <div className="widget">
                                    <ul className="social_icons social_white social_style1 rounded_social">
                                        <li><a href="#"><i className="ion-social-facebook" /></a></li>
                                        <li><a href="#"><i className="ion-social-twitter" /></a></li>
                                        <li><a href="#"><i className="ion-social-googleplus" /></a></li>
                                        <li><a href="#"><i className="ion-social-youtube-outline" /></a></li>
                                        <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-5">
                                <div className="widget">
                                    <h6 className="widget_title">Useful Links</h6>
                                    <ul className="widget_links">
                                        <li><a href="#">Our services</a></li>
                                        <li><a href="#">Company history</a></li>
                                        <li><a href="#">Support center</a>
                                        </li><li><a href="#">Latest Projects</a></li>
                                        <li><a href="#">Our Mission</a>
                                        </li><li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-7">
                                <div className="widget">
                                    <h6 className="widget_title">Contact Info</h6>
                                    <ul className="contact_info contact_info_light">
                                        <li>
                                            <i className="ti-location-pin" />
                                            <p>Dew Drive Annapolis Junction California, USA</p>
                                        </li>
                                        <li>
                                            <i className="ti-email" />
                                            <a href="mailto:info@sitename.com">info@sitename.com</a>
                                        </li>
                                        <li>
                                            <i className="ti-mobile" />
                                            <p>508-992-5074</p>
                                        </li>
                                        <li>
                                            <i className="ti-time" />
                                            <p>Mon - Sat <strong>8:00AM - 9:30PM</strong> Sunday - <strong>8:00AM -
                                                9:30PM</strong></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <div className="widget">
                                    <h6 className="widget_title">Instagram Feed</h6>
                                    <ul className="widget_instafeed instafeed_col3">
                                        <li><a href="#"><img src="./../assets/images/insta_img1.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                        <li><a href="#"><img src="./../assets/images/insta_img2.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                        <li><a href="#"><img src="./../assets/images/insta_img3.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                        <li><a href="#"><img src="./../assets/images/insta_img4.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                        <li><a href="#"><img src="./../assets/images/insta_img5.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                        <li><a href="#"><img src="./../assets/images/insta_img6.jpg" alt="insta_img" /><span className="insta_icon"><i className="ti-instagram" /></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bottom_footer border-top-tran">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mb-md-0 text-center text-md-left">© 2020 All Rights Reserved by <span className="text_default">Tashan</span></p>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list_none footer_link text-center text-md-right">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer