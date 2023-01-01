eyeSlashOnBtn = document.querySelector(".eye-slash-container");
eyeSlashOffBtn = document.querySelector(".eye-container");
toggleOnBtn = document.querySelector(".toggle-on-container");
toggleOffBtn = document.querySelector(".toggle-off-container");
passwordInput = document.getElementById("password");

togglePasswordVisibility = () => {
	eyeSlashOffBtn.classList.toggle("active");
	eyeSlashOnBtn.classList.toggle("active");
	console.log(passwordInput.type);
	if (passwordInput.type === "text") {
		passwordInput.type = "password";
	} else {
		passwordInput.type = "text";
	}
};

toggleSignInVisibility = () => {
	toggleOnBtn.classList.toggle("active");
	toggleOffBtn.classList.toggle("active");
};

[eyeSlashOffBtn, eyeSlashOnBtn].forEach((item) =>
	item.addEventListener("click", togglePasswordVisibility)
);

[toggleOffBtn, toggleOnBtn].forEach((item) =>
	item.addEventListener("click", toggleSignInVisibility)
);
