import React, { Component } from 'react';
import salutation from '../images/salutation.jpg'

class Home extends Component {
    render() {
        return (
        <div>
          <div class="flex-w flex-str size1 overlay1">
            <div class="flex-w flex-col-sb wsize1 bg0 p-l-65 p-t-37 p-b-50 p-r-80 respon1">
              <div class="wrappic1">
              </div>
              <div class="w-full flex-c-m p-t-80 p-b-90">
                <div class="wsize2">
                  <h3 class="l1-txt1 p-b-34 respon3">
                    Center Yoga
                  </h3>

                  <p class="m2-txt1 p-b-46">
                    Follow us for updates!
                  </p>
                  <div className="input-group">
                    <span class="wrap-input100 validate-input m-lr-auto-lg" data-validate = "Email is required: ex@abc.xyz">
                      <input class="s2-txt1 placeholder0 input100 trans-04" type="text" name="email" placeholder="Email Address"/>
                      </span>
                    <button className="btn-submit" type="submit">Sign Up</button>
                  </div>
                </div>
              </div>
              <div class="flex-w">
                <a href="https://www.google.com/" class="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i class="fa fa-facebook"></i>
                </a>

                <a href="https://www.google.com/" class="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.google.com/" class="size3 flex-c-m how-social trans-04 m-r-15 m-b-10">
                  <i class="fa fa-youtube-play"></i>
                </a>
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
