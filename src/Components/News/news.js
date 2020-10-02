import React, { Component } from 'react'
import './news.css'
import {Link} from 'react-router-dom'
export default class news extends Component {
    render() {
        return (
            <div className='news'>
                <Link className='news-header'>
                    <h3 className='news-header-h3'>Новости</h3>
                </Link>
                <div className='news-body'>
                    <div className='news-body-containers'>
                        <Link className='news-body-link'>
                            Разработчики Among Us не будут выпускать сиквел из-за неожиданного успеха оригинала
                        </Link><br/>
                        <span className='news-body-time'>11:42</span>
                        <Link className='news-body-link2'>Комментарии: 0</Link>
                    </div>
                    <div className='news-body-containers'>
                        <Link className='news-body-link'>
                        В сеть утекли исходные коды операционной системы Windows XP и Server 2003
                        </Link><br/>
                        <span className='news-body-time'>11:31</span>
                        <Link className='news-body-link2'>Комментарии: 1</Link>
                    </div>
                    <div className='news-body-containers'>
                        <Link className='news-body-link'>
                        Netflix опередила Google в рейтинге найма сервиса Hired
                        </Link><br/>
                        <span className='news-body-time'>11:11</span>
                        <Link className='news-body-link2'>Комментарии: 7</Link>
                    </div>
                    <div className='news-body-containers'>
                        <Link className='news-body-link'>
                        Microsoft выпустит в следующем году новую версию Office без подписки
                        </Link><br/>
                        <span className='news-body-time'>09:3</span>
                        <Link className='news-body-link2'>Комментарии: 14</Link>
                    </div>
                </div>
                <div classNmae='news-footer'>
                    <Link className='news-footer-link'>
                        Показать ещё
                    </Link>
                </div>

            </div>
        )
    }
}
