import * as React from "react";
import logo from "../images/logo.png";
import appstore from "../images/app store.png";
import playstore from "../images/play store.png";
import {
    footer,
    applogo,
    thanks,
    col,
} from './css/footer.module.css'

const Footer = () => {
    return(
        <div className={`${footer} text-bg-dark d-flex`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={`${col} col-3`}>
                        <h3>Download our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className={applogo}>
                            <img src={playstore} />
                            <img src={appstore} />
                        </div>    
                    </div>
                    <div className={`${col} col-3`}>
                        <img src={logo} className="img-fluid"/>
                        <p>Our Purpose Is To Provide An Easy-To-Use Website Model, Espically For 
                            Small Business.</p>
                    </div>
                    <div className={`${col} col-3`}>
                        <ul>
                            <h3>Produced By</h3>
                            <li>Binaya Raj Thapa</li>
                            <li>Shubin Pokhrel</li>
                            <li>Shashwat Khadka</li>
                            <li>Siddhartha Lal Pradhan</li>
                        </ul>
                    </div>
                    <div className={`${col} col-3`}>
                        <ul>
                            <h3>Follow us on</h3>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Linked In</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className={thanks}>THANK YOU FOR USING OUR WEBSITE</p>
            </div>  
        </div>
    );
}

export default Footer;