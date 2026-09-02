
const imageInput = document.getElementById("imageInput");
const uploadBox = document.getElementById("uploadBox");
const previewArea = document.getElementById("previewArea");
const imagePreview = document.getElementById("imagePreview");
const fileName = document.getElementById("fileName");
const loadingArea = document.getElementById("loadingArea");
const resultArea = document.getElementById("resultArea");



function startScreening() {

    document.getElementById("screening").scrollIntoView({
        behavior: "smooth"
    });

}



function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}



imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        handleImage(file);

    }

});



uploadBox.addEventListener("dragover", function (event) {

    event.preventDefault();

    uploadBox.classList.add("dragover");

});


uploadBox.addEventListener("dragleave", function () {

    uploadBox.classList.remove("dragover");

});


uploadBox.addEventListener("drop", function (event) {

    event.preventDefault();

    uploadBox.classList.remove("dragover");

    const file = event.dataTransfer.files[0];

    if (file) {

        handleImage(file);

    }

});



function handleImage(file) {

    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png"
    ];

    if (!allowedTypes.includes(file.type)) {

        alert("Please upload a JPG, JPEG or PNG image.");

        return;

    }


    // 10 MB limit

    if (file.size > 10 * 1024 * 1024) {

        alert("Image size must be less than 10MB.");

        return;

    }


    const reader = new FileReader();


    reader.onload = function (event) {

        imagePreview.src = event.target.result;

        fileName.textContent = file.name;

        uploadBox.style.display = "none";

        previewArea.style.display = "flex";

        loadingArea.style.display = "none";

        resultArea.style.display = "none";

    };


    reader.readAsDataURL(file);

}



function analyzeImage() {

    previewArea.style.display = "none";

    loadingArea.style.display = "block";

    resultArea.style.display = "none";


    // --------------------------------------
    // DEMO AI PROCESSING
    // --------------------------------------
    //
    // IMPORTANT:
    // This is NOT a real AI model.
    //
    // Later we will replace this timer with:
    //
    // Frontend
    //      ↓
    // FastAPI
    //      ↓
    // PyTorch model
    //      ↓
    // Prediction
    //      ↓
    // Frontend
    //
    // --------------------------------------


    setTimeout(function () {

        loadingArea.style.display = "none";

        resultArea.style.display = "block";

        resultArea.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        if (window.lucide) {

            lucide.createIcons();

        }

    }, 2500);

}




function openLogin() {

    document.getElementById("loginModal").classList.add("active");

}


function closeLogin() {

    document.getElementById("loginModal").classList.remove("active");

}


function login(event) {

    event.preventDefault();

    alert(
        "Demo login successful!\n\n" +
        "Real authentication will be connected to the backend in the next phase."
    );

    closeLogin();

}



function generateReport() {

    alert(
        "DentalAI Screening Report\n\n" +
        "Possible Finding: Dental Caries\n" +
        "AI Confidence: 87%\n\n" +
        "Important: This is an AI screening result, " +
        "not a medical diagnosis.\n\n" +
        "Please consult a qualified dentist."
    );

}




document.getElementById("loginModal").addEventListener(
    "click",
    function (event) {

        if (event.target === this) {

            closeLogin();

        }

    }
);


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLogin();

    }

});




if (window.lucide) {

    lucide.createIcons();

}

