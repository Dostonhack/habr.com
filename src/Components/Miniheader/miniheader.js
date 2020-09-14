import React, { Component } from 'react'
import './miniheader.css'
import { Route,Link,Switch } from 'react-router-dom'

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
                
                </Route>



            </div>
        )
    }
}
