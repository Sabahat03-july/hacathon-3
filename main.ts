document.getElementById("resume-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skills: string[] = [];
    
    const skillsCheckboxes = document.querySelectorAll<HTMLInputElement>(".skills-checkbox input:checked");
    skillsCheckboxes.forEach((checkbox) => {
      skills.push(checkbox.value);
    });
  
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
    
    // Get profile image if available
    const profileImgSrc = (document.getElementById("profile-img-src") as HTMLImageElement).src;
  
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
  
    document.getElementById("resume-content")!.innerHTML = resumeContent;
    document.getElementById("resume-output")!.style.display = "block";
  });
  