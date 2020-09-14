import React, { Component } from 'react'
import './Reklama.css'
import { 
    BrowserRouter as
    Router,
    Link } from 'react-router-dom'

import vtb from './img/vtb.png'
import nspk from './img/nspk.png'
import avito from './img/avito.png'



class Reklama extends Component {
    render() {
        return (
            <div  className='reklamapage'>
                <h3 style={{color:'#505c66',fontWeight:'500',fontSize:'13px'}}>СПОНСОРЫ СООБЩЕСТВА</h3>
                <hr className='hrline'/>
                {/* Line top */}
                <Router>
                <ul className='r-ul'>

                    <li className='r-ul-li'>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <div className='r-ul-li-div'>
                                <h3 className='r-ul-li-d-h3'>ВТБ</h3>
                                <img className='r-ul-li-d-img' src={vtb} />
                            </div>
                            <p style={{fontSize:'14px',color:'#222', lineHeight:'20px',margin:'0'}}>
                            Развивает и делает финансовые услуги доступными онлайн.
                            </p>
                        </Link>
                    </li>

                    <li className='r-ul-li'>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <div className='r-ul-li-div'>
                                <h3 className='r-ul-li-d-h3'>НСПК</h3>
                                <img className='r-ul-li-d-img' src={nspk} />
                            </div>
                            <p style={{fontSize:'14px',color:'#222', lineHeight:'20px',margin:'0'}}>
                                Национальная система платежных карт. Настоящий highload, обеспечивает все наши платежи.
                            </p>
                        </Link>
                    </li>

                    <li className='r-ul-li'>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <div className='r-ul-li-div'>
                                <h3 className='r-ul-li-d-h3'>Авито</h3>
                                <img className='r-ul-li-d-img' src={avito} />
                            </div>
                            <p style={{fontSize:'14px',color:'#222', lineHeight:'20px',margin:'0'}}>
                                Главные по объявлениям в России. Укрощают высокие нагрузки.  
                            </p>
                        </Link>
                    </li>
                    

                   

                    {/* Line bottom */}
                    <hr className='hrline'/>
                    <Link className='r-ul-link'>Как стать спонсором?</Link>

                </ul>
                </Router>
            </div>
        )
    }
}


export default  Reklama;
