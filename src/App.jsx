import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Offers from './Offers'
import Pay from './Pay'
import Login from './Login'
import Register from './Register'
import Branches from './Branches'
import Juja from './Juja'

function App() {
  
  return (
    <>
      <HashRouter>
        <div className='my-main-div'>
          <div className='header-div'>
            <p className='title-code'> 10 years of service </p>
            <h1
                className='title-code'> Rahisi<strong className='strong-a'>Shop </strong> </h1>
            <p className='title-code'> Shop with us today </p>
          </div>
          <nav>
            <Link to = "/" className='my-Link'> Home </Link>
            <Link to = "/Offers" className='my-Link'> See Offers </Link>
            <Link to = "/Branches" className='my-Link'> See Branches </Link>
            <Link to = "/Pay" className='my-Link'> Procced to Pay </Link>
          </nav>
        </div>

        <Routes>
          <Route path='/' element = {<Shop/>}/>
          <Route path='/Offers' element = {<Offers/>}/>
          <Route path='/Pay' element = {<Pay/>}/>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
          <Route path='/Branches' element = {<Branches/>}/>
          <Route path='/Juja' element = {<Juja/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
