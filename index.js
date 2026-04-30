//This is the snippet to snatch data from database
//to display to the main page



let displayData = {
    "--Title1--": {
        description: "Made a new GUI for a website",
        xp: "100",
        link: "https://www.google.com"
        
    },
    "Title2": {
        description: "Made a brand new sign in system",
        xp: "200",
        link: "https://www.youtube.com"
    }
};

// Get the container where posts will go
const postsContainer = document.getElementById("highlights");

// Loop through all posts in displayData
for (const [description, details] of Object.entries(displayData)) {
    const postHTML = `
   


    <div class="post">
      <p class="title">"${details.description}"<p>
      <p class="xp">+ ${details.xp}<strong>xp</strong></p>
      <p class="info"><a href=" ${details.link} " class="info-link"><i class="fa-solid fa-circle-info"></i></a></p>
    </div>
    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}