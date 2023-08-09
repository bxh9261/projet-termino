function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oXmVqItOcs":
        Script1();
        break;
      case "69xGr3EJkRX":
        Script2();
        break;
  }
}

function Script1()
{
  function handleSignIn() {
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

  // Create the div element for g_id_signin
  var divSignin = document.createElement('div');
  divSignin.className = 'g_id_signin';
  divSignin.setAttribute('data-type', 'standard');

  // Append the script tag and div elements to the document's body element
  document.body.appendChild(script);
  document.body.appendChild(divOnload);
  document.body.appendChild(divSignin);
}

handleSignIn();

function goodle(input) {
  return input.replace(/[xz]/gi, '');
}


}

function Script2()
{
  let scrollbar = document.getElementsByClassName("scrollarea-area")
scrollbar[0].scrollTop = 99999999
}

