import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.css'; 

const AppointmentScheduler = (props) => {
    const {weekDays}=props;
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const history = useHistory();

  const handleBooking = () => {
    if (selectedSlot) {
      history.push('/book-appointment'); 
    }
  };

    return (
        <div>
            <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
                {weekDays.map((day, i) => (
                <div
                    key={i}
                    onClick={() => {
                    setSelectedDayIndex(i);
                    setSelectedSlot(null);
                    }}
                    className="text-center day-box"          
                >
                    <div
                        className={`day-circle mb-1 ${
                            selectedDayIndex === i ? 'bg-primary text-white' : 'bg-light text-dark'
                        }`}
                    >
                        {day.day}
                    </div>
                    <div className="text-muted">{day.date}</div>
                </div>
                ))}
            </div>

            <div className="d-flex flex-wrap gap-2 justify-content-center">
                {weekDays[selectedDayIndex].slots.map((slot, i) => (
                <button
                    key={i}
                    onClick={() => setSelectedSlot(slot)}
                    className={`btn rounded-pill border ${
                    selectedSlot === slot ? 'btn-primary text-white' : 'btn-outline-dark'
                    }`}
                >
                    {slot}
                </button>
                ))}
            </div>

            <div className="text-center">
                <button
                disabled={!selectedSlot}
                onClick={handleBooking}
                className={`mt-4 px-4 py-2 rounded-pill btn ${
                    selectedSlot ? 'btn-primary text-white' : 'btn-secondary disabled'
                }`}
                >
                Book an appointment
                </button>
            </div>
        </div>
  );
};

export default AppointmentScheduler;
