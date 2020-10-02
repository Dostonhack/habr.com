import React, { Component } from 'react'
import './miniheader.css'
import { Route,Link } from 'react-router-dom'



export default class allstreams extends Component {
    

    render() {

        return (
            <div className='All-Page'>
                <Route>
                <div className='allpage-header'>
                Все потоки
                </div>
                <div className='allpage-tabs'>
                    
                        <Link className='tabs-link' to='/'>СТАТЬИ</Link>
                        <Link className='tabs-link' to='/news'>НОВОСТИ</Link>
                        <Link className='tabs-link' to='/hubs'>ХАБЫ</Link>
                        <Link className='tabs-link' to='/authors'>АВТОРЫ</Link>
                        <Link className='tabs-link' to='/company'>КОМПАНИИ</Link>
                </div>
                <div className='tabs-level'>
                    <ul className='tabs-ul'>
                        <li><Link className='tabs-level-links'>Все подряд</Link></li>
                        <li><Link className='tabs-level-links'>Лучшие</Link></li>
                    </ul>
                </div>
                <div className='tabs-level'>
                    <ul className='tabs-ul'>
                        <li><Link className='tabs-level-links'>Сутки</Link></li>
                        <li><Link className='tabs-level-links'>Неделя</Link></li>
                        <li><Link className='tabs-level-links'>Месяц</Link></li>
                        <li><Link className='tabs-level-links'>Год</Link></li>
                    
                    </ul>
                    
                </div>
                {/* DropDown Mobile vertion */}
                <div className='dropdown'>
                        <button className='dropbtn'>Все подряд <i className="arrow down"></i></button>
                        <div className='dropdown-content'>
                            <Link className='dropdown-link'>Сутки</Link>
                            <Link className='dropdown-link'>Неделя</Link>
                            <Link className='dropdown-link'>Месяц</Link>
                            <Link className='dropdown-link'>Год</Link>

                        </div>
                    </div>
                
                </Route>



            </div>
        )
    }
}
