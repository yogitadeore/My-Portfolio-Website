import "./ContactMeStyles.css";
import React from 'react'
import {FaHome, FaHandPointRight, FaMailBulk, FaInstagram, FaLinkedin} from "react-icons/fa";


const ContactMe = () => {
  return (
<div class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">Contact me</h2>
        <div class="contact-content">
            <div class="column left">
                    <div class="icons">
                     <div className="logo"><FaHandPointRight size={30} style={{ color: "crimson",     marginRight:"2rem"}} />
                Here you can catch me : 
                     </div>
                </div>
                
                <div class="icons">
                    <div class="row">
                     <div className="logo"><FaHome size={30} style={{ color: "crimson", marginRight:"1rem"}} />Address
                     </div>

                     <div className="info">Shramik Nagar Satpur, Nashik
                  </div>
                    </div>
                </div>
                <div class="icons">
                    <div class="row">
                     <div className="logo"><FaMailBulk size={30} style={{ color: "crimson", marginRight:"2rem"}} />Email
                     </div>
                     <div className="info">yogitadeore2001@gmail.com
                    </div>
                    </div>
                </div>
                <div class="icons">
                    <div class="row">
                     <div className="logo"><FaInstagram  size={30} style={{ color: "crimson", marginRight:"2rem"}} />Instagram
                     </div>
                     <div className="info">yogitadeore01
                      </div>
                      </div>
                </div>
                <div class="icons">
                    <div class="row">
                     <div className="logo"><FaLinkedin  size={30} style={{ color: "crimson", marginRight:"2rem"}} />LinkedIn
                     </div>
                     <div className="info">https://www.linkedin.com/in/yogita-deore-917112258/
                    </div>
                    </div>
                </div>
            </div>
            
        <div class="column right">
                <form action="#">
                <div class="text">Message me</div>
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" required/>
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required/>
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div class="button-area">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
  )}

  
export default ContactMe
