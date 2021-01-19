import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, doctors } from '../../reducers/Doctor/doctorReducer'

const Navbar = () => {
    const doctorsList = useSelector(doctors);
    const dispatch = useDispatch();
    const [order, setOrder] = useState({ value: 'distance', text: 'Khoảng cách' });
    const [language, setLanguage] = useState({ value: null, text: 'Ngôn ngữ' });

    return (
        <div>
            <span class="title">Sắp xếp theo </span>
            <div class="dropdown">
                <button class="title navbar dropdown-toggle" type="button" data-toggle="dropdown">
                    {order.text}
                </button>
                <ul class="dropdown-menu dropdown-item ">
                    <li><a href="#">Khoảng cách</a></li>
                    <li><a href="#">Đánh giá</a></li>
                </ul>
            </div>
            <span class="title">Lọc kết quả </span>
            <div class="dropdown">
                <button class="title navbar dropdown-toggle" type="button" data-toggle="dropdown">
                    {language.text} <span class="dropdown-clear" style={{ display: null == language.value ? "none" : "block" }}>X</span>
                </button>
                <ul class="dropdown-menu dropdown-item ">
                    <li><a href="#"><input class="dropdown-radio-button" type="radio" checked="true"/> Tiếng việt</a></li>
                    <li><a href="#"><input class="dropdown-radio-button" type="radio" /> English</a></li>
                    <li><a href="#"><input class="dropdown-radio-button" type="radio" /> Francaise</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;