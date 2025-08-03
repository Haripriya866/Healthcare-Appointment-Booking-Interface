import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Circles } from 'react-loader-spinner';

import './index.css'

import AppointmentScheduler from '../AppointmentScheduler';

const profileDetailsApiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "IN_PROGRESS",
};

const DoctorProfilePage=()=>{
    const { id } = useParams();
    const [apiResponse, setApiResponse] = useState({
        status: profileDetailsApiStatusConstants.initial,
        data: null,
    })

    const convertData=(object)=>{
        const formattedData={
            id:object.id,
            profileUrl:object.profile_url,
            name:object.name,
            specialization:object.specialization,
            rating:object.rating,
            review:object.review,
            experience:object.experience,
            about:object.about,
            degree:object.degree,
            appointmentFee:object.appointment_fee,
            availabilitySchedule:object.availability_schedule
            

        }
        return formattedData
    }

    useEffect(() => {
        const getDoctorsProfileData = async () => {
          setApiResponse({
            status: profileDetailsApiStatusConstants.inProgress,
            data: null,
        });
        const apiUrl = "https://jsonkeeper.com/b/FFFKR";
    
          const response = await fetch(apiUrl);
          const responseData = await response.json();
          if (response.ok===true) {
            const doctorData = responseData.find(
            (eachDoctor) => eachDoctor.id.toString() === id
          );
          if(doctorData){
            setApiResponse({
               status: profileDetailsApiStatusConstants.success,
              data: convertData(doctorData), 
            })
          }
          } 
         
        };
    
        getDoctorsProfileData();
      }, [id]);


     const renderProfileSuccessView=()=>{
        const { data } = apiResponse;
        return(
            <>
            <div className='profile-container'>
                <div className='details-container'>
                    <div className='profile-details-image-container'>
                        <img 
                        className='profile-details-image'
                        src={data.profileUrl}
                        alt={data.name} 
                        />

                    </div>
                    <div className='profile-details-text-content'>
                        <p className='name'>{data.name}</p>
                        <p className='degree-specialization'>{`${data.degree} - ${data.specialization}`}<span className='experience'>{data.experience} years</span></p>
                        <p className='about'>About
                            <img className='about-icon'
                            alt='about-icon'
                            src='https://res.cloudinary.com/dj6b0oaa1/image/upload/v1754231363/Page-1_eezsga.png' />
                        </p>
                        <p className='about-description'>{data.about}</p>
                        <p className='appointment-fee'>Appointment fee: <span className='rupees'>{data.appointmentFee}</span></p>

                    </div>

                </div>
                <div className='bottom-container'>
                    <h2 className='booking-slots-heading'>Booking slots</h2>
                    <AppointmentScheduler weekDays={data.availabilitySchedule} />
                </div>
            </div>     
            </>
        )
     } 
    const renderProfileLoadingView = () => (
        <div className="loading-view-container">
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="loading"
                visible={true}
            />
        </div>
    );

    const onRenderProfileDetails=()=>{
        const { status } = apiResponse;

        switch (status) {
            case profileDetailsApiStatusConstants.inProgress:
                return renderProfileLoadingView();
            case profileDetailsApiStatusConstants.success:
                return renderProfileSuccessView();
            default:
                return null;
        }
    }
    return(
        <>
        <div className='profile-page-container'>
            {onRenderProfileDetails()}
        </div>
        </>
    )
}
export default DoctorProfilePage