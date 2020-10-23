import React from 'react';
import './App.css';
import Header from './Components/header/header.js'
import Recommend from './Components/recommend/recommend';
import Mostread from './Components/mostread/mostread';
import Attention from './Components/attention/attention';
import Footer from './Components/footer/footer'
import Reklama from './Components/Reklama/Reklama'
import Bestcompany from './Components/Best Companies/bestcompany';
import Miniheader from './Components/Miniheader/miniheader'
import Posttab from './Components/PostTab/Posttab'
import News from './Components/News/news'
function App() {
  return (
    <div>
    <Header/>
    <Miniheader/>
    <Posttab/>
    {/* <Mostread/> */}
    {/* <Footer/> */}
    {/* <Reklama/> */}
    {/* <Bestcompany/> */}
    {/* <Recommend/> */}
    {/* <Attention/> */}
    </div> 

  );
}

export default App;
