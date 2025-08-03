import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from './components/LandingPage'
import DoctorProfilePage from './components/DoctorProfilePage'
import BookAppointment from './components/BookAppointment'

import './App.css'

function App() {
  

  return (
    <div className="app-container">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/doctor-profile/:id" component={DoctorProfilePage} />
        <Route path="/book-appointment" component={BookAppointment} />
      </Switch>
    </BrowserRouter>

    </div>
  )
}

export default App
