
//This is the snippet to snatch data from database
//to display to the main page



let displayData = {
    "Video scrolling app": {
        number: "1",
        
        Description: "A video-scrolling app where users swipe through short, visual note formats like mind maps, collapsible headings, and structured summaries designed for fast, intuitive learning.",
        demoLink: "https://thomas-music-dev.github.io/video-scrolling-app/index.html",
        projectLogs: "https://www.youtube.com/embed/Sw_PFCPWxCE?si=qXAbel8ukFVvaBN0",
        github: "youtube.com",
        
    },
    "Web browser FPS Game": {
        number: "2",

        Description: "Another video example",
        demoLink: "https://www.youtube.com/watch?v=abcd1234",
        projectLogs: "https://www.youtube.com/embed/abcd1234",
        github: "youtube.com",
        
    }
};

// Get the container where posts will go
const postsContainer = document.getElementById("blog-posts");

// Loop through all posts in displayData
for (const [title, details] of Object.entries(displayData)) {
    const postHTML = `
   


    <div class="post post${details.number}">
      <h1>${title}</h1>
      <div class="button-container">
            <button class="logs-button"><a href="${details.projectLogs}" class="demo-link">Project Logs</a></button>
            <button class="demo-button"><a href="${details.demoLink}" > Live Demo </a></button>
            
      </div>
      
      <p><strong>GitHub:</strong> <a href="https://${details.github}" target="_blank">${details.github}</a></p>
      <p><strong>Description:</strong> ${details.Description} </p>
      <br>
      <br>
    </div>
    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}
