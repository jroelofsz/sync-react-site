import { SiKofi } from 'react-icons/si';
import { CiCoffeeCup } from 'react-icons/ci';
import { MdLocalGroceryStore } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="text-white pt-4">
            <hr></hr>
            <div className="row text-center">
                <div className="col-md-4">
                    <h4>Links</h4>
                    <ul className='list-unstyled'>
                        <li>
                            <a className='btn btn-primary fw-bold'
                                href="https://discord.gg/zApwCVqDcU"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDiscord size={32} /> Discord
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                    <img src="../images/lbs_scripts_logo_icon_96x96.png" alt="Lebubble Logo" className="rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                    <h4>Support</h4>
                    <ul className="list-unstyled">
                        <li>
                            <a  className = 'btn btn-primary fw-bold'
                                href="https://syncrp.tebex.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLocalGroceryStore size={32}/> Tebex
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>
                © {new Date().getFullYear()} Sync RP. All rights reserved.
            </p>
        </footer>
    )
}