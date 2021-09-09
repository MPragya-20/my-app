import React from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css3.css';

const Testimonials = () => {
    return (
        <div align="center" style={{backgroundColor:"white"}}>
            <div className="testimonial-header">Testimonials</div>
        <div className="testimonials" align="center">
            
            <div align="center"  className="carousel slide" data-ride="carousel">

                    <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp" alt="slide1"/>
                        <div className="carousel-caption">
                            <h3>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</h3>
                            <p>-Anjali Srivastava, Content Intern</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp" alt="slide2"/>
                        <div className="carousel-caption">
                            <h3>I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.

Thank you team TEN!</h3>
                            <p>-Kshema Unni, Business Development Intern!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp" alt="slide3"/>
                        <div className="carousel-caption">
                            <h3>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</h3>
                            <p>-Aakriti Malik, DM Intern</p>
                        </div>
                    </div>
                    </div>

                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Testimonials
