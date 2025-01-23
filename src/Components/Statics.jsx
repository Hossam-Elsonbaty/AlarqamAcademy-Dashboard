import React, {useContext} from 'react'
import { BsClipboardData } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import {AppContext} from '../Context/getData';
export const Statics = () => {
  const { statics } = useContext(AppContext)
  console.log(statics);
  return (
    <div className="statics-cont">
      <div className='static'>
        <BsGraphUpArrow/>
        <div className="col">
          <h1>
            <MdAttachMoney/>
            {statics && statics.donationsAmount}
          </h1>
          <span>
            Total Donation
          </span>
        </div>
      </div>
      <div className='static'>
        <BsClipboardData/>
        <div className="col">
          <h1>{statics && statics.totalApplications}</h1>
          <span>All submitted Applications</span>
        </div>
      </div>
      <div className='static'>
        <MdMarkEmailUnread/>
        <div className="col">
          <h1>{statics && statics.totalEmails}</h1>
          <span>Total Incoming Emails</span>
        </div>
      </div>
    </div>
  )
}
