// Navbar page
fetch("navbar.html")
.then(response => response.text())
.then(data => document.getElementById("navbar-container").innerHTML = data);


// Companies Page

document.addEventListener("DOMContentLoaded", function() {
    const jobList = document.getElementById("job-list");
    const jobs = [
        { title: "Web Developer", description: "Looking for a skilled web developer to build a landing page.", stipend: "$500", author: "John Doe", company: "TechCorp" },
        { title: "Graphic Designer", description: "Need a creative designer for a company logo.", stipend: "$300", author: "Jane Smith", company: "DesignPro" },
        { title: "Content Writer", description: "Looking for a writer to create SEO-friendly articles.", stipend: "$400", author: "Alex Johnson", company: "WriteWell" },
        { title: "Web Developer", description: "Looking for a skilled web developer to build a landing page.", stipend: "$500", author: "John Doe", company: "TechCorp" },
        { title: "Graphic Designer", description: "Need a creative designer for a company logo.", stipend: "$300", author: "Jane Smith", company: "DesignPro" },
        { title: "Content Writer", description: "Looking for a writer to create SEO-friendly articles.", stipend: "$400", author: "Alex Johnson", company: "WriteWell" }
    ];
    
    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("col");
        jobCard.innerHTML = `
            <div class="job-card">
                <h4>${job.title}</h4>
                <p>${job.description}</p>
                <p><strong>Stipend:</strong> ${job.stipend}</p>
                <p><strong>👤 ${job.author}</strong> - ${job.company}</p>
                <button class="btn btn-apply">Apply Now</button>
                <button class="btn btn-save">Save for Later</button>
            </div>
        `;
        jobList.appendChild(jobCard);
    });
});

// Footer Page
fetch("footer.html")
.then(response => response.text())
.then(data => document.getElementById("footer-container").innerHTML = data);

