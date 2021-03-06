import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDoctors } from '../../reducers/Doctor/doctorReducer'
import dataList from '../../data/dataList'

const Navbar = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState({ value: 'distance', text: 'Khoảng cách' });
    const [language, setLanguage] = useState({ value: null, text: 'Ngôn ngữ' });

    const doctorFilter = (orderValue, languageValue) => {
        let doctors = [...dataList];
        console.log(doctors);
        if (null !== languageValue) {
            doctors = doctors.filter((doctor) => {
                if (Array.isArray(doctor.language)) {
                    return doctor.language.includes(languageValue)
                }

                return doctor.language == languageValue;
            })
        }

        doctors.sort((a, b) => {
            if ('distance' == orderValue) {
                return a[orderValue] - b[orderValue];
            }
            return b[orderValue] - a[orderValue];
        });

        console.log(doctors);
        dispatch(setDoctors(doctors));
    }

    const updateOrder = (value, text) => {
        setOrder({ value, text });
        doctorFilter(value, language.value);
    }

    const clearLanguage = () => {
        setLanguage({ value: null, text: 'Ngôn ngữ' });
        doctorFilter(order.value, null);
    }

    const updateLanguage = (value, text) => {
        setLanguage({ value, text });
        doctorFilter(order.value, value);
    }

    useEffect(() => {
        doctorFilter("distance", language.value);
    }, []);

    return (
        <div>
            <span class="title">Sắp xếp theo </span>
            <div class="dropdown">
                <button class="title navbar dropdown-toggle" type="button" data-toggle="dropdown">
                    {order.text}
                </button>
                <ul class="dropdown-menu dropdown-item ">
                    <li onClick={() => { updateOrder('distance', 'Khoảng cách') }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={order.value == "distance"} /> Khoảng cách</a>
                    </li>
                    <li onClick={() => { updateOrder('rating', 'Đánh giá') }}>
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
                    <li onClick={() => { updateLanguage('vi', 'Tiếng việt') }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "vi"} /> Tiếng việt</a>
                    </li>
                    <li onClick={() => { updateLanguage('en', 'English') }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "en"} /> English</a>
                    </li>
                    <li onClick={() => { updateLanguage('fr', 'Francaise') }}>
                        <a href="#"><input class="dropdown-radio-button" type="radio" checked={language.value == "fr"} /> Francaise</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;