import React from 'react'

const AboutSection = () => {
    return (
        <div className='w-100'>
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                            <div className="about_img">
                                <img src="./../assets/images/about_img1.jpg" alt="about_img1" />
                            </div>
                        </div>
                        <div className="col-lg-7 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                            <div className="about_section pl-lg-3">
                                <div className="heading_s1">
                                    <span className="sub_heading font_style1">About Us</span>
                                    <h2>Welcome to our restaurant</h2>
                                </div>
                                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                    anything
                                    embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet
                                    tend to repeat predefined chunks as necessary</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim
                                    expedita
                                    sed nesciunt incidunt accusamus adipisci officia libero laboriosam!</p>
                                <a className="btn btn-dark btn-radius" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSection