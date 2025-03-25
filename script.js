// Function to download the resume
function downloadResume() {
  const resumeLink = document.createElement('a');
  resumeLink.href = 'resume.pdf'; // Path to your resume PDF file
  resumeLink.download = 'My_Resume.pdf';
  resumeLink.click();
}
