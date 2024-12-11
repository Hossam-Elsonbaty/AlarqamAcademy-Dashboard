import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Statics } from '../Components/Statics';
import { AddUsers } from '../Components/AddUsers';
import {NestedTable} from '../Components/NestedTable';
export const Home = () => {
  return (
    <main className='home'>
      <AddUsers/>
      <section className='left-section'><Sidebar/></section>
      <section className='right-section'>
        <Statics/>
        <NestedTable/>
      </section>
    </main>
  )
}
