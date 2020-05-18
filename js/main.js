// Select elements
const select = document.getElementById('voice'),
    text = document.querySelector('.text'),
    btn = document.querySelector('.btn'),
    form = document.querySelector('.form');

// 
let voices = [];

function setVoicesNamesAndLangs() {
    // Get voices
    voices = speechSynthesis.getVoices();
    // Loop through
    voices.forEach(v => {
        const option = document.createElement('option');
        // Define option value
        option.value = v.name;
        option.innerHTML = `${v.name} - ${v.lang}`;
        // Append options to select tag element
        select.appendChild(option);
    });
};

//
// ─── EVENT LISTENER SET SELECT ELEMENT ──────────────────────────────────────────

speechSynthesis.addEventListener('voiceschanged', setVoicesNamesAndLangs);

//
// ─── CHANGE VOICE ───────────────────────────────────────────────────────────────
select.addEventListener('change', (e) => {
    // Find voice and change selected voice
    speech.voice = voices.find(v => v.name === e.target.value)
});

//
// ─── INIT SPEECH ABILITY ───────────────────────────────────────────────────────────────────────
let speech = new SpeechSynthesisUtterance();

//
// ─── SET SPEECH ────────────────────────────────────────────────────────────────
form.addEventListener('submit', (e) => {
    // Prevent reload default
    e.preventDefault();
    // console.log(e.target[0].value, text.value)

    // Attach text to speech
    speech.text = text.value;
    // Call speak and pass the message text to speech
    speechSynthesis.speak(speech);

});