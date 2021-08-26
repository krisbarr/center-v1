import React, { Component } from 'react';
import salutation from '../images/salutation.jpg'
import logo from '../images/centerYogaGradientHorizontal.png'
import clouds from '../images/clouds.jpeg'
class Home extends Component {
    render() {
        return (
        <div>
          <div class="flex-w flex-str size1 overlay1">
            <div class="flex-w flex-col-sb wsize1 bg0 p-l-65 p-t-37 p-b-50 p-r-80 respon1" style={{backgroundImage: `url(${clouds})`, backgroundPosition: 'center center no-repeat',
      backgroundSize: 'cover'}}>
              <div class="wrappic1">
              </div>
              <div class="w-full flex-c-m p-t-80 p-b-90">
                <div class="wsize2">
                  <div class="l1-txt1 p-b-34 respon3">
                  <img className="logo" src={logo} alt ="Center Yoga Logo"/>
                  </div>

                  <p class="m2-txt1 p-b-46">
                    COMING OCTOBER 2021
                  </p>
                  <p className="m2-txt2 p-b-46"> Subscribe to learn about new student rates and Founding Member packages. </p>
                  <div className="input-group">
                    <span class="wrap-input100 validate-input m-lr-auto-lg" data-validate = "Email is required: ex@abc.xyz">
                      <input class="s2-txt1 placeholder0 input100 trans-04" type="text" name="email" placeholder="Email Address"/>
                      </span>
                    <button className="btn-submit" type="submit">Sign Up</button>
                  </div>
                </div>
              </div>
              <div class="flex-w">
                <a href="https://www.instagram.com/centeryoga.nyc/"class="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/centeryoga.nyc/"class="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i class="fa fa-facebook-square"></i>
                </a>
                <p className="m2-txt3 p-b-46"><i class="fa fa-copyright" aria-hidden="true"></i> 2021 Center Yoga | 110 E. 23rd St. NYC, NY 10010 </p>

              </div>
            </div>
            <div class="wsize1 simpleslide100-parent respon2">
              <div class="simpleslide100">
                <div class="bg-img1"><img class="bg-img1" src={salutation} alt="salutation"/></div>
                <div class="simpleslide100-item bg-img1"></div>
                <div class="simpleslide100-item bg-img1"></div>
              </div>
            </div>
          </div>
        </div>
)
    }
}
export default Home;
