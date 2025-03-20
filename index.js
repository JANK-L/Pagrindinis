window.addEventListener("DOMContentLoaded", () => renderPosts());

const container = document.querySelector(".irasai");

const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  console.log(term);
  if (term) {
    uri += `&q=${term}`;
  }
  console.log(uri);
  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);
  let template = "";
  posts.forEach((post) => {
    template += `
    <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="details.html?id=${post.id}">Plačiau</a>
    </div>`;
  });
  container.innerHTML = template;
};

const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});
