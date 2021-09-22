import React from "react";
import "./Order.css";
import { Link } from "react-router-dom";

const Order: React.FC = ()=>{
    const orderImgType: string = "illustration-hero.svg";
    const orderPackageType: string = "icon-music.svg";

    return(
        <div className="summary-container">
            <img src={`./images/${orderImgType}`}></img>
            <div className="order-container">
                <div style={{fontWeight: "bold", textAlign: "center"}}>
                    Order Summary
                </div>
                <br/>
                <div id="summary-info" style={{fontSize: "10px", textAlign: "center", paddingLeft: "20%", paddingRight: "20%", color: "hsl(240, 9%, 53%)"}}>
                    You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!
                </div>
                <br></br>
                <div className="order-package">
                    <img src={`./images/${orderPackageType}`}></img>
                    <div>
                        <p style={{fontWeight: 'bold'}}>Annual Plan</p>
                        <p>$59.99/year</p>
                    </div>
                    <Link to="/">
                        Change
                    </Link>
                    
                </div>
                <br/>
                <div>
                    <button className="check-out">
                         Proceed to Payment
                    </button>
                    <br/>
                    <br/>
                    <div id="cancel-container">
                        <Link to="/" id="cancel">Cancel Order</Link>
                    </div>
                </div>

            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Rashid Alazzoni</a>.
            </div>
        </div>
    )
}


export default Order;