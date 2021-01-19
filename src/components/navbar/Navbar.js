import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, doctors } from '../../reducers/Doctor/doctorReducer'

const Navbar = () => {
    const doctorsList = useSelector(doctors);
    const dispatch = useDispatch();
    const [order, setOrder] = useState({ value: 'distance', text: 'Khoảng cách' });
    const [language, setLanguage] = useState({ value: null, text: 'Ngôn ngữ' });

    const clearLanguage = () => {
        setLanguage({ value: null, text: 'Ngôn ngữ' });
    }

    return (
        <div>
            <span class="title">Sắp xếp theo </span>
            <div class="dropdown">
                <button class="title navbar dropdown-toggle" type="button" data-toggle="dropdown">
                    {order.text}
                </button>
                <ul class="dropdown-menu dropdown-item ">
                    <li onClick={() => { setOrder({ value: 'distance', text: 'Khoảng cách' }) }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={order.value == "distance"} /> Khoảng cách</a>
                    </li>
                    <li onClick={() => { setOrder({ value: 'rating', text: 'Đánh giá' }) }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={order.value == "rating"} /> Đánh giá</a>
                    </li>
                </ul>
            </div>
            <span class="title">Lọc kết quả </span>
            <div class="dropdown">
                <button class="title navbar dropdown-toggle" type="button" data-toggle="dropdown">
                    {language.text}
                    <span class="dropdown-clear" onClick={() => { clearLanguage() }} style={{ display: null == language.value ? "none" : "block" }}>X</span>
                </button>
                <ul class="dropdown-menu dropdown-item ">
                    <li onClick={() => { setLanguage({ value: 'vi', text: 'Tiếng việt' }) }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "vi"} /> Tiếng việt</a>
                    </li>
                    <li onClick={() => { setLanguage({ value: 'en', text: 'English' }) }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "en"} /> English</a>
                    </li>
                    <li onClick={() => { setLanguage({ value: 'fr', text: 'Francaise' }) }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "fr"} /> Francaise</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;