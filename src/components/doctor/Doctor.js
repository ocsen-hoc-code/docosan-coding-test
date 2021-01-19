import React from 'react';

const Doctor = (data) => {
    const doctor = data.data;
    const rating = Math.round(doctor.rating || 0);
    return (
        <div>
            <img src={doctor.avatar} />
            <br />
            <span>{doctor.display_name}</span>
            <br />
            <span>{doctor.clinic_name}</span>
            <br />
            <span>{doctor.clinic_address}</span>
            <br />
            <span class={rating >= 1 ? 'fa fa-star checked' : 'fa fa-star'}></span>
            <span class={rating >= 2 ? 'fa fa-star checked' : 'fa fa-star'}></span>
            <span class={rating >= 3 ? 'fa fa-star checked' : 'fa fa-star'}></span>
            <span class={rating >= 4 ? 'fa fa-star checked' : 'fa fa-star'}></span>
            <span class={rating >= 5 ? 'fa fa-star checked' : 'fa fa-star'}></span>
            <br />
            <span>{doctor.distance}</span>
            <br />
            <span>{ Array.isArray(doctor.specialty) && doctor.specialty.length > 0 ? doctor.specialty[0].name : ''}</span>
        </div>
    )
}

export default Doctor;