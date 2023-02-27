
//inject html
fetch(chrome.runtime.getURL('/template.html')).then(r => r.text()).then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    // not using innerHTML as it would break js event listeners of the page
    });

//inject alarm audio
const audio = new Audio(chrome.runtime.getURL('assets/alarm.wav'))
audio.id = 'alarm-audio'
document.body.appendChild(audio)

//inject javascript
var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/autoChat.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

