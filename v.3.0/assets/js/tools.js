if (!sessionStorage.getItem('loggedIn')) {
  //redirect to main page
  window.location.href = "./login.html"
}

//HANDLE NAVABAR CHAPTER SELECTION (MIGHT LATER MOVE IT ON A DIFF FILE)
const chapters = document.querySelector('#chapters')

chapters.addEventListener('change', (e) => {
  const chapter = chapters.value

  if (chapter == 'gates') {
    //redirect to gates page
    //window.location.href = "./gates.html"
  } else if (chapter == 'boolean') {
    //redirect to truth table page
    window.location.href = "./truthTable.html"
  } else if (chapter == 'encoders') {
    //redirect to encoders page
    //window.location.href = "./encoders.html"
  } else if (chapter == 'multiplexers') {
    //redirect to multiplexers page
    //window.location.href = "./multiplexers.html"
  } else if (chapter == 'adders') {
    //redirect to adders page
    window.location.href = "./adders.html"
  } else if (chapter == 'latches') {
    //redirect to flip flops page
    window.location.href = "./index.html"
  } else if (chapter == 'counters') {
    //redirect to counters page
    window.location.href = "./counters.html"
  } else if (chapter == 'registers') {
    //redirect to registers page
    //window.location.href = "./registers.html"
  } else {
    //do not redirect
    return
  }

})

//check which tool is selected
const tool_options = document.querySelector('#tool-option')

tool_options.addEventListener('change', (e) => {
  const option = tool_options.value

  if (option == 'converter') {
    //show binary converter
    document.querySelector('.tools_conv').style.display = 'block'
  } else {
    //hide binary converter
    document.querySelector('.tools_conv').style.display = 'none'
  }

})



//reference form
const conv_form = document.querySelector('.tools_conv_form')
const conv_from = document.querySelector('#conv_from')
const conv_to = document.querySelector('#conv_to')
const conv_options_from = document.querySelector('#conv_options_from')
const conv_options_to = document.querySelector('#conv_options_to')

//handle form submit
conv_form.addEventListener('submit', (e) => {
  e.preventDefault()

  convert(conv_options_from.value, conv_options_to.value)

})

function convert(from, to) {
  //check selector options
  if (from === to) {
    //do nothing
    return
  } else if (from === 'bin' && to === 'dec') {
    //convert bin to dec
    const dec = parseInt(conv_from.value, 2)
    conv_to.value = dec
  } else if (from === 'dec' && to === 'bin') {
    //convert dec to bin
    const bin = Number(conv_from.value).toString(2)
    conv_to.value = bin
  } else if (from === 'bin' && to === 'hex') {
    //convert bin to hex
    const hex = parseInt(conv_from.value, 2).toString(16)
    conv_to.value = hex
  } else if (from === 'hex' && to === 'bin') {
    //convert hex to bin
    const bin = parseInt(conv_from.value, 16).toString(2)
    conv_to.value = bin
  } else if (from === 'dec' && to === 'hex') {
    //convert dec to hex
    const hex = Number(conv_from.value).toString(16)
    conv_to.value = hex
  } else if (from === 'hex' && to === 'dec') {
    //convert hex to dec
    const dec = parseInt(conv_from.value, 16)
    conv_to.value = dec
  }

}