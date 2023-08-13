import React, { useEffect, useState } from 'react'
import axios from "axios"
import jamo from './img/Rectangle 23318.png'


function Box() {




  return (
    <>
    <p>ss</p>
<div className="boxss">
      <div className="boxs">
        <h2>Biz haqimizda</h2>
        <p>Abdumalikovich academy — bu zamonaviy kasblar o‘qitiladigan onlayn akademiya. Qayerda  bo‘lishingizdan qat’i nazar: uydami yo  mehmonda yo safarda — o‘zingizga qulay tarzda va vaqtda bilim  olishingiz mumkin, internet va noutbuk bo‘lsa bas.</p>
      </div>

      <div className="box"><img src={jamo}></img></div>
    </div>    



    </>
  )
}

export default Box;