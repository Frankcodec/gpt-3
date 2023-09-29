import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  const img = "../image/GPT-3.png";
  return (
    <div className='containerb'>
      <div className='container'>
        <div className='containera'>
          <h1 className='foot'>Do You Want To Step Into The Future Before Others?</h1>
          <div className='foot-btn'>
            <button className='bto' id='bto' style={{borderColor: '#fff', borderRadius: '0', padding: '10px 20px', border: '1px solid grey', marginTop: '30px', marginBottom: '40px'}}>Request Early Access</button>
          </div>
        </div>
        <div className='foot-grid-div'>
          <div className='foot-grida'>
            <img src={process.env.PUBLIC_URL+img} alt='userpic' className='' />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='foot-gridb'>
            <ul>
              <li>Links</li>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
            <ul>
              <li>Get In Touch</li>
              <li>Crechterwoord K12<br/> 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <p style={{textAlign: 'center', paddingBottom: '30px', fontSize: '13px'}}>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer