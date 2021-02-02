import React from 'react';
import './footer.css';
import Logo from '../../logo.svg';


const Footer = ({companyData}) => {
    const {elon_twitter, twitter, website, flickr} = companyData.links ? companyData.links : '';
    return (
        <footer className="footer">
            <img src={Logo} alt="logo Space X" className="logo"/>
            <nav className="footer-nav">
                <ul className="list">
                    <li className="item"><a href={elon_twitter ? elon_twitter : ''} rel="noopener noreferrer" target='_blank' className="item-link">Elon Musk Twitter</a></li>
                    <li className="item"><a href={twitter ? twitter : ''} rel="noopener noreferrer" target='_blank' className="item-link">Twitter</a></li>
                    <li className="item"><a href={flickr ? flickr : ''} rel="noopener noreferrer" target='_blank' className="item-link">Flickr</a></li>
                    <li className="item"><a href={website ? website : ''} rel="noopener noreferrer" target='_blank' className="item-link">Website</a></li>
                </ul>
            </nav>
            <p className="footer-text">
                For additional questions, contact
                <a className="footer-link" href="mailto:rideshare@spacex.com"
                >rideshare@spacex.com</a
                >
            </p>

        </footer>
    )
}

export default Footer;