"use strict";
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    var _a;
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const work = document.getElementById("work").value;
    const skills = [];
    const skillsCheckboxes = document.querySelectorAll(".skills-checkbox input:checked");
    skillsCheckboxes.forEach((checkbox) => {
        skills.push(checkbox.value);
    });
    const gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    // Get profile image if available
    const profileImgSrc = document.getElementById("profile-img-src").src;
    // Dynamically create resume
    const resumeContent = `
      <div><h3>Name: ${name}</h3></div>
      <div><h3>Email: ${email}</h3></div>
      <div><h3>Phone: ${phone}</h3></div>
      <div><h3>Education: ${education}</h3></div>
      <div><h3>Work Experience: ${work}</h3></div>
      <div><h3>Skills: ${skills.join(", ")}</h3></div>
      <div><h3>Gender: ${gender}</h3></div>
      <div><h3>Profile Image: <img src="${profileImgSrc}" alt="Profile"></h3></div>
    `;
    document.getElementById("resume-content").innerHTML = resumeContent;
    document.getElementById("resume-output").style.display = "block";
});
