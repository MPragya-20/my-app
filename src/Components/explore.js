import React from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css3.css';
import Explorediv from './explorediv';
const Explore = () => {
    let written = {
        one :"Entrepreneurship made fun",
        two :"Digital Marketing",
        three :"Product Management like a pro",
    };
    return (
        <div  align="center" className="explore" style={{backgroundColor:"white"}}>
            <Explorediv img='https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_640,h_308,al_c,q_80,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp' write = {written.one} />
            <Explorediv img='https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp' write = {written.two}/>
            <Explorediv img='https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp' write = {written.three}/>
        </div>
    )
}

export default Explore
