const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const ipAddressOutput = document.getElementById('ipAddressOutput');
const locationOutput = document.getElementById('locationOutput');
const timeZoneOutput = document.getElementById('timeZoneOutput');
const ispOutput = document.getElementById('ispOutput');
const errorMessageContainer = document.querySelector('.error-message');
const errorMessageText = document.getElementById('errorMessage');

submitButton.addEventListener('click', findIP);

async function findIP(e) {
    e.preventDefault();
    if (textInput.value.length > 5) {

        // API
        const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_FK3Aj173G7DQaiyEfwu1rAhjlFxEG&ipAddress=${textInput.value}`);
        const jsonDataCameFromResponse = await response.json();

        // USING API TO GET THE INFORMATION THAT AN USER NEEDS
        ipAddressOutput.textContent = jsonDataCameFromResponse.ip;
        locationOutput.textContent = jsonDataCameFromResponse.location.country + ',' + ' ' + jsonDataCameFromResponse.location.region;
        timeZoneOutput.textContent = jsonDataCameFromResponse.location.timezone;
        ispOutput.textContent = jsonDataCameFromResponse.isp;


        textInput.value = '';
    } else {
        errorMessageContainer.style.top = '20px';
        errorMessageText.textContent = 'Empty input';

        setTimeout(() =>{
            errorMessageContainer.style.top = '-50px';
        }, 3500);
    };
};