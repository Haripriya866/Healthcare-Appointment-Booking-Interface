import { useState } from 'react';
import './index.css'

const BookAppointment=()=>{
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setFormData((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleEmailChange = (event) => {
    setFormData((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleDateChange = (event) => {
    setFormData((prev) => ({ ...prev, date: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="confirmation-message text-center confirmation-container mt-5">
        <h4 className='confirmation-heading'>Appointment Confirmed!</h4>
        <p className='confirmation-para'>Thank you, {formData.name}. We’ve scheduled your appointment for:</p>
        <strong>{formData.datetime}</strong>
      </div>
    );
  }
    return(
        <>
            <div className="appointment-container mt-5">
            <h2 className="mb-4 book-appointment-heading">Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group mb-3">
                    <label className='label'>Patient Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div className="form-group mb-3">
                    <label className='label'>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div className="form-group mb-4">
                    <label className='label'>Date</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={formData.date}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-100">
                Confirm Appointment
                </button>
            </form>
            </div>
        </>
    )
}
export default BookAppointment