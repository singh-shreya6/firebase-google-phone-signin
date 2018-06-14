
function getUiConfig() {
  return {
    'callbacks': {
      'signInSuccess': function(user, credential, redirectUrl) {
        handleSignedInUser(user);
        return false;
      }
    },
    'signInFlow': 'popup',
    'signInOptions': [
	
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	{
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image', 
          size: 'invisible',
          badge: 'bottomleft' 
        },
	      defaultCountry: 'IN', 
	      defaultNationalNumber: '1234567890',
	      loginHint: '+11234567890'
	}
        ],
    'tosUrl': 'https://www.google.com'
  };
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var handleSignedInUser = function(user) {
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  document.getElementById('phone').textContent = user.phoneNumber;
};

var handleSignedOutUser = function() {
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
  ui.start('#firebaseui-container', getUiConfig());
};

firebase.auth().onAuthStateChanged(function(user) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('loaded').style.display = 'block';
  user ? handleSignedInUser(user) : handleSignedOutUser();
});

var initApp = function() {
  document.getElementById('sign-out').addEventListener('click', function() {
    firebase.auth().signOut();
  });
};

window.addEventListener('load', initApp);
