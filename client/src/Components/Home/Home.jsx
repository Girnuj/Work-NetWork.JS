import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <>
         <div>Home</div>
         <Link to='/Rubros'>
            <button>Rubros</button>
         </Link>
      </>
    
  )
}

export default Home;
