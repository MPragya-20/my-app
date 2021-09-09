import React from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css1.css';
import Cart from './cart';
const Nav = () => {
    
    return (
        <div style={{backgroundColor:"white"}} id="home">
            <div>
            <Cart />
            <div>
                <nav className="navbar navbar-expand-md bg-light navbar-light">
                    <div className="navbar-brand">
                        <a href="https://www.entrepreneurshipnetwork.net/">
                            <div className="written">
                                <span className ="brandname">
                                    <span className="spanmain">
                                        <span className="span1">T</span>
                                        <span className="span2">he</span>
                                    </span><br />
                                    <span className="spanmain">
                                        <span className="span1">E</span>
                                        <span className="span2">ntrepreneurship</span>
                                    </span><br />
                                    <span className="spanmain">
                                        <span className="span1">N</span>
                                        <span className="span2">etwork</span>
                                    </span>
                                </span>
                            </div>
                            <div className="brandlogo">
                                <img id="logo"  src="ten_image.jpg" alt="logo_ten" /><br />
                                <img id="pattern" src="pattern.png" alt="pattern"/>
                            </div>
                        </a>
                        <div className="chat">
                            <a href="#home"><svg style={{"zIndex":"3",position: "fixed",marginLeft:"-100px",marginTop:"210px" }}xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className = "bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                            </svg></a>
                            <a href="/">
                                <svg style={{"zIndex":"3", position: "fixed",marginLeft:"-100px",marginTop:"160px",backgroundColor:"orange" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className = "bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>     
                            </a>                       
                        </div>
                        
                    </div>
                    <div className="navbar-toggler" data-toggle="collapse" data-target="#collapseme"><span className="navbar-toggler-icon"></span></div>
                    <div className="collapse navbar-collapse" id ="collapseme">
                        <ul id="menu_nav" className ="navbar-nav right">
                            <li className = "nav-item "><a className ="nav-link active menus active " href="#home">Home</a></li>
                            <li className = "nav-item "><a className ="nav-link menus " href="/"> Online Courses</a></li>
                            <li className = "nav-item "><a className ="nav-link menus " href="/">We're Hiring</a></li>
                            <li className = "nav-item dropdown "><a className ="nav-link dropdown-toggle menus " id="more" data-toggle="dropdown" href="/">More <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Certification</a></li>
                                    <li><a href="/">Alumni Team</a></li>
                                    <li><a href="/">Forum</a></li>
                                    <li><a href="/">Hackathon</a></li>
                                    <li><a href="/">Membership Registration</a></li>
                                    <li><a href="/">Campus Ambassador Program</a></li>
                                    <li><a href="/">Mentorship</a></li>
                                    <li><a href="/">Social Media</a></li>
                                    <li><a href="/">Testimonials</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                    <li><a href="/">Complaints</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        </div>
        </div>
    )
}

export default Nav



