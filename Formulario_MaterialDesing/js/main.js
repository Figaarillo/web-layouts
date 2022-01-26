elements = document.querySelector('.form').elements;
const gender = document.getElementById;

const inputList = () => {
	let inputList = [];
	for (const e of elements) {
		(e.type === 'text' || e.type === 'email' || e.type === 'password') && inputList.push(e);
	}
	return inputList;
};

// Funtions

function focusInput() {
	this.parentElement.children[1].classList.add('active');
	this.parentElement.children[0].classList.remove('error');
}

function blurInput() {
	!this.value &&
		((this.parentElement.children[1].className = 'label'),
		this.parentElement.children[0].classList.add('error'));
}

const validateInputs = () => {
	inputList().forEach(e => {
		!e.value ? e.classList.add('error') : e.classList.remove('error');
	});
};

const validatePassword = () => {
	if (elements.pass.value !== elements.pass2.value || elements.pass.value === '') {
		inputList().forEach(e => e.type === 'password' && (e.classList.add('error'), (e.value = '')));
	} else {
		inputList().forEach(e => e.type === 'password' && e.classList.remove('error'));
	}
};

const validateRadios = () => {
	if (!(elements.man.checked && elements.woman.checked)) {
		elements.man.labels[0].classList.add('error'); //label man
		elements.woman.labels[0].classList.add('error'); // label woman
	} else {
		elements.man.labels[0].classList.remove('error'); //label man
		elements.woman.labels[0].classList.remove('error'); // label woman
	}
};

const validateCheckbox = () => {
	!elements.terms.checked
		? elements.terms.labels[0].classList.add('error')
		: elements.terms.labels[0].classList.remove('error');
};

const send = e => {
	e.preventDefault();
	validateInputs();
	validatePassword();
	validateRadios();
	validateCheckbox();
};

// Events

inputList().forEach(elems => {
	elems.addEventListener('focus', focusInput);
	elems.addEventListener('blur', blurInput);
});

document.getElementById('btn-submit').addEventListener('click', send);
