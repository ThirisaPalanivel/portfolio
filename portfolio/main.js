var typed = new Typed(".text",{
    strings:[" Frontend developer"," Android developer"," Web designer"],
    typeSpeed:100 ,
    backSpeed:100 ,
    backDelay:1000 ,
    loop:true

});

document.querySelectorAll('.scroll-to').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openProjectModal(projectId) {
    document.getElementById(projectId + 'Modal').style.display = 'flex';
}

function closeProjectModal(projectId) {
    document.getElementById(projectId + 'Modal').style.display = 'none';
}

// Function to handle resume download
function downloadResume() {
    // Replace 'path_to_resume_file' with the actual path to your resume file
    var resumeFilePath = 'resume.pdf '; // Example: 'resume.pdf'

    // Create an anchor element to trigger the download
    var downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;

    // Set the download attribute to specify the filename
    downloadLink.download = 'Thirisa_Palanivel_Resume'; // Example: 'Thirisa_Palanivel_Resume.pdf'

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Click the download link
    downloadLink.click();

    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
}

// Get the resume button
var resumeBtn = document.getElementById("resumeBtn");

// Add a click event listener to the resume button
resumeBtn.addEventListener("click", function(event) {
    // Prevent the default action of the link (i.e., navigating to another page)
    event.preventDefault();

    // Call the function to download the resume
    downloadResume();
});
