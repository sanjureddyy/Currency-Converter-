// script.js

const exchangeRates = {
    "USD": 1.0,
    "EUR": 0.85,
    "GBP": 0.75,
    "INR": 74.57,
    "JPY": 110.57
};

document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    
    document.getElementById('result').value = convertedAmount.toFixed(2);
});
