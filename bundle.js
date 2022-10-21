(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const emailjs = request('emailjs-com')

const submitForm = (e) => {
	e.preventDefault();
	emailjs.sendForm('service_cftn2gs','template_dt8g9oc','contact-form', 'WG4LvNiLNviyiKWO-')
	.then(result => alert('your message has been sent. I will be contact with you soon. Thank you!'))
	.catch(err => alert('Oops! Please try again.'))
}

document.querySelector('.submitButton').addEventListener('click', submitForm)
},{}]},{},[1]);
