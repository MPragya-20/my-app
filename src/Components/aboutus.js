import React from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css2.css';

const Aboutus = () => {
    return (
        <div style={{backgroundColor:"white"}}>
            <div id ="abtus"align="center">
                <h3>About Us</h3>
                <br />
                <div id="abtus_head">
                    <div>
                        <h1 style={{fontWeight:"bold",textShadow:"2px 2px 7px white"}}>
                        Learning Together <br />
                        From the Comfort <br />
                        of Your Home
                        </h1>
                        <div>
                            <button id="learnMore">Learn More</button><br />
                            <img id="pattern" src="pattern.png" alt="pattern"/>
                        </div>

                    </div>
                    <div>
                      <img id="imgstu" src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_441,h_296,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp" alt="img" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutus
