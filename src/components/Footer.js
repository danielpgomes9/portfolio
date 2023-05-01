import "./FooterStyles.css";

import React from "react";

import {FaGithub, FaHome,} from "react-icons/fa"

import {FaPhone} from "react-icons/fa"

import {FaMailBulk} from "react-icons/fa"

import {FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color: "#fff", marginRight: "2rem", marginInline: "1rem"}}/>
                    <div>
                        <p>Bologna, Emilia-Romagna</p>
                        <p>Italy</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem", marginInline: "1rem"}}
                    />
                +39 388 435 2822
                </h4>
                
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem", marginInline: "1rem"}}
                        />
                    dani.sampa9@gmail.com
                    </h4>
                
                </div>
            </div>

            <div className="right">
                <h4>"As data scientist, I know exactly how you can use data optimally within your business. Based on your objectives, we will make a plan to reach the right insight."</h4>
                <div className="social">
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}
                    />
                 
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer