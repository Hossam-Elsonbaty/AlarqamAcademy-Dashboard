import React, {useContext} from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Statics } from '../Components/Statics';
import { AddUsers } from '../Components/AddUsers';
import {NestedTable} from '../Components/NestedTable';
import { AppContext } from '../Context/getData';
export const Home = () => {
  const {contextHolder} = useContext(AppContext)
  return (
    <main className='home'>
      {contextHolder}
      <AddUsers/>
      <Sidebar/>
      <section className='right-section'>
        <Statics/>
        <NestedTable/>
      </section>
    </main>
  )
}
