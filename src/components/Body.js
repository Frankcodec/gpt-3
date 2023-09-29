import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./Nav";
import Card from "./Card";


function Body() {
    const img = "../image/";

  return (
    <div className='main'>
        <Nav />
        <div className='divider'>
            <div className='writeUp'>
                <h1 className='text-gradient'>Let’s Build Something<br/>amazing with GPT-3<br/>OpenAI</h1>
                <div className='para'>
                    <p className='paraText'>Yet bed any for travelling assistance indulgence unpleasing.<br/> Not thoughts all exercise blessing. Indulgence way<br/> everything joy alteration boisterous the attachment. Party<br/> we years to order allow asked of</p>
                </div>

                <div>
                    <form className='news' onSubmit={(e) => e.preventDefault()}>
                        <input id='form-input' className='news-input' placeholder='Your Email Address' style={{color: 'black', background: '#052D56', border: 'none'}} />
                        <button className='btn btn-primary' style={{background: '#FF4820', border: 'none', borderRadius: 0, padding: '13px 16px'}}>Get Started</button>
                    </form>
                </div>
                <div className='flutter'>
                    <div>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 31.png'} alt='userpic' className='' />
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 32.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 33.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 34.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 35.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 36.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/>
                        <img src={process.env.PUBLIC_URL+img+'Ellipse 37.png'} alt='userpic' className='' style={{marginLeft: '-10px'}}/> 
                    </div>
                    <div>
                        <p className='people-text' style={{marginTop: '10px'}}>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
            </div>
            <div className='image'>
                <img src={process.env.PUBLIC_URL+img+'illustration.png'} alt='userpic' className='illustration' />
            </div>
            
        </div>
        <div className='companies'>
            <img src={process.env.PUBLIC_URL+img+'google.png'} alt='userpic' className='google' />
            <img src={process.env.PUBLIC_URL+img+'slack.png'} alt='userpic' className='slack' />
            <img src={process.env.PUBLIC_URL+img+'dropbox.png'} alt='userpic' className='dropbox' />
            <img src={process.env.PUBLIC_URL+img+'google.png'} alt='userpic' className='google' />
            <img src={process.env.PUBLIC_URL+img+'shopify.png'} alt='userpic' className='shopify' />
        </div>
        <Card />
        <div className='section'>
            <div className='flex-a'>
                <h2>The Future is Now and<br/> You Just Need To Realize<br /> It. Step into Future Today<br/> & Make it Happen.</h2>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='flex-b'>
                <div className='what-is sep'>
                    <h3 className='up-border improve'>Improving end<br/> distrusts instantly</h3>
                    <p>From they fine john he give of rich he. They age and<br/> draw mrs like. Improving end distrusts may<br/> instantly was household applauded.</p>
                </div>
                <div className='what-is sep'>
                    <h3 className='up-border improve'>Improving end<br/> distrusts instantly</h3>
                    <p>From they fine john he give of rich he. They age and<br/> draw mrs like. Improving end distrusts may<br/> instantly was household applauded.</p>
                </div>
                <div className='what-is sep'>
                    <h3 className='up-border improve'>Improving end<br/> distrusts instantly</h3>
                    <p>From they fine john he give of rich he. They age and<br/> draw mrs like. Improving end distrusts may<br/> instantly was household applauded.</p>
                </div>
                <div className='what-is sep'>
                    <h3 className='up-border improve'>Improving end<br/> distrusts instantly</h3>
                    <p>From they fine john he give of rich he. They age and<br/> draw mrs like. Improving end distrusts may<br/> instantly was household applauded.</p>
                </div>
            </div>
        </div>
        <div className='sectionb'>
            <div className='flex-c semi-circle'>
                <img src={process.env.PUBLIC_URL+img+'image 5.png'} alt='userpic' className='image5' />
            </div>
            <div className='flex-d'>
                <p>Request Early Access to Get Started</p>
                <h2>The Possibilities Are<br /> Beyond Your Imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not<br/> thoughts all exercise blessing. Indulgence way everything joy<br/> alteration boisterous the attachment. Party we years to order<br/> allow asked of.</p>
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
        <div className='card-gradient'>
            <div className='flex-e'>
                <p>Request Early Access to Get Started</p>
                <h4>Register today & start exploring the endless possiblities.</h4>
            </div>
            <div className='flex-f'>
                <button className='btn' style={{background: '#000', borderRadius: '25px', color: '#fff', fontSize: '12px', padding: '13px 25px'}}>Get Started</button>
            </div>
        </div>
        <div className='sectionc'>
            <h2>A lot is happening,<br/> We are blogging about it.</h2>
            <div className='sectiond'>
                <div className='flex-g'>
                    <img src={process.env.PUBLIC_URL+img+'Rectangle 22.png'} alt='userpic' className='rectangle1' />
                    <div className='flex-j'>
                        <div>
                            <p>Sep 26, 2021</p>
                            <h4>GPT-3 and Open  AI is the<br /> future. Let us exlore how it is?</h4>
                        </div>
                        <p>Read Full Article</p>
                    </div>
                </div>
                <div className='flex-h'>
                    <div className='flex-k'>
                        <img src={process.env.PUBLIC_URL+img+'Rectangle 22 (1).png'} alt='userpic' className='rectangle2' />
                        <div className='flex-l'>
                            <div>
                                <p>Sep 26, 2021</p>
                                <h4>GPT-3 and Open  AI is the<br /> future. Let us exlore how it is?</h4>
                            </div>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                    <div className='flex-k'>
                        <img src={process.env.PUBLIC_URL+img+'Rectangle 22 (4).png'} alt='userpic' className='rectangle3' />
                        <div className='flex-l'>
                            <div>
                                <p>Sep 26, 2021</p>
                                <h4>GPT-3 and Open  AI is the<br /> future. Let us exlore how it is?</h4>
                            </div>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                </div>
                <div className='flex-h'>
                    <div className='flex-k'>
                        <img src={process.env.PUBLIC_URL+img+'Rectangle 22 (2).png'} alt='userpic' className='rectangle2' />
                        <div className='flex-l'>
                            <div>
                                <p>Sep 26, 2021</p>
                                <h4>GPT-3 and Open  AI is the<br /> future. Let us exlore how it is?</h4>
                            </div>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                    <div className='flex-k'>
                        <img src={process.env.PUBLIC_URL+img+'Rectangle 22 (5).png'} alt='userpic' className='rectangle3' />
                        <div className='flex-l'>
                            <div>
                                <p>Sep 26, 2021</p>
                                <h4>GPT-3 and Open  AI is the<br /> future. Let us exlore how it is?</h4>
                            </div>
                            <p>Read Full Article</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body;