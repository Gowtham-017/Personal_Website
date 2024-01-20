import React from 'react';
import { FaHeart} from 'react-icons/fa';
import '../styles/Footer.css';
function Footer() {
    return (
        <div className="copy">
            <h4>2023 © Copyrights</h4>
            <h4>Designed with  <FaHeart style={{"color":"white"}}/> </h4>
        </div>
    );
}

export default Footer;
