import React from 'react'

const Help = () => {
    return (
        <>
            <section className="about" id="about">

                <h1 className="heading" style={{ marginBottom: '-6rem', marginTop: '4rem' }}> <span>Need Some</span> Help? </h1>

                <div className="row">

                    <div className="image">
                        <img src="image/about-img.svg" alt="" />
                    </div>

                    <div className="content">
                        <h3>Here some help about how to use</h3>
                        <p>-First choose the product that you need to buy, Then click on (Buy Now) and full your information that needed and click on (Order Now).</p>
                        <p>-Wish that was help enough, If not please Contact Us for more help!</p>
                        <a href="#" className="btn2"> contact us </a>
                    </div>

                </div>

            </section>
            <section className="review" id="review">

<h1 className="heading"> Thanks for use <span>our services</span> </h1>

</section>
        </>
    )
}

export default Help