import React, { useEffect, useState } from 'react'
import axios from "axios"
import vidyo from './img/_import_60911732cc8a30.02423404_FPpreview.mp4'
import frontend from './img/Rectangle 23349.png'
import rasim1 from './img/Group 48096293.png'
import rasim2 from './img/Group 48096292.png'
import rasim3 from './img/Rectangle 60.png'
import rasim4 from './img/Rectangle 61.png'
import rasim5 from './img/Rectangle 62.png'
import rasim6 from './img/Rectangle 104.png'



function Main() {




  return (
    <>
   
             <article>
             <video autoPlay loop muted src={vidyo}></video>
             <h2>Kurslarmiz</h2>

             <div className="boxs">
             <div className="box">
                <img src={frontend}></img>
                <div className="qator">
                <h3>Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>
                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>
             <div className="box">
                <img src={frontend}></img>
                <div className="qator">
                <h3 >Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>


                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>             <div className="box dn">
                <img src={frontend}></img>
                <div className="qator">
                <h3 >Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>


                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>
             </div>
             <div className="boxs">
             <div className="box">
                <img src={frontend}></img>
                <div className="qator">
                <h3>Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>

                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>
             <div className="box">
                <img src={frontend}></img>
                <div className="qator">
                <h3>Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>

                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>             <div className="box dn">
                <img src={frontend}></img>
                <div className="qator">
                <h3 >Front-end </h3><p>850 000 sum</p>

                </div>
                <h3 className="h3">Bugalteriya</h3>

                <p>Biz – Abdumalikovich akademiyasimiz! <br></br> Akademiyamizda tajribali IT sohasida <br></br> yuqori marralarni qo‘lga kiriting!</p>
                <hr></hr>
                <div className="img_box">
                <img src={rasim1}></img>
                <img src={rasim2}></img>
                </div>
                
             </div>
             </div>
             <button className="btn">Ko’proq ko’rish</button>



             </article>


             <div className="jamo">
                <h2>
                Bizning jamoa   

                <div className="rasim">
                <img className="rasim3" src={rasim3}></img>
                <img className="rasim4" src={rasim4}></img>
                <img className="rasim3 dn" src={rasim5}></img>
                <img className="rasim6 dn" src={rasim6}></img>


                </div>
                </h2>
             </div>
             <div className="aloqa">
                <h2>Biz bilan bog’lanish</h2>


                <div className="bolim">
                  <h3 className="h3">Biz bilan yuqori marralarga erishing!</h3>
                  <p>Batafsil ma'lumot olish uchun ismingiz va raqamingizni qoldiring!</p>
                  <input placeholder="ism"></input>
                  <input placeholder="+998 (99)"></input>
                  <button className="">Yuborish</button>

                </div>


             </div>


    </>
  )
}

export default Main;