import React from 'react';
import Doctors from '../doctors/Doctors';
import Navbar from '../navbar/Navbar';

const Main = () => {
  return (
      <div className="App">
        <h5 class="head">Danh sách các bác sĩ</h5>
        <Navbar/>
        <Doctors/>
    </div>
  );
}

export default Main;