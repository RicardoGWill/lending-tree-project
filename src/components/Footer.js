import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <div className="Foot">
        <div className="BottomText">
          <img src="https://www.lendingtree.com/content/themes/lt-wp-www-theme/dist/images/lt-logo-grey.svg" className="App-logo2" alt="logo" />
          <div>
            <div>
              11115 Rushmore Dr.
            </div>
            <div>
              Charlotte, NC 28277
            </div>
            <br />
            <div>
              Privacy Policy | Terms of Use | Licenses & Disclosure
            </div>
          </div>
          <br />
          <div>
            <div>
              NOTE: THIS IS A TEST SITE AND IS NOT AFFILIATED WITH LENDING TREE.
            </div>
            <div>
              DO NOT SUBMIT ANY SENSITIVE INFORMATION TO THS SITE.
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
