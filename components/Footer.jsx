import React from 'react'

const Footer = () => {
  return (
    <section className="footer" id="footer">

    <div className="box-container">

        <div className="box">
            <h3>quick links</h3>
            <a href="#home"> <i className="fas fa-chevron-right"></i> home </a>
            <a href="#services"> <i className="fas fa-chevron-right"></i> products </a>
            <a href="#about"> <i className="fas fa-chevron-right"></i> How to use </a>
            <a href="#book"> <i className="fas fa-chevron-right"></i> contact us </a>
        </div>


        <div className="box">
            <h3>contact info</h3>
            <a href="#"> <i className="fas fa-phone"></i> +964770 112 2331 </a>
            <a href="#"> <i className="fas fa-phone"></i> +964773 388 9913 </a>
            <a href="#"> <i className="fas fa-envelope"></i> co@gmail.com </a>
            <a href="#"> <i className="fas fa-envelope"></i> fsPharmacy@gmail.com </a>
            <a href="#"> <i className="fas fa-map-marker-alt"></i> Iraq / Baghdad - Alkendy street </a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
        </div>

    </div>

    <div className="credit"> created by <span>FS Pharmacy</span> | all rights reserved </div>

</section>
  )
}

export default Footer