// variables

const fonts = ["Arial","Blackadder ITC","Lucida Sans Unicode","Algerian","Baskerville Old Face"]



// selectors

const text = document.querySelector("#text")
const output = document.querySelector("#output")
const count = document.querySelector("#count")
const color = document.querySelector("#color")
const fontSize = document.querySelector("#fontSize")
const fontFamily = document.querySelector("#fontFamily")
const textToSpeech = document.querySelector("#textToSpeech")
const speechToText = document.querySelector("#speechToText")
const synth = window.speechSynthesis


const listen = () => {
    var recognition = new webkitSpeechRecognition();

  // Set the recognition language
  recognition.lang = 'en-US'; // Specify the desired language code

  // Optional: Set additional recognition options
  // Uncomment the lines below to customize the behavior
  // recognition.continuous = true; // Enable continuous speech recognition
  // recognition.interimResults = true; // Enable interim results

  // Start speech recognition
  recognition.start();

  recognition.addEventListener("start" , () => {
    speechToText.innerHTML = `
        <div class="spinner-grow spinner-grow-sm text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
  })

  recognition.addEventListener("end" , () => {
    speechToText.innerHTML = `
        <i class="ri-mic-line fs-5"></i>
    `
  })

  // Event handler for when speech recognition results are available
  recognition.onresult = function(event) {
    console.log(event)
    var result = event.results[0][0].transcript;
    text.value += result
  };

}

const speak = (text) => {
    const utterThis = new SpeechSynthesisUtterance()
    utterThis.text = text
    utterThis.rate = 1
    utterThis.voice = synth.getVoices()[8]
    
    utterThis.addEventListener("start" , () => {
        textToSpeech.classList.add("active")
    })

    utterThis.addEventListener("end" , () => {
        textToSpeech.classList.remove("active")
    })

    synth.speak(utterThis)
}


fonts.forEach( font => {
    // fontFamily.innerHTML += new Option(font,font)
    fontFamily.append(new Option(font,font))
})


// action

// text ထဲမှာစာရိုက်တာနဲ့ output မှာတစ်ခါထဲပြ
text.addEventListener("keyup",event => {
    // console.log(text.value)
    // console.log(event.target.value)
    output.innerText = text.value
    count.innerText = text.value.length
})

color.addEventListener("change", event => {
    output.style.color = event.target.value
})

fontSize.addEventListener("change", event => {
    // console.log(fontSize.value)
    output.style.fontSize = event.target.value + "px"
})



fontFamily.addEventListener("change", event => {
    // console.log(event.target.value)
    output.style.fontFamily = event.target.value
})


textToSpeech.addEventListener("click" , () => {
    speak(text.value)
})


speechToText.addEventListener("click" , listen)