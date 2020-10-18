import React from "react"
import classes from "../Footer/footer.module.css"

function Footer(){
    return(
        <footer> 
            <div className={classes.footerWrapper}>
                <div className={classes.sectionWrapper}>
                    <h3>EDYODA</h3>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Terms Of Use</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={classes.sectionWrapper}>
                    <h3>RESOURCES</h3>
                    <p>Courses</p>
                    <p>Learning Videos</p>
                    <p>EdYoda Stories</p>
                    <p>University</p>
                </div>
                <div className={classes.sectionWrapper}>
                    <h3>FOR ENTERPRISES</h3>
                    <p>Hire EdYoda Graduates</p>
                    <h3>QUICK LINKS</h3>
                    <p>Learn and Earn</p>
                    <p>Become a Learning-Enabler</p>
                    <p>Tips for Learning-Enabler</p>
                    <p>Request New Topic</p>
                </div>
                <div className={classes.sectionWrapper}>
                    <h3>CONNECT</h3>
                    <p>2nd Floor #188, Survey No.-123/1,<br></br>
                       Incubes Building Next to McDonalds,<br></br>
                       ITPL Main Rd, Brookefield,Bengaluru,<br></br>
                       Karnataka-560037, India
                    </p>                    
                    <img src="https://assessments.edyoda.com/static/images/Email.svg" alt="email thumnail" />
                    <span>hello@edyoda.com</span><br />
                    <img src="https://assessments.edyoda.com/static/images/Call.svg" alt="call thumbnail" />
                    <span>+91 8971554184</span>
                    <div className={classes.SocialMedia}>
                        <img src="https://assessments.edyoda.com/static/images/landmark.png" alt="location" />
                        <img src="https://assessments.edyoda.com/static/images/twitter.svg" alt="twitter" />
                        <img src="https://assessments.edyoda.com/static/images/fbimage.png" alt="facebook" />
                        <img src="https://assessments.edyoda.com/static/images/linkden.png" alt="Linkedin" />
                    </div>
                    <p>© 2020 <br />
                    zekeLabs Technologies Private Limited
                    </p>

                </div>
            </div>
        </footer>    
        )
    
}

export default Footer