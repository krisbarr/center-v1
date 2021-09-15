import React, { Component } from 'react';
import MailchimpForm from '../MailchimpForm/MailchimpForm.js'
import legs from '../images/CYWeb2.jpg'
import logo from '../images/centerYogaGradientHorizontal.png'
import clouds from '../images/clouds.png'

class Home extends Component {
    render() {
        return (
        <div>
          <div className="flex-w flex-str size1 overlay1">
            <div className="flex-w flex-col-sb wsize1 bg0 p-l-65 p-t-37 p-b-50 p-r-80 respon1" style={{backgroundImage: `url(${clouds})`, backgroundPosition: 'center center no-repeat',
      backgroundSize: 'cover'}}>
              <div className="wrappic1">
              </div>
              <div className="w-full flex-c-m p-t-80 p-b-90">
                <div className="wsize2">
                  <div className="l1-txt1 p-b-34 respon3">
                  <img className="logo" src={logo} alt ="Center Yoga Logo"/>
                  </div>

                  <p className="m2-txt1 p-b-46">
                    COMING OCTOBER 2021
                  </p>
                  <p className="m2-txt2 p-b-46"> Subscribe to learn about new student rates and Founding Member packages. </p>
                  <span className="wrap-input100 validate-input m-lr-auto-lg">
                  <MailchimpForm/>
                  </span>
                </div>
              </div>
              <div className="flex-w">
                <a href="https://www.instagram.com/centeryoga.nyc/"className="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/Center-Yoga-102888298813193"className="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <p className="m2-txt3 p-b-46"><i className="fa fa-copyright" aria-hidden="true"></i> 2021 Center Yoga | 110 E. 23rd St. NYC, NY 10010 </p>

              </div>
            </div>
            <div className="wsize1 simpleslide100-parent respon2">
              <div className="simpleslide100">
                <div className="bg-img1"><img className="bg-img1" src={legs} alt="salutation"/></div>
                <div className="simpleslide100-item bg-img1"></div>
                <div className="simpleslide100-item bg-img1"></div>
              </div>
            </div>
          </div>
        </div>
)
    }
}
export default Home;
