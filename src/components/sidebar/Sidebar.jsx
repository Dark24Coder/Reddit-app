import React, { useState } from 'react'
import '../../styles/sidebar/Sidebar.css'
import { SlHome } from "react-icons/sl"
import { BsArrowUpRightCircle, BsQuestionCircle } from "react-icons/bs"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaLaughSquint, FaRegStar } from 'react-icons/fa'
import { LuGamepad2, LuWrench } from "react-icons/lu"
import { CiCircleQuestion, CiBullhorn } from "react-icons/ci"
import { FaMicrochip } from "react-icons/fa6"
import { PiFilmSlate, PiCoffee, PiMicrophoneStageLight } from "react-icons/pi"
import { HiOutlineBookOpen } from "react-icons/hi2"
import { MdOutlinePlaylistAddCheckCircle, MdOutlineBedroomParent } from "react-icons/md"
import { LiaHourglassHalfSolid, LiaBalanceScaleSolid, LiaClipboardListSolid } from "react-icons/lia"
import { TiThLargeOutline } from "react-icons/ti"


function Sidebar() {
    const [sections, setSections] = useState({
        thematique: false,
        dernierement: false,
        cultureInternet: false,
        jeux: false,
        questionsReponses: false,
        technologie: false,
        popCulture: false,
        filmsSeries: false,
        ressources: false
    })

    const toggleSection = (section) => {
        setSections(prevSections => ({
            ...prevSections,
            [section]: !prevSections[section]
        }))
    }

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="navigation-icons">
                    <div className="icons1">
                        <a href="#.html"><h6><SlHome size={20} className='sidebar-icons' />Accueil</h6></a>
                    </div>
                    <div className="icons2">
                        <a href="#.html"><h6><BsArrowUpRightCircle size={20} className='sidebar-icons' />Populaires</h6></a>
                    </div>
                </div>

                <div className="sections">
                    <div className="dernier">
                        <h5 onClick={() => toggleSection('dernierement')}>
                        DERNIÈREMENT {sections.dernierement ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h5>
                            {sections.dernierement && (
                                <ul>
                                    {/* <li><a href="#.html">Sub-item 1</a></li>
                                    <li><a href="#.html">Sub-item 2</a></li> */}
                                </ul>
                            )}
                    </div>

                    <div className="thematique">
                        <h5 onClick={() => toggleSection('thematique')}>
                            THÉMATIQUE {sections.thematique ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h5>
                            {sections.thematique && (
                                <div className="section">
                                    <div className="section-one" onClick={() => toggleSection('cultureInternet')}>
                                        <div className="description">
                                            <FaLaughSquint size={22} className='sidebar-icons' />
                                            <p>
                                                Culture Internet <br /> (contenu viral)
                                            </p>
                                        </div>
                                        <div className="ioio">
                                            {sections.cultureInternet ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                        </div>
                                    </div>
                                    {sections.cultureInternet && (
                                        <ul>
                                            <li><a href="#.html">Incroyable</a></li>
                                            <li><a href="#.html">Animaux de compagnie <br />
                                            et autres</a></li>
                                            <li><a href="#.html">Cringe et facepalm</a></li>
                                            <li><a href="#.html">Humour</a></li>
                                            <li><a href="#.html">Intéressant</a></li>
                                            <li><a href="#.html">Memes</a></li>
                                            <li><a href="#.html">Étrangement satisfaisant</a></li>
                                            <li><a href="#.html">Reddit Meta</a></li>
                                            <li><a href="#.html">Réconfort</a></li>
                                        </ul>
                                    )}

                                    <div className="section-two" onClick={() => toggleSection('jeux')}>
                                        <div className="description">
                                            <LuGamepad2 size={22} className='sidebar-icons' />
                                            <p>
                                                Jeux
                                            </p>
                                        </div>
                                        <div className='ioio'>
                                            {sections.jeux ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                        </div>
                                    </div>

                                    {sections.jeux && (
                                        <ul>
                                            <li><a href="#.html">Jeux d'actions</a></li>
                                            <li><a href="#.html">Jeux d'aventure</a></li>
                                            <li><a href="#.html">E-sports</a></li>
                                            <li><a href="#.html">Consoles et matériels de <br />
                                                jeu vidéo</a></li>
                                            <li><a href="#.html">Actualités de discussions <br />
                                                sur les jeux vidéo</a></li>
                                            <li><a href="#.html">Jeux mobiles</a></li>
                                            <li><a href="#.html">Autres jeux</a></li>
                                            <li><a href="#.html">Jeux de rôles</a></li>
                                            <li><a href="#.html">Jeux de simulation</a></li>
                                            <li><a href="#.html">Jeux de sport et de<br />
                                                course</a></li>
                                            <li><a href="#.html">Jeux de stratégie</a></li>
                                            <li><a href="#.html">Jeux de société</a></li>
                                        </ul>
                                    )}

                                    <div className="section-three" onClick={() => toggleSection('questionsReponses')}>
                                        <div className="description">
                                            <CiCircleQuestion size={22} className='sidebar-icons' />
                                            <p>Questions et <br />
                                                    réponses</p>
                                            </div>
                                            <div className='ioio'>
                                                {sections.questionsReponses ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                            </div>
                                        </div>
                                    {sections.questionsReponses && (
                                        <ul>
                                            <li><a href="#.html">Questions et réponses</a></li>
                                            <li><a href="#.html">Histoires et confessions</a></li>
                                        </ul>
                                    )}

                                    <div className="section-four" onClick={() => toggleSection('technologie')}>
                                            <div className="description">
                                                <FaMicrochip size={22} className='sidebar-icons' />
                                                <p>Technologie</p>
                                            </div>
                                            <div className="ioio">
                                                {sections.technologie ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                            </div>
                                        </div>
                                    {sections.technologie && (
                                        <ul>
                                            <li><a href="#.html">Impression 3D</a></li>
                                            <li><a href="#.html">Intélligence artificielle et <br />
                                                machine learning</a></li>
                                            <li><a href="#.html">Ordinateurs et matériel</a></li>
                                            <li><a href="#.html">Électronique grand public</a></li>
                                            <li><a href="#.html">Électronique DIY</a></li>
                                            <li><a href="#.html">Programmation</a></li>
                                            <li><a href="#.html">Logiciels et applications</a></li>
                                            <li><a href="#.html">Services et streaming</a></li>
                                            <li><a href="#.html">Actualités de discussions <br />
                                                technologiques</a></li>
                                            <li><a href="#.html">Réalité virtuelle et <br />
                                                augmentée</a></li>
                                        </ul>
                                    )}

                                    <div className="section-five" onClick={() => toggleSection('popCulture')}>
                                        <div className="description">
                                            <FaRegStar size={22} className='sidebar-icons' />
                                            <p>Pop Culture</p>
                                        </div>
                                        <div className="ioio">
                                            {sections.popCulture ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                        </div>
                                    </div>
                                    {sections.popCulture && (
                                        <ul>
                                            <li><a href="#.html">Célébrités</a></li>
                                            <li><a href="#.html">Artistes et <br />
                                                influenceur·euse·s</a></li>
                                            <li><a href="#.html">Générations et nostagie</a></li>
                                            <li><a href="#.html">Podcasts</a></li>
                                            <li><a href="#.html">Streamers</a></li>
                                            <li><a href="#.html">Tarot et astrologie</a></li>
                                        </ul>
                                    )}

                                    <div className="section-six" onClick={() => toggleSection('filmsSeries')}>
                                        <div className="description">
                                            <PiFilmSlate size={22} className='sidebar-icons' />
                                            <p>Films et séries</p>
                                        </div>
                                        <div className="ioio">
                                            {sections.filmsSeries ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                                        </div>
                                    </div>
                                    {sections.filmsSeries && (
                                        <ul>
                                            <li><a href="#.html">Films et séries d'action</a></li>
                                            <li><a href="#.html">Films et séries <br />
                                                d'animation</a></li>
                                            <li><a href="#.html">Films et séries comiques</a></li>
                                            <li><a href="#.html">Films et séries de crime,<br />
                                                mystère et thrillers</a></li>
                                            <li><a href="#.html">Films et séries<br />
                                                documentaires</a></li>
                                            <li><a href="#.html">Films et séries <br />
                                                dramatiques</a></li>
                                            <li><a href="#.html">Films et séries de<br />
                                                fantasy</a></li>
                                            <li><a href="#.html">Films et séries d'horreur</a></li>
                                            <li><a href="#.html">Actualités et discussion<br />
                                                sur cinéma</a></li>
                                            <li><a href="#.html">Télé-réalité</a></li>
                                            <li><a href="#.html">Films et séries <br />
                                                romantiques</a></li>
                                            <li><a href="#.html">Films et séries de <br />
                                                science-fiction</a></li>
                                            <li><a href="#.html">Films et séries de super-<br />
                                                héros</a></li>
                                            <li><a href="#.html">Actualités de discussions <br />
                                                télévisuelles</a></li>
                                        </ul>
                                    )}
                                    <div className="section-seven">
                                        <p>En voir plus</p>
                                    </div>
                                </div>
                            ) }
                    </div>

                    <div className="ressources">
                        <p onClick={() => toggleSection('ressources')}>
                            RESSOURCES {sections.ressources ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </p>
                        {sections.ressources && (
                            <ul>
                                <li><a href="#.html">
                                    <PiCoffee size={22} className='ressources-icons' />
                                    À propos de Reddit
                                </a></li>
                                <li><a href="#.html">
                                    <CiBullhorn size={22} className='ressources-icons' />
                                    Publicités
                                </a></li>
                                <li><a href="#.html">
                                    <BsQuestionCircle size={22} className='ressources-icons' />
                                    Aide
                                </a></li>
                                <li><a href="#.html">
                                    <HiOutlineBookOpen size={22}  className='ressources-icons' />
                                    Blog
                                </a></li>
                                <li><a href="#.html">
                                    <LuWrench size={22} className='ressources-icons' />
                                    Carrières
                                </a></li>
                                <div className="cn">
                                    <li className='border'><a href="#.html">
                                        <PiMicrophoneStageLight size={22} className='ressources-icons' />  {/* Ajout de size et className */}
                                        Presse
                                    </a></li>
                                </div>
                                <li><a href="#.html">
                                    <MdOutlinePlaylistAddCheckCircle size={22} className='ressources-icons' />
                                    Communautés
                                </a></li>
                                <li><a href="#.html">
                                    <LiaHourglassHalfSolid size={22} className='ressources-icons' />
                                    Le meilleur de Reddit
                                </a></li>
                                <div className="cn">
                                    <li className='border'><a href="#.html">
                                        <TiThLargeOutline size={22} className='ressources-icons' />
                                        Thématiques
                                    </a></li>
                                </div>
                                <li><a href="#.html">
                                    <MdOutlineBedroomParent size={22} classsName='ressources-icons' />
                                    Politique de contenu
                                </a></li>
                                <li><a href="#.html">
                                    <LiaBalanceScaleSolid size={22} className='ressources-icons' />
                                    Politique de <br />
                                    confidentialité
                                </a></li>
                                <li><a href="#.html">
                                    <LiaClipboardListSolid size={22} className='ressources-icons' />
                                    Contrat d'utilisation
                                </a></li>
                            </ul>
                        ) }
                    </div>
                    <footer><a href="#.html">Reddit, Inc. © 2024. Tous droits réservés.</a></footer>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
