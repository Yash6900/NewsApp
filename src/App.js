
import './App.css';
import React, { useState } from 'react'
import Navbar from './componnets/Navbar';
import News from './componnets/News';
import { BrowserRouter as Router  , Route , Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =()=> {

  const pageSize=9;
  const [progress, setProgress] = useState(0)

 
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#EEEEEE'
        progress={progress}
       
        />
        
        <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
       
        </Router>
      </div>
    )
  }


export default App;
