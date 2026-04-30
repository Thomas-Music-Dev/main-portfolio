
//This is the snippet to snatch data from database
//to display to the main page



let displayData = {
    "--Post Title1--": {
        number: "1",
        Date: "20250708",
        videoTitle: "Why the F-35 and MQ-9 dskfhjlkshflfd",
        videoLink: "https://www.youtube.com/watch?v=XwZ3Q0Km-Ow",
        videoEmbed: "https://www.youtube.com/embed/Sw_PFCPWxCE?si=qXAbel8ukFVvaBN0",
        github: "youtube.com",
        notes: ["apple", "banana", "cherry"]
    },
    "Post Title2": {
        number: "2",
        Date: "20250709",
        videoTitle: "Another video example",
        videoLink: "https://www.youtube.com/watch?v=abcd1234",
        videoEmbed: "https://www.youtube.com/embed/abcd1234",
        github: "youtube.com",
        notes: ["grape", "orange", "pear"]
    }
};

// Get the container where posts will go
const postsContainer = document.getElementById("blog-posts");

// Loop through all posts in displayData
for (const [title, details] of Object.entries(displayData)) {
    const postHTML = `
   


    <div class="post post${details.number}">
      <h1>${title}</h1>
      <p><strong>Date:</strong> ${details.Date}</p>
      <p><strong>Video Title:</strong> <br>${details.videoTitle}</p>
      <iframe width="415" height="245" src="${details.videoEmbed}" frameborder="0" allowfullscreen></iframe>
      <p><strong>GitHub:</strong> <a href="https://${details.github}" target="_blank">${details.github}</a></p>
      <p><strong>Notes:</strong><br>${details.notes.join("<br>")}</p>
      <br>
      <br>
    </div>
    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}
