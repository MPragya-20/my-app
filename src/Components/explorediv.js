import React from 'react'
import 'C:/Users/PRAGYA/Desktop/TEN_Website/tenweb/src/cssfiles/css3.css';

const Explorediv = (props) => {
    return (
        <div className="exploredivs">
            <div className="div11">
                <a href="/"><h2>{props.write} </h2></a>
                <a href="/">
                    <div type="button" className="explore-btn">
                        Explore Here
                    </div>
                </a>
            </div>
            <div>
            <img className="images" src={props.img} alt="#"/>
            </div>
        </div>
    )
}

export default Explorediv
