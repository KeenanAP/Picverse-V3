document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider .list .item");
    const thumbnails = document.querySelectorAll(".thumbnail .item img");
    let currentIndex = 0;
    const slideInterval = 5000; 

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");

        slides[index].style.display = "block";

        thumbnails.forEach(thumb => thumb.style.borderColor = "white");
        thumbnails[index].style.borderColor = "yellow";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, slideInterval);

    showSlide(currentIndex);

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});


 document.getElementById("submissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let title = document.getElementById("title").value;
    let file = document.getElementById("description").files;
    let tags = document.getElementById("tags").value;
    let arttype = document.getElementById("arttype").value;

    let valid = true;

    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (title.split(" ").length <= 5) {
        document.getElementById("titleError").textContent = "Title too short.";
        valid = false;
    } else {
        document.getElementById("titleError").textContent = "";
    }

    if (file.length === 0) {
        document.getElementById("descriptionError").textContent = "No file uploaded.";
        valid = false;
    } else {
        document.getElementById("descriptionError").textContent = "";
    }

    if (tags.split(" ").length <= 5) {
        document.getElementById("tagsError").textContent = "Not enough tags.";
        valid = false;
    } else {
        document.getElementById("tagsError").textContent = "";
    }

    if (arttype === "") {
        document.getElementById("arttypeError").textContent = "Select art type.";
        valid = false;
    } else {
        document.getElementById("arttypeError").textContent = "";
    }

    if (valid) {
        alert("Submitted!");
        this.submit();
    }
});

function popUp(){
  document.getElementById("popUp").style.display='block'
}

function closeUp(){
  document.getElementById("popUp").style.display='none'
}

window.onclick=function(event){
  const getpopUp = document.getElementById("popUp")
  if (event.target== getpopUp){
    getpopUp.style.display='none'
  }
}