document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("postContainer");
  const postForm = document.getElementById("postForm");
  const postLimit = document.getElementById("postLimit");

  const fetchPosts = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const posts = await response.json();
    displayPosts(posts);
  };

  const displayPosts = (posts) => {
    postContainer.innerHTML = "";
    posts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className = "col-md-4 mb-4";
      postCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            `;
      postContainer.appendChild(postCard);
    });
  };

  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const limit = postLimit.value;
    fetchPosts(limit);
  });

  fetchPosts();
});
