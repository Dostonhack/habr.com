import React, { Component } from 'react'
import './Posttab.css'
import logo1 from './img/img2.jpg'
import bodyimg from './img/img3.jpg'
import {Link, Route} from 'react-router-dom'
import { FaBookmark ,FaEye,FaCommentAlt} from 'react-icons/fa';

export default class Posttab extends Component {
    render() {
        return (
            
                <div className='post-center'> 
                    <ul className='post-ul'>
                        <li className='post-ul-li'>
                            <Route>
                            <article>
                                <header className='post-header'>
                                <Link className='post-link'>
                                <img src={logo1} className='post-link-logo'/>
                                <span className='post-link-name'>PatientZero</span>
                                </Link>
                                <span className='post-header-time'>вчера в 08:04</span>
                                </header>
                                <h2 className='post-title'>
                                    <Link className='post-title-link'>
                                        Почему единственный вид деревьев не победил все остальные?
                                    </Link>
                                </h2>
                                <ul className='post-habs'>
                                    <Link className='post-link-hubs'><li>Математика</li></Link>
                                    <Link className='post-link-hubs'><li>Научно-популярное,</li></Link>
                                    <Link className='post-link-hubs'><li>Экология</li></Link>
                                </ul>
                                <div className='post-body'>
                                    <img src={bodyimg} className='body-img'/>
                                    <div className='body-text'>
                                        <p>С началом пандемии большинство разработчиков Кремниевой долины начали трудиться из дома. Довольно быстро они стали задаваться вопросом: зачем платить бешеные цены за аренду недвижимости, если домашний офис можно организовать где угодно? Средняя плата за аренду односпальной квартиры в Сан-Франциско составляет $3629. А, скажем, в Чикаго, Атланте или Филадельфии — тоже вполне крупных городах — она будет около $1650. Зачем платить лишние $2 тысячи, больше $20 тысяч в год, чтобы сидеть в своём стуле чуть поближе к штаб-квартире компании?</p>
                                        <p>Многие задумались о переезде (по крайней мере, на время). Но хитрые финансисты Кремниевой долины своего не упустят. И теперь крупные компании начинают вводить новую стратегию: модифицируемая зарплата!</p>

                                    </div>
                                    <Link className='body-link'>
                                    Читать далее
                                    </Link>
                                </div>
                                <div className='post-footer'>
                                        <span className='post-footer-item'>
                                            <FaBookmark></FaBookmark>
                                            <span style={{color:'#6c9007',marginLeft:'8px'}}>+298</span>
                                        </span>
                                        <Link className='post-footer-link1' style={{textDecoration:'none'}}>
                                        <span className='post-footer-item'>
                                            <FaBookmark></FaBookmark>
                                            <span style={{marginLeft:'8px'}}>112</span>

                                        </span>
                                        </Link>
                                        <span className='post-footer-item'>
                                            <FaEye></FaEye>
                                            <span style={{marginLeft:'8px'}} >41k</span>

                                        </span>
                                        
                                        <Link className='post-footer-link2'  style={{textDecoration:'none'}}>
                                        <span className='post-footer-item' >
                                            <FaCommentAlt></FaCommentAlt>
                                            <span style={{marginLeft:'8px'}}>215</span>

                                        </span>
                                        </Link>
                                </div>
                            </article>
                            </Route>
                        </li>
                        <li className='post-ul-li'>
                            <Route>
                            <article>
                                <header className='post-header'>
                                <Link className='post-link'>
                                <img src={logo1} className='post-link-logo'/>
                                <span className='post-link-name'>PatientZero</span>
                                </Link>
                                <span className='post-header-time'>вчера в 08:04</span>
                                </header>
                                <h2 className='post-title'>
                                    <Link className='post-title-link'>
                                        Почему единственный вид деревьев не победил все остальные?
                                    </Link>
                                </h2>
                                <ul className='post-habs'>
                                    <Link className='post-link-hubs'><li>Математика</li></Link>
                                    <Link className='post-link-hubs'><li>Научно-популярное,</li></Link>
                                    <Link className='post-link-hubs'><li>Экология</li></Link>
                                </ul>
                                <div className='post-body'>
                                    <img src={bodyimg} className='body-img'/>
                                    <div className='body-text'>
                                        <p>С началом пандемии большинство разработчиков Кремниевой долины начали трудиться из дома. Довольно быстро они стали задаваться вопросом: зачем платить бешеные цены за аренду недвижимости, если домашний офис можно организовать где угодно? Средняя плата за аренду односпальной квартиры в Сан-Франциско составляет $3629. А, скажем, в Чикаго, Атланте или Филадельфии — тоже вполне крупных городах — она будет около $1650. Зачем платить лишние $2 тысячи, больше $20 тысяч в год, чтобы сидеть в своём стуле чуть поближе к штаб-квартире компании?</p>
                                        <p>Многие задумались о переезде (по крайней мере, на время). Но хитрые финансисты Кремниевой долины своего не упустят. И теперь крупные компании начинают вводить новую стратегию: модифицируемая зарплата!</p>

                                    </div>
                                    <Link className='body-link'>
                                    Читать далее
                                    </Link>
                                </div>
                                <div className='post-footer'>
                                        <span className='post-footer-item'>
                                            <FaBookmark></FaBookmark>
                                            <span style={{color:'#6c9007',marginLeft:'8px'}}>+298</span>
                                        </span>
                                        <Link className='post-footer-link1' style={{textDecoration:'none'}}>
                                        <span className='post-footer-item'>
                                            <FaBookmark></FaBookmark>
                                            <span style={{marginLeft:'8px'}}>112</span>

                                        </span>
                                        </Link>
                                        <span className='post-footer-item'>
                                            <FaEye></FaEye>
                                            <span style={{marginLeft:'8px'}} >41k</span>

                                        </span>
                                        
                                        <Link className='post-footer-link2'  style={{textDecoration:'none'}}>
                                        <span className='post-footer-item' >
                                            <FaCommentAlt></FaCommentAlt>
                                            <span style={{marginLeft:'8px'}}>215</span>

                                        </span>
                                        </Link>
                                </div>
                            </article>
                            </Route>
                        </li>
                    </ul>
                </div>
        )
    }
}
