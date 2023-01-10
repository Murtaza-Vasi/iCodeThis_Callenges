seatSelectionContainer = document.querySelector(".seat-selection");

const generateSeats = (row, col) => {
	// Number of seats will be generated according to row and col passed
	let rows = Array.from({ length: row }, () =>
		Array.from({ length: col }, () => randomNumber(2))
	);
	return rows;
};

const randomNumber = (limit) => Math.floor(Math.random() * limit) + 1;

seats = generateSeats(7, 8);
seats.map((item, index) =>
	item.unshift(String.fromCharCode("A".charCodeAt(0) + index))
);

const generateHTML = (item) => {
	let temp = "";
	if (!Number.isInteger(item)) {
		temp = `<div class="row-index">${item}</div>`;
	}

	if (Number.isInteger(item) && item === 1) {
		temp = `<img src="./armchair.svg" alt="seat" class="seat available" />`;
	} else if (Number.isInteger(item) && item === 2) {
		temp = `<img src="./armchair.svg" alt="seat" class="seat booked" />`;
	}

	return temp;
};

let HTML = "";
seats.forEach((item) => item.forEach((itm) => (HTML += generateHTML(itm))));
seatSelectionContainer.innerHTML = HTML;
