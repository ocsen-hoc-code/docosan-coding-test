import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, doctors } from '../../reducers/Doctor/doctorReducer';
import Doctor from '../doctor/Doctor';

const Doctors = () => {
    const doctorsList = useSelector(doctors);
    const dispatch = useDispatch();

    return (
        <div>
            {doctorsList.map(doctor => {
                return <Doctor data={doctor} />
            })}
        </div>
    )
}

export default Doctors;