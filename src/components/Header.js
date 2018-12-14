import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
      <header className ="App-header">
        <img src="https://www.lendingtree.com/content/themes/lt-wp-www-theme/dist/images/lt-logo-grey.svg" className="App-logo" alt="logo" />
        <div className="Call">Call us:  </div>
        <div className="Tel">888-246-4181</div>
      </header>
      </div>
    );
  }
}

export default Header;
