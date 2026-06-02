
//This is the snippet to snatch data from object
//to display to the main page


let displayData = {
    "Video scrolling app": {
        number: "1",
        description: "Why the F-35 and MQ-9 dskfhjlkshflfd",
        demoLink: "https://www.youtube.com/watch?v=XwZ3Q0Km-Ow",
        projectLogs: "https://www.youtube.com/embed/Sw_PFCPWxCE?si=qXAbel8ukFVvaBN0",
        github: "youtube.com",

        metrics: {
            marketDemand: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            painLevel: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            existingSpending: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            competitionQuality: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            growthTrend: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            audienceReach: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            mvpFeasibility: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            monetization: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            }
        }
    },

    "Web browser FPS Game": {
        number: "2",
        description: "Another video example",
        demoLink: "https://www.youtube.com/watch?v=abcd1234",
        projectLogs: "https://www.youtube.com/embed/abcd1234",
        github: "youtube.com",

        metrics: {
            marketDemand: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            painLevel: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            existingSpending: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            competitionQuality: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            growthTrend: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            audienceReach: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            mvpFeasibility: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            },
            monetization: {
                value: "data",
                sources: ["source1", "source1", "source1",]
            }
        }
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

      <h1>Market Research Conducted</h1>

<div class="table-container">

<table>

    <thead>
        <tr>
            <th>Category</th>
            <th>Real-World Unit of Measure</th>
            <th>Data Recorded</th>
            <th>Sources Footnoted</th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>Market demand</td>
            <td>
                Monthly search volume, active users,
                forum activity, waitlists, app downloads
            </td>
            <td class="empty-cell">${details.metrics.marketDemand.value}</td>
            <td class="empty-cell">${details.metrics.marketDemand.sources}</td>
        </tr>

        <tr>
            <td>Pain level</td>
            <td>
                Frequency of complaints, time/money lost,
                support ticket volume, negative reviews
            </td>
            <td class="empty-cell">${details.metrics.painLevel.value}</td>
            <td class="empty-cell">${details.metrics.painLevel.sources}</td>
        </tr>

        <tr>
            <td>Existing spending</td>
            <td>
                Average customer spend, competitor pricing,
                annual market size, ad spend
            </td>
            <td class="empty-cell">${details.metrics.existingSpending.value}</td>
            <td class="empty-cell">${details.metrics.existingSpending.sources}</td>
        </tr>

        <tr>
            <td>Competition quality</td>
            <td>
                Number of strong competitors, feature depth,
                review scores, funding levels
            </td>
            <td class="empty-cell">${details.metrics.competitionQuality.value}</td>
            <td class="empty-cell">${details.metrics.competitionQuality.sources}</td>
        </tr>

        <tr>
            <td>Growth trend</td>
            <td>
                Google Trends growth %, year-over-year market growth,
                community growth rate
            </td>
            <td class="empty-cell">${details.metrics.growthTrend.value}</td>
            <td class="empty-cell">${details.metrics.growthTrend.sources}</td>
        </tr>

        <tr>
            <td>Ease of reaching audience</td>
            <td>
                CPC (cost per click), CPM,
                follower/community size, SEO difficulty
            </td>
            <td class="empty-cell">${details.metrics.audienceReach.value}</td>
            <td class="empty-cell">${details.metrics.audienceReach.sources}</td>
        </tr>

        <tr>
            <td>MVP feasibility</td>
            <td>
                Estimated development hours,
                infrastructure cost, team size required
            </td>
            <td class="empty-cell">${details.metrics.mvpFeasibility.value}</td>
            <td class="empty-cell">${details.metrics.mvpFeasibility.sources}</td>
        </tr>

        <tr>
            <td>Monetization potential</td>
            <td>
                Average revenue per user (ARPU),
                lifetime value (LTV), conversion rate
            </td>
            <td class="empty-cell">${details.metrics.monetization.value}</td>
            <td class="empty-cell">${details.metrics.monetization.sources}</td>
        </tr>

    </tbody>

</table>

</div>


    </div>
    <hr>
  `;

    postsContainer.innerHTML += postHTML;
}
