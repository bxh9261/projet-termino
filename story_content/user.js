function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bruv0E6eaA":
        Script1();
        break;
  }
}

function Script1()
{
  var signInAdded = false; // Flag to track if the sign-in elements have been added
var player = GetPlayer();

function handleCredentialResponse(response) {
  if (response.credential) {
    // Extract user's profile information
    var profile = response.credential;

    // Extract user's first name
    var firstName = profile.firstName;

    // Log the welcome message
    console.log('Welcome, ' + firstName + '!');
    player.SetVar("ConnexionTexte",'Welcome, ' + firstName + '!\nAppuyez sur Allons-y.');
    player.SetVar("AllonsyConnex",true);
    
    // Call the function to advance to the next slide
    advanceToNextSlide();
  } else {
    // Handle sign-in failure or cancellation
    console.log('Sign-in failed or was canceled.');
    player.SetVar("ConnexionTexte",'Sign-in failed or was canceled.');
  }
}

function advanceToNextSlide() {
  console.log('Advancing to the next slide...');
}

function handleSignIn() {
  if (signInAdded) {
    return; // Return early if sign-in elements have already been added
  }
  
  signInAdded = true; // Set the flag to indicate sign-in elements are being added
  
  var clientId = goodle('95x3z3xzx9zx1xz72zx3zx04zx3zx-zxezxcamqzxlzx87f5zxaxzad8no6zxzxdl34nm90zxzxae2a4z2zt.apzxps.gozxzxxogxlzexuzsxezrczxzxonxxxxxtxeznxtzx.xxcxozmz');

  // Dynamically create the script tag for loading the Google Sign-In library
  var script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.defer = true;

  // Create the div element for g_id_onload
  var divOnload = document.createElement('div');
  divOnload.id = 'g_id_onload';
  divOnload.setAttribute('data-client_id', clientId);
  divOnload.setAttribute('data-callback', 'handleCredentialResponse');
  
  //temporary fix to callback issue
  player.SetVar("ConnexionTexte",'Welcome!\nAppuyez sur Allons-y.');
  player.SetVar("AllonsyConnex",true);

  // Create the div element for g_id_signin
  var divSignin = document.createElement('div');
  divSignin.className = 'g_id_signin';
  divSignin.setAttribute('data-type', 'standard');

  // Append the script tag and div elements to the document's body element
  document.body.appendChild(script);
  document.body.appendChild(divOnload);
  //document.body.appendChild(divSignin);
}

handleSignIn();

function goodle(input) {
  return input.replace(/[xz]/gi, '');
}


}

