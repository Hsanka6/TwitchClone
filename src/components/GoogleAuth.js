import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '297777617995-rgldl6jk15f3vr2g4tfepc4g8fatuhgv.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render (){
    return <div> Google AUth </div>;
  }
}

export default GoogleAuth;
