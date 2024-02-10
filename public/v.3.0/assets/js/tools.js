// get current html page form url
const url = window.location.href;
//get html page name
const page = url.split( '/' ).pop();

//check if user is logged in
if ( !sessionStorage.getItem( 'loggedIn' ) ) {
  //redirect to main page
  window.location.href = `./login.html?rdf=${ page }`;
}

//check which tool is selected
const toolOptions = document.querySelector( '#tool-option' );

toolOptions.addEventListener( 'change', ( e ) => {
  const option = toolOptions.value;

  if ( option == 'converter' ) {
    //show binary converter
    document.querySelector( '.tools_conv' ).style.display = 'block';
  } else {
    //hide binary converter
    document.querySelector( '.tools_conv' ).style.display = 'none';
  }
} );

//reference form
const conv_form = document.querySelector( '.tools_conv_form' );
const conv_from = document.querySelector( '#conv_from' );
const conv_to = document.querySelector( '#conv_to' );
const conv_options_from = document.querySelector( '#conv_options_from' );
const conv_options_to = document.querySelector( '#conv_options_to' );

//handle form submit
conv_form.addEventListener( 'submit', ( e ) => {
  e.preventDefault();
  convert( conv_options_from.value, conv_options_to.value );
} );

function convert ( from, to ) {
  //check selector options
  if ( from === to ) {
    //do nothing
    return;
  } else if ( from === 'bin' && to === 'dec' ) {
    //convert bin to dec
    const dec = parseInt( conv_from.value, 2 );
    conv_to.value = dec;
  } else if ( from === 'dec' && to === 'bin' ) {
    //convert dec to bin
    const bin = Number( conv_from.value ).toString( 2 );
    conv_to.value = bin;
  } else if ( from === 'bin' && to === 'hex' ) {
    //convert bin to hex
    const hex = parseInt( conv_from.value, 2 ).toString( 16 );
    conv_to.value = hex;
  } else if ( from === 'hex' && to === 'bin' ) {
    //convert hex to bin
    const bin = parseInt( conv_from.value, 16 ).toString( 2 );
    conv_to.value = bin;
  } else if ( from === 'dec' && to === 'hex' ) {
    //convert dec to hex
    const hex = Number( conv_from.value ).toString( 16 );
    conv_to.value = hex;
  } else if ( from === 'hex' && to === 'dec' ) {
    //convert hex to dec
    const dec = parseInt( conv_from.value, 16 );
    conv_to.value = dec;
  }
}