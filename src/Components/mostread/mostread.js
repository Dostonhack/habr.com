import React, { Component } from 'react'
import './mostread.css'

import { 
    BrowserRouter as
    Router,
    Link } from 'react-router-dom'
import { FaEye,FaCommentAlt ,FaArrowUp,FaBookmark} from 'react-icons/fa';




class mostread extends Component {
    render() {
        return (
            <div  className='mostread'>
            <h3 className='most-h3'>САМОЕ ЧИТАЕМОЕ</h3>
            {/* Line top */}
            <Router>
            <ul className='most-ul'>


                <hr className='most-hrline'/>
                    <div className='most-button-grup'>
                        <Link exact={true} className='most-b-g-l'  activeClassName='is-active'>Сутки</Link>
                        <Link className='most-b-g-l'>Неделя</Link>
                        <Link className='most-b-g-l'>Месяц</Link>

                    </div>

                    <li className='most-ul-li'>
                    <Link className='most-p1'>Эпл испортила мне ноутбук почти сразу после покупки и до сих пор не собирается чинить</Link> 
                    <div className='most-div'>
                        <div className='most-divone'>
                            <div className='most-div-in'>
                            <FaArrowUp/>
                            <span>+37</span>
                            </div>
                            
                            <div className='most-div-in'>
                            <FaEye/>
                            <span>20,9k</span>
                            </div>

                            <div className='most-div-in'>
                            <FaBookmark/>
                            <span>23</span>
                            </div>
                        </div>
                        <Link className='most-li-link'>
                            <FaCommentAlt/>
                            <span>69k</span>
                        </Link>
                    
                    </div>
                </li>

                <li className='most-ul-li'>

                    <Link className='most-p1'>Microsoft еще раз пояснила, почему браузер Edge для Windows 10 нельзя удалить из системы</Link> 
                    <div className='most-div'>
                        <div className='most-divone'>
                            <div className='most-div-in'>
                            <FaArrowUp/>
                            <span>+21</span>
                            </div>
                            
                            <div className='most-div-in'>
                            <FaEye/>
                            <span>57,9k</span>
                            </div>

                            <div className='most-div-in'>
                            <FaBookmark/>
                            <span>10</span>
                            </div>
                        </div>
                        <Link className='most-li-link'>
                            <FaCommentAlt/>
                            <span>156k</span>
                        </Link>
                    
                    </div>
                </li>
                
                


                {/* Line bottom */}
                <hr className='hrline'/>
                <Link className='recom-link1'>Мир ИБ в историях</Link>
                <br/>
                <p className='recom-mega'> Опрос</p>

            </ul>
            </Router>
        </div>

        )
    }
}
export default mostread;
