function includeHTML(selector, url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Arquivo não encontrado: " + url);
            return response.text();
        })
        .then(data => {
            const container = document.querySelector(selector);
            container.innerHTML = data;
            if (callback && typeof callback === "function") {
                callback();
            }
        })
        .catch(error => console.error(error));
}

includeHTML("#includeHeader", "/includes/header.html", () => {
    if (typeof initHeader === "function") initHeader();
});
