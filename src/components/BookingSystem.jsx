'use client';

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';
import { Berkshire_Swash } from 'next/font/google';
import emailjs from 'emailjs-com';

const berkshire = Berkshire_Swash({
  subsets: ['latin'],
  weight: '400',
});

const BookingSystem = () => {
  // State management
  const [doctorType, setDoctorType] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [firestoreReady, setFirestoreReady] = useState(false);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFirestoreReady(true);
    }
  }, []);

  // Doctors' hours
  const consultationHours = {
    'dr_manish': {
      hospital: {
        0: { // Sunday
          isClosed: true
        },
        1: { // Monday
          start: '10:00',
          end: '18:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        },
        2: { // Tuesday
          start: '10:00',
          end: '17:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        },
        3: { // Wednesday
          start: '10:00',
          end: '17:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        },
        4: { // Thursday
          start: '10:00',
          end: '17:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        },
        5: { // Friday
          start: '10:00',
          end: '17:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        },
        6: { // Saturday
          start: '10:00',
          end: '17:00',
          isClosed: false,
          location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
        }
      },
      evening_clinic: {
        0: { // Sunday
          isClosed: true
        },
        1: { // Monday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        },
        2: { // Tuesday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        },
        3: { // Wednesday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        },
        4: { // Thursday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        },
        5: { // Friday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        },
        6: { // Saturday
          start: '18:00',
          end: '20:00',
          isClosed: false,
          location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
        }
      }
    },
   'dr_gauri': {
    hospital: {
      0: { // Sunday
        isClosed: true
      },
      1: { // Monday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      },
      2: { // Tuesday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      },
      3: { // Wednesday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      },
      4: { // Thursday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      },
      5: { // Friday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      },
      6: { // Saturday
        start: '10:00',
        end: '14:00',
        isClosed: false,
        location: "Paras Urology & Multispeciality Hospital, Haribhau Upadhyay Nagar, C-Block, Pushkar Road, Ajmer"
      }
    },
    evening_clinic: {
      0: { // Sunday
        isClosed: true
      },
      1: { // Monday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      },
      2: { // Tuesday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      },
      3: { // Wednesday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      },
      4: { // Thursday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      },
      5: { // Friday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      },
      6: { // Saturday
        start: '18:00',
        end: '20:00',
        isClosed: false,
        location: "Jeevan Jyoti Hospital, 19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer, Rajasthan"
      }
    }
  }
};
  // Fetch booked slots from Firestore
  const fetchBookedSlots = async (date) => {
    if (!firestoreReady || !db) {
      console.warn("Firestore not ready yet");
      return;
    }
    
    try {
      const q = query(
        collection(db, "bookings"), 
        where("date", "==", date),
        where("doctorType", "==", doctorType),
        where("consultationType", "==", consultationType)
      );
      const querySnapshot = await getDocs(q);
      const booked = [];
      querySnapshot.forEach((doc) => {
        booked.push(doc.data().timeSlot);
      });
      setBookedSlots(booked);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setErrorMessage("Failed to fetch booked slots. Please try again.");
    }
  };

  // Format time to 12-hour format with AM/PM
  const formatTime = (time24h) => {
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Generate time slots in 15-minute intervals
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let current = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);

    while (current < end) {
      const hours = current.getHours().toString().padStart(2, '0');
      const minutes = current.getMinutes().toString().padStart(2, '0');
      const timeSlot = `${hours}:${minutes}`;
      slots.push(timeSlot);
      
      // Add 15 minutes
      current.setMinutes(current.getMinutes() + 15);
    }
    
    return slots;
  };

  // Update available time slots based on consultation type and date
  useEffect(() => {
    if (doctorType && consultationType && selectedDate && firestoreReady) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();

      // Check if the selected day is closed
      const hours = consultationHours[doctorType][consultationType][dayOfWeek];
      
      if (hours.isClosed) {
        setAvailableSlots(['Closed']);
        return;
      }
      
      let slots = generateTimeSlots(hours.start, hours.end);
      
      setAvailableSlots(slots);
      fetchBookedSlots(selectedDate);
    } else {
      setAvailableSlots([]);
    }
  }, [doctorType, consultationType, selectedDate, firestoreReady]);

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Add 1 day
    return today.toISOString().split('T')[0];
  };

  // Get consultation location based on type and date
  const getConsultationLocation = () => {
    if (!doctorType || !consultationType || !selectedDate) return '';
    
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return consultationHours[doctorType][consultationType][dayOfWeek].location;
  };

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError('Full Name is required');
      return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Name should only contain letters and spaces');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      setPhoneError('Phone Number is required');
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone Number should be 10 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError('Email Address is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid Email Address');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!firestoreReady || !db) {
      setErrorMessage("Database connection is not ready. Please refresh the page and try again.");
      return;
    }
    
    if (!doctorType || !consultationType || !selectedDate || !selectedSlot || !fullName || !phoneNumber || !email) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    
    if (selectedSlot === 'Closed') {
      setErrorMessage("The selected day is closed for consultations.");
      return;
    }
    
    if (bookedSlots.includes(selectedSlot)) {
      setErrorMessage("This time slot is already booked. Please select another slot.");
      return;
    }
    
    const isNameValid = validateName(fullName);
    const isPhoneValid = validatePhone(phoneNumber);
    const isEmailValid = validateEmail(email);
    
    if (!isNameValid || !isPhoneValid || !isEmailValid) {
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Add booking to Firestore
      await addDoc(collection(db, "bookings"), {
        doctorType,
        consultationType,
        date: selectedDate,
        timeSlot: selectedSlot,
        fullName,
        phoneNumber,
        email,
        location: getConsultationLocation(),
        createdAt: new Date().toISOString(),
        status: "pending"
      });
  
      // Send notification to doctor
      const doctorTemplateParams = {
        doctor_name: doctorType === 'dr_manish' ? 'Dr. Manish Sharma' : 'Dt. Gauri Mehra',
        patient_name: fullName,
        patient_email: email,
        patient_phone: phoneNumber,
        consultation_type: consultationType === 'hospital' ? 'Hospital' : 'Evening Clinic',
        date: new Date(selectedDate).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        time: formatTime(selectedSlot),
        location: getConsultationLocation(),
        booking_time: new Date().toLocaleString()
      };
  
      await emailjs.send(
        "service_ptrjme3",
        "template_mjozq4o",
        doctorTemplateParams,
        "g45rTVxOaQ2qWUKTt"// Your EmailJS user ID
      );
  
    
    // Reset form
    setSelectedSlot('');
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setMessage("Booking successful! We've sent a confirmation to your email. Please arrive 10 minutes before your scheduled appointment time.");
    
    window.scrollTo(0, 0);
    fetchBookedSlots(selectedDate);
  } catch (error) {
    console.error("Error adding booking or sending email:", error);
    if (error.message.includes('email')) {
      setErrorMessage("Booking was successful but we encountered an issue sending confirmation emails. Please contact the clinic directly to verify your appointment.");
    } else {
      setErrorMessage("Failed to book appointment. Please try again.");
    }
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-4 mb-10  p sm:p-6 bg-gradient-to-br from-[#f9f2ea] to-[#f0e6d9] rounded-lg shadow-lg border border-[#2d5134]">
      <h1 className={`${berkshire.className} text-3xl sm:text-4xl font-bold text-[#2d5134] mb-6 mt-26 text-center`}>
        Book Your Consultation
      </h1>
      
      {!firestoreReady && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          Connecting to booking system... Please wait.
        </div>
      )}
      
      {message && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          {message}
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <div className="mb-6 p-4 bg-white border border-[#2d5134] text-[#5a3921] rounded-md shadow-sm">
        <h3 className="font-bold text-lg mb-2 text-[#2d5134]">Appointment Guidelines:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Please arrive 10 minutes before your scheduled appointment</li>
          <li>Bring any previous medical reports or test results</li>
          <li>A confirmation email will be sent after booking</li>
          <li>Rescheduling requires at least 12 hours notice</li>
          <li>Consultation duration is approximately 15-20 minutes</li>
          <li>Please enter a valid email to receive confirmation</li>
        </ul>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Doctor Type Selection */}
        <div>
          <label className="block text-[#5a3921] font-bold mb-2">
            Select Doctor*
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              className={`p-4 rounded-md flex flex-col cursor-pointer items-center justify-center transition-all ${
                doctorType === 'dr_manish'
                  ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
                  : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
              }`}
              onClick={() => {
                setDoctorType('dr_manish');
                setConsultationType('');
                setSelectedDate('');
              }}
            >
              <span className="text-lg font-medium">Dr. Manish Sharma</span>
              <span className="text-sm mt-1">M.D. (General Physician)</span>
            </button>
            <button
              type="button"
              className={`p-4 rounded-md flex flex-col cursor-pointer items-center justify-center transition-all ${
                doctorType === 'dr_gauri'
                  ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
                  : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
              }`}
              onClick={() => {
                setDoctorType('dr_gauri');
                setConsultationType('');
                setSelectedDate('');
              }}
            >
              <span className="text-lg font-medium">Dt. Gauri Mehra</span>
              <span className="text-sm mt-1">Dietician</span>
            </button>
          </div>
        </div>
        
        {/* Consultation Type Selection */}
        {doctorType && (
          <div>
            <label className="block text-[#5a3921] font-bold mb-2">
              Consultation Location*
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctorType === 'dr_manish' && (
                <>
                  <button
                    type="button"
                    className={`p-4 rounded-md flex flex-col cursor-pointer items-center justify-center transition-all ${
                      consultationType === 'hospital'
                        ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
                        : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
                    }`}
                    onClick={() => setConsultationType('hospital')}
                  >
                    <span className="text-lg font-medium">Hospital</span>
                    <span className="text-xs mt-1">10:00 AM - 5:00 PM</span>
                    <span className="text-xs">Paras Urology & Multispeciality Hospital</span>
                  </button>
                  <button
                    type="button"
                    className={`p-4 rounded-md flex flex-col cursor-pointer items-center justify-center transition-all ${
                      consultationType === 'evening_clinic'
                        ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
                        : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
                    }`}
                    onClick={() => setConsultationType('evening_clinic')}
                  >
                    <span className="text-lg font-medium">Evening Clinic</span>
                    <span className="text-xs mt-1">6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
                    <span className="text-xs">Jeevan Jyoti Hospital</span>
                  </button>
                </>
              )}
           {doctorType === 'dr_gauri' && (
  <>
    <button
      type="button"
      className={`p-4 rounded-md flex flex-col items-center justify-center transition-all ${
        consultationType === 'hospital'
          ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
          : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
      }`}
      onClick={() => setConsultationType('hospital')}
    >
      <span className="text-lg font-medium">Hospital</span>
      <span className="text-xs mt-1">10:00 AM - 2:00 PM</span>
      <span className="text-xs">Paras Urology & Multispeciality Hospital</span>
    </button>
    <button
      type="button"
      className={`p-4 rounded-md flex flex-col items-center justify-center transition-all ${
        consultationType === 'evening_clinic'
          ? 'bg-[#2d5134] text-white shadow-md transform scale-[1.02]'
          : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
      }`}
      onClick={() => setConsultationType('evening_clinic')}
    >
      <span className="text-lg font-medium">Evening Clinic</span>
      <span className="text-xs mt-1">6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
      <span className="text-xs">Jeevan Jyoti Hospital</span>
    </button>
  </>
)}
            </div>
          </div>
        )}
        
        {/* Date Selection */}
        {consultationType && (
          <div className='w-full md:w-1/3'>
            <label className="block text-[#5a3921] font-bold mb-2">
              Select Date*
            </label>
            <input
              type="date"
              min={getMinDate()}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="shadow border border-[#2d5134] rounded w-full py-3 px-4 text-[#5a3921] cursor-pointer leading-tight focus:outline-none focus:ring-2 focus:ring-[#2d5134] focus:border-transparent"
              required
            />
          </div>
        )}
        
        {/* Time Slot Selection */}
        {selectedDate && availableSlots.length > 0 && (
          <div>
            <label className="block text-[#5a3921] font-bold mb-2">
              Select Time Slot*
            </label>
            {availableSlots[0] === 'Closed' ? (
              <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md">
                <p className="font-medium">No appointments available on this day.</p>
                <p className="text-sm mt-1">Please select another date for your appointment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    disabled={bookedSlots.includes(slot)}
                    className={`py-3 px-2 text-sm rounded-md cursor-pointer transition-all ${
                      selectedSlot === slot
                        ? 'bg-[#2d5134] text-white font-semibold shadow-md'
                        : bookedSlots.includes(slot)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#5a3921] hover:bg-[#f9e8df] border border-[#2d5134]'
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {formatTime(slot)}
                    {bookedSlots.includes(slot) && (
                      <span className="block text-xs font-medium mt-1">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Personal Information */}
        {selectedSlot && selectedSlot !== 'Closed' && (
          <div className="space-y-4">
            <div className="p-4 bg-white border border-[#2d5134] text-[#5a3921] rounded-md mb-4">
              <p className="font-medium">Your appointment details:</p>
              <p className="mt-1">
                <span className="font-bold">{doctorType === 'dr_manish' ? 'Dr. Manish Sharma' : 'Dt. Gauri Mehra'}</span> -{' '}
                <span className="font-bold">{consultationType === 'hospital' ? 'Hospital' : 'Evening Clinic'}</span> on{' '}
                <span className="font-bold">{new Date(selectedDate).toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</span> at{' '}
                <span className="font-bold">{formatTime(selectedSlot)}</span>
              </p>
              <p className="text-sm mt-1">{getConsultationLocation()}</p>
            </div>
            
            {/* Full Name Input */}
            <div>
              <label className="block text-[#5a3921] font-bold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                  setFullName(value);
                  validateName(value);
                }}
                className="shadow border border-[#2d5134] rounded w-full py-3 px-4 text-[#5a3921] leading-tight focus:outline-none focus:ring-2 focus:ring-[#2d5134] focus:border-transparent"
                required
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>
            
            {/* Phone Number Input */}
            <div>
              <label className="block text-[#5a3921] font-bold mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneNumber(value);
                  validatePhone(value);
                }}
                className="shadow border border-[#2d5134] rounded w-full py-3 px-4 text-[#5a3921] leading-tight focus:outline-none focus:ring-2 focus:ring-[#2d5134] focus:border-transparent"
                placeholder="e.g. 9876543210"
                maxLength="10"
                required
              />
              {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
            
            <div>
              <label className="block text-[#5a3921] font-bold mb-2">
                Email Address*
              </label>
              <input
                type="email"
                value={email}
                placeholder='Please enter a valid email to receive confirmation'
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className="shadow border border-[#2d5134] rounded w-full py-3 px-4 text-[#5a3921] leading-tight focus:outline-none focus:ring-2 focus:ring-[#2d5134] focus:border-transparent"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !firestoreReady}
              className={`w-full py-3 px-4 rounded-md cursor-pointer transition-all ${
                isLoading || !firestoreReady
                  ? 'bg-[#2d5134]/70 cursor-not-allowed'
                  : 'bg-[#2d5134] hover:bg-[#d8623a]'
              } text-white font-bold text-lg shadow-md`}
            >
              {isLoading ? 'Processing...' : 'Confirm Appointment'}
            </button>
            
            <p className="text-center text-sm text-[#5a3921] mt-2">
              You will receive a confirmation via SMS and email.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingSystem;