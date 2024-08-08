import React, { useState } from 'react'
import '../../styles/sidebar/Sidebar.css'
import { SlHome } from "react-icons/sl"
import { BsArrowUpRightCircle } from "react-icons/bs"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaLaughSquint, FaRegStar } from 'react-icons/fa'
import { LuGamepad2 } from "react-icons/lu"
import { CiCircleQuestion } from "react-icons/ci"
import { FaMicrochip } from "react-icons/fa6"
import { PiFilmSlate } from "react-icons/pi"

function Sidebar() {
    const [sections, setSections] = useState({
        thematique: false,
        dernierement: false,
        cultureInternet: false,
        jeux: false,
        questionsReponses: false,
        technologie: false,
        popCulture: false,
        filmsSeries: false
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
                                    <div className="section-desc" onClick={() => toggleSection('cultureInternet')}>
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
                                </div>
                            )}
                    </div>

                    {/* Commenté: Sections supplémentaires */}
                    {/* <div className="section">
                        <h6 onClick={() => toggleSection('jeux')}>
                            <LuGamepad2 size={15} className='sidebar-icons' />Jeux {sections.jeux ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h6>
                        {sections.jeux && (
                            <ul>
                                <li><a href="#.html">Sub-item 1</a></li>
                                <li><a href="#.html">Sub-item 2</a></li>
                            </ul>
                        )}
                    </div>  */}

                    {/* <div className="section">
                        <h6 onClick={() => toggleSection('questionsReponses')}>
                            <CiCircleQuestion size={15} className='sidebar-icons' />Questions et <br /> réponses {sections.questionsReponses ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h6>
                        {sections.questionsReponses && (
                            <ul>
                                <li><a href="#.html">Sub-item 1</a></li>
                                <li><a href="#.html">Sub-item 2</a></li>
                            </ul>
                        )}
                    </div> */}

                    {/* <div className="section">
                        <h6 onClick={() => toggleSection('technologie')}>
                            <FaMicrochip size={15} className='sidebar-icons' />Technologie {sections.technologie ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h6>
                        {sections.technologie && (
                            <ul>
                                <li><a href="#.html">Sub-item 1</a></li>
                                <li><a href="#.html">Sub-item 2</a></li>
                            </ul>
                        )}
                    </div> */}

                    {/* <div className="section">
                        <h6 onClick={() => toggleSection('popCulture')}>
                            <FaRegStar size={15} className='sidebar-icons' />Pop Culture {sections.popCulture ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={15} />}
                        </h6>
                        {sections.popCulture && (
                            <ul>
                                <li><a href="#.html">Sub-item 1</a></li>
                                <li><a href="#.html">Sub-item 2</a></li>
                            </ul>
                        )}
                    </div> */}

                    {/* <div className="section">
                        <h6 onClick={() => toggleSection('filmsSeries')}>
                            <PiFilmSlate size={15} className='sidebar-icons' />Films et séries {sections.filmsSeries ? <IoIosArrowUp size={15} /> : <IoIosArrowDown size={20} />}
                        </h6>
                        {sections.filmsSeries && (
                            <ul>
                                <li><a href="#.html">Sub-item 1</a></li>
                                <li><a href="#.html">Sub-item 2</a></li>
                            </ul>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
