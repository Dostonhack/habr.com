import React, { Component } from 'react'
import './bestcompany.css'
import { 
    BrowserRouter as
    Router,
    Link } from 'react-router-dom'

import log1 from './img/ru.png'
import log2 from './img/vdsina.png'
import log3 from './img/s.jpg'
import log4 from './img/mailru.png'
import log5 from './img/cpilot.jpg'
import log6 from './img/Postuf.png'
import log7 from './img/gklanit.png'
import log8 from './img/domklik.jpg'
import log9 from './img/fland.png'
import log10 from './img/yandeks.png'




class Reklama extends Component {
    render() {
        return (
            <div  className='reklamapage'>
                <h3 style={{color:'#505c66',fontWeight:'700',fontSize:'13px'}}>ЛУЧШИЕ КОМПАНИИ</h3>
                <hr className='hrline'/>
                {/* Line top */}
                <Router>
                <ul className='r-ul'>
                
                {/* Link begin */}

                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log1}/>
                            <Link className='bc-link' >RUVDS.com</Link>
                        </div>
                        <p className='bc-p'>2 503,39</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log2}/>
                            <Link className='bc-link' >VDSina.ru—хостинг серверов</Link>
                        </div>
                        <p className='bc-p'>1 073,33</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log3}/>
                            <Link className='bc-link' >Selectel</Link>
                        </div>
                        <p className='bc-p'>932,39</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log4}/>
                            <Link className='bc-link' >Mail.ru Group</Link>
                        </div>
                        <p className='bc-p'>835,29</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log5}/>
                            <Link className='bc-link' >Cognitive Pilot</Link>
                        </div>
                        <p className='bc-p'>710,14</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log6}/>
                            <Link className='bc-link' >Postuf</Link>
                        </div>
                        <p className='bc-p'>407,67</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log7}/>
                            <Link className='bc-link' >ГК ЛАНИТ</Link>
                        </div>
                        <p className='bc-p'>379,09</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log8}/>
                            <Link className='bc-link' >ДомКлик</Link>
                        </div>
                        <p className='bc-p'>352,20</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log9}/>
                            <Link className='bc-link' >Флант</Link>
                        </div>
                        <p className='bc-p'>367,52</p>
                    </li>
                    <li className='bc-ul'>
                        <div className='bc-dv'>
                            <img className='bc-li' src={log10} alt="description of image"></img>
                            <Link className='bc-link' >Яндекс</Link>
                        </div>
                        <p className='bc-p'>344,31</p>
                    </li>


                {/* Link end */}


                {/* Line bottom */}
                <hr className='hrline'/>
                <Link className='bc-ul-link'>Все компании</Link>
                </ul>
                </Router>
            </div>
        )
    }
}


export default  Reklama;
