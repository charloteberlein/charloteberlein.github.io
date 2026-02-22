function loadHTML(selector, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}
loadHTML("#header", "/header.html");
loadHTML("#footer", "/footer.html");