import { useState } from 'react';
import hamburger_open from '../../public/assets/menu.svg';
import hamburger_close from '../../public/assets/close.svg'
import {navLinks } from '../constants/index';

const NavItem=()=>{
  return(
  <ul className='nav-ul'>
     {navLinks.map(({id,href,name})=>(
      <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>{name} </a>
      </li>
     ))}

  </ul>
  )
}
function Navbar() {
  const[isOpen, setisOpen] = useState(false);
  const toggle=()=>{
    !isOpen?setisOpen(true):setisOpen(false);
  }
  return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
    <div className="max-w-7xl mx-auto">
     <div className="flex justify-between items-center py-5 mx-auto c-space">
        <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Harry</a>
        <button onClick={toggle} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label="Toggle menu">
                <img src={isOpen?hamburger_close:hamburger_open} alt='toggle' className='w-6 h-6'/>
        </button>
        <nav className='sm:flex hidden'><NavItem/></nav>
     </div>
    </div>
    <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
      <nav className='p-5'>
        <NavItem/>
      </nav>

    </div>
   </header>
  )
}

export default Navbar
