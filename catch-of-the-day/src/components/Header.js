import React from 'react';

class Header extends React.Component {
    render() {
      return (
            <header className="top">
                <h1>
                  Catch
                  <span className="ofThe">
                      <span className="of"></span>of
                      <span className="the"></span>the
                  </span>
                  day
                </h1>
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
}

export default Header;
