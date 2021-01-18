import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, doctors } from '../../reducers/Doctor/doctorReducer'

const Doctor = () => {
    const doctorsList = useSelector(doctors);
    const dispatch = useDispatch();
    console.log(doctorsList);
    return (
        <h1>
            Doctors
        </h1>
    )
}

export default Doctor;