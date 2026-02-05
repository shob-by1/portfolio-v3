fetch("data.json")
  .then(res => res.json())
  .then(data => {

    // HOME PAGE
    if (document.getElementById("name")) {

      // Profile
      name.innerText = data.profile.name;
      title.innerText = data.profile.title;
      intro.innerText = data.profile.intro;

      contacts.innerHTML = `
        <a href="mailto:${data.profile.emails[0]}">${data.profile.emails[0]}</a> |
        ${data.profile.phone}<br>
        <a href="${data.profile.linkedin}" target="_blank">LinkedIn</a> |
        <a href="${data.profile.github}" target="_blank">GitHub</a>
      `;

      // Skills
      data.skills.forEach(skill => {
        document.getElementById("skills").innerHTML += `<li>${skill}</li>`;
      });

      // Featured Projects
      data.projects.forEach(p => {
        document.getElementById("featured-projects").innerHTML += `
          <div class="item">
            <strong>${p.name}</strong> (${p.domain})
            <p>${p.description}</p>
            <a href="${p.github}" target="_blank">GitHub →</a>
          </div>
        `;
      });

      // Experience
      data.experience.forEach(exp => {
        experience.innerHTML += `
          <div class="item">
            <strong>${exp.role}</strong> – ${exp.organization} (${exp.duration})
            <p>${exp.details}</p>
          </div>
        `;
      });

      // Education
      data.education.forEach(ed => {
        education.innerHTML += `
          <div class="item">
            <strong>${ed.degree}</strong><br>
            ${ed.institution} (${ed.year})
          </div>
        `;
      });

      // Research
      data.research.forEach(r => {
        research.innerHTML += `
          <div class="item">
            <strong>${r.title}</strong>
            <p>${r.note}</p>
          </div>
        `;
      });
    }

    // PROJECTS PAGE
    const allProjects = document.getElementById("all-projects");
    if (allProjects) {
      data.projects.forEach(p => {
        allProjects.innerHTML += `
          <div class="item">
            <h3>${p.name}</h3>
            <p><b>Domain:</b> ${p.domain}</p>
            <p>${p.description}</p>
            <a href="${p.github}" target="_blank">GitHub Repository →</a>
            <p><b>Status:</b> ${p.status}</p>
          </div>
        `;
      });
    }

  });
