import React from "react";
import { Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./CSS/About.css";
import MetaData from "../MetaData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <>
        <MetaData title={`About us`} />
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <h2>Saahitya</h2><br/>
                        <p>
                             This is a complete application which helps students to sell the used academic material which is in good condition in college premise
                        </p>
                    </div>
                    <div className="aboutSectionContainer2">
                        <h3> Sudesh Darkase</h3><br/>
                        <span>Walchand College Of Engineering,Sangli.</span>
                        <Typography component="h2">Get In Touch</Typography>
                        <div className="social">
                            <a
                            href="https://www.linkedin.com/in/sudesh-darkase-035125207/"
                            target="blank"
                            >
                                <TwitterIcon className="twitterSvgIcon" />
                            </a>

                            <a href="https://www.linkedin.com/in/sudesh-darkase-035125207/" target="blank">
                                <LinkedInIcon className="gitHubSvgIcon" />
                            </a>
                            <a href="https://github.com/Sudesh2024" target="blank">
                                <GitHubIcon className="gitHubSvgIcon" />
                            </a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
