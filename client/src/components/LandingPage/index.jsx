import {useState, useEffect } from 'react'

import { Circles } from 'react-loader-spinner';

import DoctorItem from '../DoctorItem'

import './index.css'

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const LandingPage=()=>{
    const [searchInput, setSearchInput] = useState('')
    const [apiResponse, setApiResponse] = useState({
        status: apiStatusConstants.initial,
        data: null,
        errorMsg: null,
    })

    useEffect(() => {
    const getDoctorsData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });

      const url = "https://jsonkeeper.com/b/FFFKR";

      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          data: responseData,
        }));
      } else {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: responseData.error_msg,
        }));
      }
    };

    getDoctorsData();
  }, []);

    const onChangeSearchInput = event => setSearchInput(event.target.value)
    
    const renderSuccessView = () => {
    const { data } = apiResponse;
    const formattedDoctorData = data.map((eachDoctor) => ({
        id: eachDoctor.id,
        name:eachDoctor.name,
        specialization:eachDoctor.specialization,
        profileUrl:eachDoctor.profile_url,
        availability:eachDoctor.availability
    }));
    const filteredDoctors = formattedDoctorData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchInput.toLowerCase())
  );
    return(
            <>
            <ul className="doctors-list-container">
                {filteredDoctors.map((eachDoctor)=>(
                    <DoctorItem 
                    key={eachDoctor.id}
                    doctorDetails={eachDoctor}
                    />
                ))}

            </ul>
            </>      
        )
  };

    const renderFailureView = () => {
        const { errorMsg } = apiResponse;
        return (
            <p className="error-message">{errorMsg}</p>
        )
    };

    const renderLoadingView = () => (
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
    const renderDoctorsData=()=>{
        const { status } = apiResponse;
        switch (status) {
        case apiStatusConstants.inProgress:
            return renderLoadingView();
        case apiStatusConstants.success:
            return renderSuccessView();
        case apiStatusConstants.failure:
            return renderFailureView();
        default:
            return null;
        }
    }
    return(
        <div className="landing-page-container">
            <div className="search-input-container">
                <input
                type='search'
                className='search-input'
                placeholder="Enter Doctor Name"
                value={searchInput}
                onChange={onChangeSearchInput}
                 />
            </div>
            {renderDoctorsData()}
        </div>

    )
}

export default LandingPage