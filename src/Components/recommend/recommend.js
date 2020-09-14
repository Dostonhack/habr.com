import React, { Component } from 'react'
import './recommend.css'
import { FaEye,FaCommentAlt } from 'react-icons/fa';
import { 
    BrowserRouter as
    Router,
    Link } from 'react-router-dom'


export default class recommend extends Component {
    render() {
        return (
            <div  className='reklamapage'>
            <h3 className='r-h3'>РЕКОМЕНДУЕМ</h3>
            {/* Line top */}
            <Router>
            <ul className='r-ul'>

                <li>
                <hr className='hrline'/>

                    <Link className='recom-p1'>Определяем пульс по вебкамере в 50 строчек кода</Link> 
                    <div className='recom-div'>
                        <div className='recom-divone'>
                            <FaEye/>
                            <span>20,9k</span>
                        </div>
                        <Link className='recom-li-link'>
                            <FaCommentAlt/>
                            <span>69k</span>
                        </Link>
                    
                    </div>
                </li>

                <li>
            <hr className='hrline'/>

                    <Link className='recom-p1'>Google продвигает новый стандарт WebBundles — потенциально опасную для веба технологию «упаковки» веб-сайтов</Link> 
                    <div className='recom-div'>
                        <div className='recom-divone'>
                            <FaEye/>
                            <span>34,6k</span>
                        </div>
                        <Link className='recom-li-link'>
                            <FaCommentAlt/>
                            <span>84k</span>
                        </Link>
                    
                    </div>
                </li>

                <li>
                    <hr className='hrline'/>

                    <Link className='recom-p1'>Что происходит в современном IT рекрутинге и HRы вредители</Link> 
                    <div className='recom-div'>
                        <div className='recom-divone'>
                            <FaEye/>
                            <span>35,5k</span>
                        </div>
                        <Link className='recom-li-link'>
                            <FaCommentAlt/>
                            <span>79k</span>
                        </Link>
                    
                    </div>
                </li>


                <li>
                    <hr className='hrline'/>

                    <Link className='recom-p1'>Shodan — темный близнец Google</Link> 
                    <div className='recom-div'>
                        <div className='recom-divone'>
                            <FaEye/>
                            <span>35,7k</span>
                        </div>
                        <Link className='recom-li-link'>
                            <FaCommentAlt/>
                            <span>27k</span>
                        </Link>
                    
                    </div>
                </li>

                <li>
                    <hr className='hrline'/>

                    <Link className='recom-p1'>Картинка, которая одновременно является кодом на Javascript</Link> 
                    <div className='recom-div'>
                        <div className='recom-divone'>
                            <FaEye/>
                            <span>22,2k</span>
                        </div>
                        <Link className='recom-li-link'>
                            <FaCommentAlt/>
                            <span>22k</span>
                        </Link>
                    
                    </div>
                </li>






                {/* Line bottom */}
                <hr className='hrline'/>
                <Link className='recom-link1'>Новые форматы онлайн-конференций и возрождение офлайна</Link>
                <p className='recom-mega'> Мегапост</p>

            </ul>
            </Router>
        </div>
        )
    }
}
