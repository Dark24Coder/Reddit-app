import React from 'react'
import '../../styles/connexion/LoginModal.css'
import { IoLogoApple } from "react-icons/io"
import google from '../../assets/google.jpg'

function LoginModal({ show, onClose }) {
    if (!show) {
        return null
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>Se connecter</h2>
                <p>En continuant, tu acceptes notre <a href="#.html">Contrat d’utilisation</a> et reconnais que tu comprends notre <a href="#.html">Politique de confidentialité</a>.</p>
                <button className="login-google"><img src={google} alt="google-logo" className='login-logo' height={30} /> Continuer avec Google</button>
                <button className="login-apple"><IoLogoApple  className='login-logo' size={25} />Continuer avec Apple</button>
                <div className="separator">
                    <div className="line"></div>
                        <span className="text">Ou</span>
                    <div className="line"></div>
                </div>
                <div className="input">
                    <input type="text" placeholder="Adresse email ou pseudo *" className="input-field" />
                    <input type="password" placeholder="Mot de passe *" className="input-field" />
                </div>
                <a href="#.html" className="forgot-password">Mot de passe oublié ?</a>
                <p className="signup-prompt">Première fois sur Reddit ? <a href="#.html">Inscris-toi</a></p>
                <button className="login-button">Se connecter</button>
            </div>
        </div>
    )
}


export default LoginModal