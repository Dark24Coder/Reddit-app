import { useState, useRef } from 'react';
import logo from '../../assets/Logo.svg';
import { CiSearch, CiLogin } from 'react-icons/ci';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { MdOutlineQrCodeScanner, MdOutlineAdsClick } from 'react-icons/md';
import { FaEllipsisH } from 'react-icons/fa';
import LoginModal from '../connexion/LoginModal';
import '../../styles/navbar/Navbar.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const handleBlur = (event) => {
        if (!menuRef.current.contains(event.relatedTarget)) {
            setShowMenu(false);
        }
    };

    return (
        <nav className="navbar">
            <a href="index.html"><img src={logo} alt="Logo" height={30} className='logo' /></a>
            <div className="searchbar">
                <CiSearch className="icon" size={20} />
                <input type="text" placeholder="Rechercher sur Reddit" className="input-text" />
            </div>
            <div className="bouton">
                <button className="nav-btn"><MdOutlineQrCodeScanner className="icon" size={20} />Télécharger l'app</button>
                <button className="nav-connect" onClick={toggleLoginModal}>Se connecter</button>
                <div className="menu-container" ref={menuRef} tabIndex="0" onBlur={handleBlur}>
                    <button className="menu-button" onClick={toggleMenu}><FaEllipsisH className="nav-menu" size={15} /></button>

                    {showMenu && (
                        <div className="menu-dropdown">
                            <ul>
                                <li onClick={toggleLoginModal}><CiLogin className="nav-links" size={20} />Se connecter / S'inscrire</li>
                                <li><MdOutlineAdsClick className="nav-links" size={20} />Faire de la publicité sur Reddit</li>
                                <li><RiShoppingBasketLine className="nav-links" size={20} />Découvrir les avatars de collections</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <LoginModal show={showLoginModal} onClose={toggleLoginModal} />
        </nav>
    );
}

export default Navbar;
