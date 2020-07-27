

function sumOfDigits(num) {
	if (num == 0) {
		return 0;
	}
	return num % 10 + sumOfDigits(Math.floor(num / 10));
}

function myFunction() {
	var inputNumber = document.getElementById("num").value;
	var result = sumOfDigits(inputNumber);
	var resulttwo = 0;

	if (result.toString().length > 1) {
		resulttwo = sumOfDigits(result);
	}
	if (result == 7 || resulttwo == 7) {
		alert("Your image is submitted.");
	} else {
		alert("The sum of userid is not equal to 7. Enter new userid.");
	}
}



// for image preview to upload 

const inpfile = document.getElementById('inpfile');
const previewContainer = document.getElementById('imagePreview');
const previewImage = previewContainer.querySelector('.image-preview__image');
const previewtext = previewContainer.querySelector('.image-preview__text');

inpfile.addEventListener('change', function () {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();

		previewtext.style.display = "none";
		previewImage.style.display = "block";

		reader.addEventListener('load', function () {
			previewImage.setAttribute("src", this.result);
		});
		reader.readAsDataURL(file);
	} else {
		previewtext.style.display = null;
		previewImage.style.display = null;
		previewImage.setAttribute("src", "");
	}
});


// for upload section

const upload = document.getElementById('upload');
const uploadcontainer = document.querySelector(".upload-model");
const close = document.querySelector(".close-form");

upload.addEventListener('click', () => {
	uploadcontainer.classList.add('open');
});
uploadcontainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('close')) {
		uploadcontainer.classList.remove('open');


	}
});


//  for image gallery pop up image

const preview = document.querySelectorAll(".gallery img");
const model = document.querySelector(".model");
const original = document.querySelector(".model .full-img");
const title = document.querySelector(".model .title");
const content = document.querySelector(".model .caption");

preview.forEach(previews => {
	previews.addEventListener('click', () => {
		model.classList.add("open");
		original.classList.add("open");
		// dynamic change text and image
		const fullimg = previews.getAttribute("data-original");
		original.src = `./image/${fullimg}`

		const imgtitle = previews.getAttribute('data-title');
		title.innerHTML = imgtitle;

		const imgcontent = previews.getAttribute('data-content');
		content.innerHTML = imgcontent;
	});
});

model.addEventListener('click', (e) => {
	if (e.target.classList.contains('close')) {
		model.classList.remove('open');

	}
});

