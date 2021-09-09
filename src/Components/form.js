import React, {useState} from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css4.css';



const Form = () => {
    const [color, setColor] = useState("green")
    const function_=()=>{
        if (color === "green"){
            setColor("white")
        }
        else{
            setColor("green")
        }
    }
    return (
        <div className="form-div" align="center">
            <div className="imageform" align="center">
                <h1>Power of <span style={{textShadow:"none"}}>TEN</span> Consulting</h1>
                <button className="btn btn-danger">Explore Here &gt; </button>
            </div>
                <div>
                    <h5>Subscribe to our newsletter</h5>
                    
                        <div className="footer-flex">
                            <div className="footer-flex social-icons">
                                <div><a href="/"><img className="social" src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="f" /></a></div>
                                <div><a href="/"><img className="social" src="https://static.wixstatic.com/media/59687ffffc2042f885062ce2b0744381.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/59687ffffc2042f885062ce2b0744381.webp" alt="t" /></a></div>
                                <div><a href="/"><img className="social" src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt="i" /></a></div>
                            </div>

                            <div>
                                <form id="form" action="#">
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                        <div><input type="text" name ="fullname" placeholder="Full Name"/></div>
                                        <div><input type="text" name ="collegename" placeholder="College Name"/></div>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                        <div><input type="text" name ="mobile" placeholder="Mobile No."/></div>
                                        <div><input type="text" name ="email" placeholder="Email"/></div>
                                    </div>
                                    <div><span>
                                    <div type="button" onClick = {function_} style={{color:"black", backgroundColor:color}} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                        </svg>
                                    </div>
                                    </span> <em> Join TEN's Discord Community</em></div>
                                    <button type="submit" className="btn btn-light">Submit</button>
                                </form>
                            </div>

                            <div className="faq">
                                <h3>About Us</h3>
                                <h3>FAQ's</h3>
                                <h3>Contact Us</h3>
                            </div>
                    </div>
                   
                </div>
                <div className="footer">
                    <p>&copy; 2021 Pragya Mukherjee -The Entrepreneurship Network</p>
                </div>
        </div>
    )
}

export default Form
