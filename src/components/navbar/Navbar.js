import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, doctors } from '../../reducers/Doctor/doctorReducer'

const Navbar = () => {
    const doctorsList = useSelector(doctors);
    const dispatch = useDispatch();

    return (
        <div>
            <span class="title">Sắp xếp theo </span>
            <span class="title navbar">Khoảng cách</span>
            <span class="title">Lọc kết quả </span>
            <span class="title navbar">Ngôn ngữ</span>
        </div>
    )
}

export default Navbar;