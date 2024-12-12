// Initial news array
let news = [
  {
    id: 1,
    title: "Finance",
    content: "Should we just start printing money?...",
  },
  { id: 2, title: "Sport", content: "Theres a ball in this one " },
  {
    id: 3,
    title: "Weather",
    content:
      "Raining literal cats and dogs, residents urged to get all their vaccines",
  },
];

// Variable to store the interval ID
let intervalId;

// Function to update the news on the page
function updateNews() {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = ""; // Clear the container

  // Loop through the news array and create elements for each news item
  news.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";

    const newsTitle = document.createElement("div");
    newsTitle.className = "news-title";
    newsTitle.textContent = item.title;

    const newsContent = document.createElement("div");
    newsContent.textContent = item.content;

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsContent);
    newsContainer.appendChild(newsItem);
  });
}

// Function to add a new news item to the array
function addNews() {
  const title = document.getElementById("newsTitle").value;
  const content = document.getElementById("newsContent").value;

  if (title && content) {
    const newId = news.length ? news[news.length - 1].id + 1 : 1;
    news.push({ id: newId, title, content });
    document.getElementById("newsTitle").value = "";
    document.getElementById("newsContent").value = "";
  }
}

// Function to stop the interval from updating the news
function stopUpdates() {
  clearInterval(intervalId);
}

// Initial load of news
updateNews();

// Update news every 5 seconds
intervalId = setInterval(updateNews, 5000);
