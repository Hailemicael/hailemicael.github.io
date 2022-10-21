const emailjs = request('emailjs-com')

const submitForm = (e) => {
	e.preventDefault();
	emailjs.sendForm('service_cftn2gs','template_dt8g9oc','contact-form', 'WG4LvNiLNviyiKWO-')
	.then(result => alert('your message has been sent. I will be contact with you soon. Thank you!'))
	.catch(err => alert('Oops! Please try again.'))
}

document.querySelector('.submitButton').addEventListener('click', submitForm)