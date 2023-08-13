import React, { useEffect, useState } from 'react'
import axios from "axios"
import img1 from './img/logo.png';
import vidyo from './img/_import_60911732cc8a30.02423404_FPpreview.mp4'
import uz from './img/Group 48096331.png'
import peofil from './img/profile 1.png'
function Maket() {




  return (
    <s>


    <video autoPlay loop muted src={vidyo}></video>
    <navbar>
    <img src={img1}></img>
    <ul>
      <li><a >Asosiy sahifa</a></li>
      <li><a >Biz haqimizda</a></li>
      <li><a >Kurslar</a></li>
      <li><a >Bog’lanish</a></li>

    </ul>
    <div className="bs">
      <img src={uz}></img>
      <p>Uz</p>
    </div>
    <div className="b">
      <img src={peofil}></img>
      <p>RUSTAM</p>
    </div>


    </navbar>
    <div className="vv"></div>

    <main>
      <h1>Kelajak shu yerdan 
boshlanadi.</h1>
<p>
Abdumalikovich academiyasi bilan. O‘zingizga qulay <br></br> vaqtda, joyda va uslubda zamonaviy kasblarni o‘rganing.

</p>
<button type="button" class="btn ">Ro’yhatdan o’tish</button>
    </main>



    
    



    </s>
  )
}

export default Maket;