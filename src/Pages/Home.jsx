import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Statics } from '../Components/Statics';
import { DataTable } from '../Components/DataTable';
export const Home = () => {
  return (
    <main className='home'>
      <section className='left-section'><Sidebar/></section>
      <section className='right-section'>
        <Statics/>
        <DataTable/>
        
      </section>
    </main>
  )
}
