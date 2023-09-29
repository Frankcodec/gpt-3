import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const handleClick = () => {
    var show = document.getElementById('navbarText');
    if (show.style.display === 'none') {
        show.style.display = 'flex';
    } else {
        show.style.display = 'none';
    }
}

function Nav() {
    const img = "../image/GPT-3.png";
  return (
    <nav className='navbar navbar-expand-lg' >
        <a className='navbar-brand' href="#" >
            <img src={process.env.PUBLIC_URL+img} alt='userpic' className='' />
        </a>
        <button className="navbar-toggler btn btn-dim " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick} style={{borderColor: '#fff', borderRadius: '0'}}>
            <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <a className='nav-link' style={{color: 'white', cursor: 'pointer', fontSize: '16px', marginRight: '35px'}}>Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' style={{color: 'white', cursor: 'pointer', fontSize: '16px', marginRight: '35px'}}>What is GPT?</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' style={{color: 'white', cursor: 'pointer', fontSize: '16px', marginRight: '35px'}}>Open AI</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' style={{color: 'white', cursor: 'pointer', fontSize: '16px', marginRight: '35px'}}>Case Studies</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' style={{color: 'white', cursor: 'pointer', fontSize: '14px'}}>Library</a>
                </li>
            </ul>
            <div className='form-inline'>
                <button className='btn' style={{color: '#fff'}}>Sign In</button>
                <button className='btn' style={{background: '#FF4820', border: 'none', borderRadius: 0, color: '#fff', padding: '8px 25px', borderRadius: '5px'}}>Sign Up</button>
            </div>
        </div>
        
    </nav>
  )
}



export default Nav