# Title
Healthcare Appointment Booking Interface

## Objective
To build a user-friendly and responsive web application for booking healthcare appointments, enabling users to search by doctor name, view doctor profiles, check their availability, and schedule appointments through an intuitive interface.


## Demo

Link: https://healthcare-appointment-booking-inte-sigma.vercel.app

## Tech Stack
React, React Hooks, Bootstrap

## Setup Instructions
1) Create Project Directory: mkdir Healthcare Appointment Booking Interface
2) Navigate to that folder: cd Healthcare Appointment Booking Interface
3) Inside Healthcare Appointment Booking Interface, create another directory: mkdir client
4) Navigate to that folder: cd client
5) Run this command: npm create vite@latest . -- --template react
6) Install the necessary dependencies: npm install react-router-dom@5 bootstrap@5.3.3
7) Run the dev server: npm run dev

## Nice to have feature
## Feature: Find Doctor by Symptoms
This feature enables users to search for doctors based on their health symptoms, without needing to know medical terms or specializations.

# How It Works
* Users can enter symptoms like “headache”, “skin rash”, or “chest pain” into the search bar.

* The system maps these symptoms to the appropriate doctor specialization (e.g., Psychiatrist, Dermatologist, Cardiologist).

* Based on this mapping, a list of relevant doctors is shown to the user for quick appointment booking.

# Purpose
* Makes the app more accessible to non-medical users.

* Reduces confusion in selecting the right doctor.

* Helps users receive timely care by directing them to appropriate specialists.

## push the code to Git using the following commands
* git init
* git remote add origin https://github.com/Haripriya866/Healthcare-Appointment-Booking-Interface.git
* git add -A
* git commit -m "Healthcare Appointment Booking Interface"
* git branch -M main
* git push -u origin main

## Deployment
Choose a Platform: Select a deployment platform like Vercel

## Pages
LandingPage, DoctorProfilePage, BookAppointment 
