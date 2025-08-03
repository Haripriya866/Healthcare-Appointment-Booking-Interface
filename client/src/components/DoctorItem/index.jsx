import {Link} from 'react-router-dom'

import './index.css'

const DoctorItem=(props)=>{
    const {doctorDetails}=props
    const {id,name,profileUrl,specialization,availability}=doctorDetails

    const getAvailabilityClassName=(status)=>{
        switch(status){
            case "Available Today":
                return "text-success";
            case "Fully Booked":
                return "text-danger";
            case "On Leave":
                return "text-warning";
            default:
                return "text-secondary";
        }
    }

    return(
        <>
        <Link to={`/doctor-profile/${id}`} className='link'>
            <li className='list-item'>
                <div className='doctor-image-container'>
                    <img
                    src={profileUrl}
                    alt={name}
                    className='doctor-item-profile'
                    />

                </div>
                <div className='doctor-item-text-content'>
                    <p className={`fw-normal fs-6 ${getAvailabilityClassName(availability)}`}><span className='circle'></span>{availability}</p>   
                    <p className='doctor-item-name'>{name}</p>
                    <p className='doctor-item-specialization'>{specialization}</p>
                </div>

            </li>
        </Link>
        
        </>
    )
}
export default DoctorItem