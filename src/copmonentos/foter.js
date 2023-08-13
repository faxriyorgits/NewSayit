import React, { useEffect, useState } from 'react'
import axios from "axios"
import logo from './img/logo.png'
import insta from './img/Frame.png'
import tg from './img/Frame-1.png'
import inf from './img/YouTube - Negative.png'
import youtube from './img/YouTube - Negative.png'




function Logo() {




  return (
    <>

    <footer>
         <img className="img" src={logo}></img>
         <p>Abdumalikovich academy - bu mijozlarining  og’riqli <br></br> muammolariga zamanaviy yechim taklif qiluvchi <br></br> jamoa !</p>


         <div className="img1">
         <img src={insta}></img>
         <img src={tg}></img>
         <img src={inf}></img>
         <img src={youtube}></img>

         </div>
         <div className="manzil">
            <h4>Aloqa</h4>
            <p>+998 (94) 050 12 02</p>
         </div>
         
         <div className="manzil1">
            <h4>Manzil</h4>
            <p>Toshkent sh. Sergli t. <br></br>
Oqqo’rg’on k.</p>
         </div>
         <hr></hr>
         <p className="p">© All Rights Reserved Abdumalikovich 2023.</p>
    </footer>
   



    </>
  )
}

export default Logo;