import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-vh-100">
			<header>
      	<Navbar />
			</header>
      <main className='bg-black text-white'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout