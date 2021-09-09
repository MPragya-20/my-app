import React from 'react'
import Benefitsdiv from './Benefitsdiv'

const Benefits = () => {
    const head = {
        one : 'Expert Teachers',
        two : 'Online Community',
        three : 'Flexible Curriculum'
    }
    const content = {
        o:'Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback. We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.',
        t:'Feel like home, with a "family of invisible friends".',
        th:"Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.",
    }
    return (
        <div className="container-fluid" style={{backgroundColor:"white"}}>
            <div id="heading-ben" align="center">Our Course Benefits</div>
            <div className='fullben' align="center">
                <div><Benefitsdiv head={head.one}  content={content.o}/></div>
                <div><Benefitsdiv head={head.two} content={content.t}/></div>
                <div><Benefitsdiv head={head.three} content={content.th}/></div>
            </div>
        </div>
    )
}

export default Benefits
