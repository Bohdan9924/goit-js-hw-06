const loginForm = document.querySelector(".login-form");

const handleForm = (e) => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.target;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all fields.");
	}
    const formData = {
        email: email.value,
        password: password.value
    };
    console.log(formData);
    e.target.reset();
};

loginForm.addEventListener("submit", handleForm);