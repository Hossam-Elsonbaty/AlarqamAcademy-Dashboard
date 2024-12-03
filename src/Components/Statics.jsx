import React from 'react'
import { BsClipboardData } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
const style = {
  marginRight:"7px"
}
export const Statics = () => {
  return (
    <div className="statics-cont">
      <div className='static'>
        <SlGraph/>
        <div className="col">
          <h1>
            <PiUsersThreeLight style={style}/>
            256
          </h1>
          <span>Monthly Applications submitted</span>
        </div>
      </div>
      <div className='static'>
        <BsGraphUpArrow/>
        <div className="col">
          <h1>
            <MdAttachMoney/>
            256
          </h1>
          <span>
            Monthly Income
          </span>
        </div>
      </div>
      <div className='static'>
        <MdMarkEmailUnread/>
        <div className="col">
          <h1>310</h1>
          <span>Monthly Incoming Emails</span>
        </div>
      </div>
      <div className='static'>
        <BsClipboardData/>
        <div className="col">
          <h1>256</h1>
          <span>All submitted Applications</span>
        </div>
      </div>
    </div>
  )
}
