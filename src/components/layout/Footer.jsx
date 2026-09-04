// Footer.jsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Social Media Bar */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow GaurNish Health on Facebook"
            className="flex justify-center items-center py-6 sm:py-10 text-white hover:bg-green-700 transition-colors sm:border-r border-green-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.013 3.693 9.153 8.505 9.876V14.65H8.031v-2.629h2.474v-1.749c0-2.896 1.411-4.167 3.818-4.167 1.153 0 1.762.086 2.051.124v2.294h-1.642c-1.022 0-1.379.969-1.379 2.061v1.437h2.995l-.406 2.629h-2.588v7.247C18.235 21.236 22 17.062 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="font-medium text-base sm:text-lg">Facebook</span>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow GaurNish Health on Instagram"
            className="flex justify-center items-center py-6 sm:py-10 text-white hover:bg-green-700 transition-colors sm:border-r border-green-700 border-t sm:border-t-0 border-green-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.901 4.901 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.901 4.901 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z" />
              <path d="M12 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
            <span className="font-medium text-base sm:text-lg">Instagram</span>
          </a>
          <a 
            href="https://wa.me/8690761918" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contact GaurNish Health on WhatsApp"
            className="flex justify-center items-center py-6 sm:py-10 text-white hover:bg-green-700 transition-colors border-t sm:border-t-0 border-green-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-medium text-base sm:text-lg">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white py-10 sm:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Doctor's Section */}
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-green-800 border-b pb-2 border-gray-200">Our Doctors</h3>
              <div className="text-gray-600 text-base sm:text-lg space-y-6">
                <div>
                  <p className="font-semibold">Dr. Manish Sharma (General Physician)</p>
                  <p className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Paras Urology and Multispeciality Hospital, Ajmer: 10:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Jeevan Jyoti Hospital, Ajmer: 6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
                  </p>
                  <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 8690761918</span>
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Dt. Gauri Mehra (Dietician)</p>
                  <p className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Paras Urology and Multispeciality Hospital, Ajmer: 10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Jeevan Jyoti Hospital, Ajmer: 6:00 PM - 8:00 PM <b>(Prior Appointment Only)</b></span>
                  </p>
                  <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Mayur Children Hospital, Ajmer, Rajasthan</span>
                  </p>

                  {/* <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Pawan Putra Medical: 5:00 PM - 8:00 PM</span>
                  </p> */}
                  <p className="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 9461068894</span>
                  </p>
                </div>


              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-green-800 border-b pb-2 border-gray-200">Contact Us</h3>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 8690761918 / +91 9461068894</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-700 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>gaurnishhealth@gmail.com</span>
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-5 text-green-800 border-b pb-2 border-gray-200">Our Locations</h3>
              <div className="text-gray-600 text-base sm:text-lg space-y-4">
                <div>
                  <p className="font-medium text-green-700">Paras Urology and Multispeciality Hospital</p>
                  <p className="flex items-start mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-700 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>
                      Haribhau, Upadhyay Nagar, C-Block, <br />
                      Pushkar Road, Ajmer, Rajasthan
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-medium text-green-700">Jeevan Jyoti Hospital</p>
                  <p className="flex items-start mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-700 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>
                      19, 26B, Beawar Rd, Nai Basti, Ramganj, Ajmer <b>(Prior Appointment Only)</b>
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-medium text-green-700">Mayur Children Hospital</p>
                  <p className="flex items-start mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-green-700 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>
                      B-15, Aravali Vihar, Near Lions Club, <br />
                      Vaishali Nagar, Ajmer, Rajasthan, <br />
                      305001    
                    </span>
                  </p>
                </div>
              </div>
            </div>

            

            {/* Company Links */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-green-800 border-b pb-2 border-gray-200">Company</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg">
                <li>
                  <Link href="/" className="hover:text-green-600 transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-green-600 transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>About us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-green-600 transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-600 transition-colors flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/bookconsultation" className="hover:text-green-600 transition-colors flex items-center group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-700 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Book Consultation</span>
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 sm:mt-8 mb-3 sm:mb-5 text-green-800 border-b pb-2 border-gray-200">Insurance</h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Accepting Chiranjeevi, RGHS, CGHS, CAPF, RAILWAY, and all types of TPA facilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="border-t border-gray-200"></div>

      {/* Copyright Footer */}
      <div className="py-6 sm:py-8 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm sm:text-base text-gray-700 mb-4 md:mb-0 text-center md:text-left font-medium">
            © Copyright {new Date().getFullYear()}, Powered by <a href='https://seocialmedia.in/' target='_blank' rel='noopener noreferrer' aria-label='SEOcial Media Solutions (opens in new tab)' className='cursor-pointer text-gray-800 hover:text-green-800 underline'> SEOcial Media Solutions.</a> All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-8 text-sm sm:text-base">
            <Link href="/" aria-label="Privacy Policy" className="text-gray-700 hover:text-green-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" aria-label="Terms and Conditions" className="text-gray-700 hover:text-green-800 transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;