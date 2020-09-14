import React, { Component } from 'react'
import './attention.css'
import foto1 from './img/img1.jpg'
import foto2 from './img/img2.jpg'
import {Link,Route} from "react-router-dom";

export default class attention extends Component {
    render() {
        return (
            <div >
                    <div className='att-page'>
                    <Route>
                        <div class="att_header">
                            <h2 class="att_header-title">Минуточку внимания</h2>
                        </div>
                        <div className='att-content'>
                            <ul className='att-con-ul'>
                                
                                
                                <li className='att-con-li'>
                                    <Link className='att-con-link'>
                                    <img className='att-img' src={foto1} alt='Vebinar'/>
                                    <span className='att-post'>Мегапост</span>
                                    <h3 class="att-body-title">Дни цифровизации: конференция о промышленном IoT и его безопасности</h3>
                                    </Link>
                                </li>
                                <li className='att-con-li'>
                                    <Link className='att-con-link'>
                                    <img className='att-img' src={foto2} alt='Vebinar'/>
                                    <span className='att-post'>Мегапост</span>
                                    <h3 class="att-body-title">Как не провалить проверку 20 000 домашек. Кейс</h3>
                                    </Link>
                                </li>


                                
                            </ul>
                        </div>
                        <div className='att-footer'>
                            <Link className='att-footer-link'>Разместить</Link>
                        </div>
                        </Route>
                    </div>

            </div>
        )
    }
}
