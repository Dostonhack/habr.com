import React, { Component } from 'react'
import  './header.css'
// import Button from 'react-bootstrap/Button';
// import {Button } from 'react-bootstrap';
import { FaAngleDown,FaSearch } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
// import AllStream from '../../containers/AllStreams/allstreams'
// import Administration from '../../containers/Administration/administration'

// import 'bootstrap/dist/css/bootstrap.min.css';


import {
    Link,
    Route
} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div >
                <div className='headertop'>
                    <Route>
                        <div className='h-t-left'>
                            <Link className='h-t-l-logo'>Хабр</Link>
                            <div className='h-t-l-line'></div>
                            <Link className='FaDown'><FaAngleDown /></Link>
                            <Link  className='h-t-button1'>КАК СТАТЬ АВТОРОМ</Link>
                        </div>
                            <Link className='h-t-right'> А сможете создать дизайн для футболок? </Link>
                    </Route>
                </div>


                <div className='headerone'>
                <div > 
                    <Route>
                        <ul>
                            <li> <Link  to="/" className='h-link'>Все потоки</Link></li>
                            <li> <Link  to="/development" className='h-link' >Разработка</Link></li>
                            <li> <Link  to="/administration" className='h-link' >Администрирование</Link></li>
                            <li> <Link  to="/design" className='h-link'>Дизайн</Link></li>
                            <li> <Link  to="/management" className='h-link'>Менеджмент</Link></li>
                            <li>  <Link  to="/marketing" className='h-link'>Маркетинг</Link></li>
                            <li> <Link  to="/Nauchpop" className='h-link'>Научпоп</Link></li>
                            </ul>
                            
                        </Route>                                
                </div>

                <div className='header-right'>
                <Route>  
                    <Link className='search' ><FaSearch/></Link>
                    <Link className='language'><MdLanguage/></Link>
                    <Link className='signin' >Войти</Link>
                    <Link className='signup'> Регистрация</Link>
                </Route>  

                </div>
                </div>
            </div>
        )
    }
}
export default  Header;