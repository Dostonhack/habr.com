import React, { Component } from 'react'
import './footer.css'
import { MdLanguage } from 'react-icons/md';

import { 
    FaFacebookSquare,
    FaTwitterSquare,
    FaVk,
    FaTelegramPlane,
    FaYandexInternational,
    FaYoutubeSquare
}from 'react-icons/fa';
import {
    Link, 
    BrowserRouter as Router
} from 'react-router-dom'


export default class footer extends Component {
    render() {
        return (

            <div className='footer-page'>

                {/* Footer Top */}
                <div className='footer-in'>
                    
                    {/* vashi account  */}
                    <div className='footer-in-one'>
                        <h4 className='f-i-two'>Ваш аккаунт</h4>
                            <Router>
                                <div className='f-i-t-ul'>
                                    <Link className='f-i-t-link'>Войти</Link>
                                    <Link className='f-i-t-link'>Регистрация</Link>
                                </div>
                            </Router>
                    </div>    

                    {/* Razdel */}
                    <div className='footer-in-one'>
                        <h4 className='f-i-two'>Разделы</h4>
                            <Router>
                                <div className='f-i-t-ul'>
                                    <Link className='f-i-t-link'>Публикации</Link>
                                    <Link className='f-i-t-link'>Новости</Link>
                                    <Link className='f-i-t-link'>Хабы</Link>
                                    <Link className='f-i-t-link'>Компании</Link>
                                    <Link className='f-i-t-link'>Пользователи</Link>
                                    <Link className='f-i-t-link'>Песочница</Link>
                                </div>
                            </Router>
                    </div> 
                        {/* Информация */}
                    <div className='footer-in-one'>
                        <h4 className='f-i-two'>Информация</h4>
                            <Router>
                                <div className='f-i-t-ul'>
                                    <Link className='f-i-t-link'>Устройство сайта</Link>
                                    <Link className='f-i-t-link'>Для авторов</Link>
                                    <Link className='f-i-t-link'>Для компаний</Link>
                                    <Link className='f-i-t-link'>Документы</Link>
                                    <Link className='f-i-t-link'>Соглашение</Link>
                                    <Link className='f-i-t-link'>онфиденциальность</Link>
                                </div>
                            </Router>
                    </div>     
                    

                    {/* Услуги */}
                    <div className='footer-in-one'>
                        <h4 className='f-i-two'>Услуги</h4>
                            <Router>
                                <div className='f-i-t-ul'>
                                    <Link className='f-i-t-link'>Реклама</Link>
                                    <Link className='f-i-t-link'>Тарифы</Link>
                                    <Link className='f-i-t-link'>Контент</Link>
                                    <Link className='f-i-t-link'>Семинары</Link>
                                    <Link className='f-i-t-link'>Мегапроекты</Link>
                                    <Link className='f-i-t-link'>Мерч</Link>
                                </div>
                            </Router>
                    </div>                                      
                </div>


                {/* Footer Bottom */}
                <div className='footer-bottom'>
                    <Router>
                        <p >© 2006 – 2020  «{<Link className='f-b-left' >Habr</Link>}»</p>
                        <div className='f-b-center'>
                            <Link className='f-b-center-in'><MdLanguage/> Настройка языка</Link>
                            <Link className='f-b-center-in'>О сайте</Link>
                            <Link className='f-b-center-in'>Служба поддержки</Link>
                            <Link className='f-b-center-in'>Мобильная версия</Link>
                        </div>
                    </Router>
                     {/*Footer bottom right*/}
                <div >
                    <Router>
                        <Link className='f-b-right' style={{color:'#40AEEF'}}><FaTwitterSquare/></Link>
                        <Link className='f-b-right' style={{color:'#3A5A9A'}}><FaFacebookSquare/></Link>
                        <Link className='f-b-right' style={{color:'#4A739A'}}>< FaVk/></Link>
                        <Link className='f-b-right' style={{color:'#009FDA'}}>< FaTelegramPlane/></Link>
                        <Link className='f-b-right' style={{color:'#DA2E19'}}><FaYoutubeSquare/></Link>
                        <Link className='f-b-right' style={{color:'#2C3036'}}>< FaYandexInternational/></Link>
                    </Router>

                </div>

                </div>
                
                
               
            </div>
        )
    }
}
