// regex validition
const patterns = {
	username: /^[a-z\d]{8,16}$/i,
	password: /^[\w@-]{8,20}$/, // it looks like that w dosent contain @ and -
	phone: /^\d{11}$/,
	email: /([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
	// steps to create that email regex we will break it into 4 steps
	// [1] any letters, numbers, dot(.) or hyphens(-)
	// [2] any letters, numbers, hyphens(-)
	// [3] any letters
	// [4] a  dot(.), then any letter
};

// inputs
const inputs_input = document.querySelectorAll('input');

// validation function
function validate(field, pattern, input) {
	if (pattern.test(field.value)) {
		field.classList.remove('wrong');
		field.classList.add('correct');
		document.querySelector(`.${input}`).classList.remove('wrong-p');
		document.querySelector(`.${input}`).classList.add('correct-p');
	} else {
		field.classList.add('wrong');
		field.classList.remove('correct');
		document.querySelector(`.${input}`).classList.remove('correct-p');
		document.querySelector(`.${input}`).classList.add('wrong-p');
	}
}

// listen to this events
inputs_input.forEach((cur) => {
	cur.addEventListener('keyup', (e) => {
		//if you swap keyup event with keydown it will require 12digits not 11
		validate(e.target, patterns[e.target.attributes.name.value], e.target.attributes.name.value);
	});
});
