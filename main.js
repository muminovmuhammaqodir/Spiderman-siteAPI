const postCards = document.querySelector(".cards");

posts = [];

fetch("https://www.omdbapi.com/?s=Spider+Man&plot=full&apikey=c0489a0c")
	.then((response) => response.json())
	.then((json) => {
		posts = json.Search;
		renderpost(posts);
	});
function renderpost(posts) {
	// postCards.innerHTML = "";

	posts.forEach((item) => {
		const name = item.Title,
			img = item.Poster,
			Year = item.Year,
			body = item.body,
			id = item.id;

		const card = document.createElement("div");
		card.classList = " mb-4";
		card.innerHTML = `<div
                                class="border rounded-2 shadow-lg p-4 d-flex flex-column gap-3 align-items-start mb-1">
                                <img
                                    class="w-100 rounded"
                                    src="${img}"
                                    alt="random image" />
                                <h1 class="mt-2 text-secondary fs-3 text-start">
                                    ${name}
                                </h1>
                                <p class="text-center text-secondary fs-5 fw-bolder">
                                    Year:
                                    <span class="fs-6 text-primary fw-lighter"
                                        >${Year}</span
                                    >
                                </p>
                                <p class="text-start text-secondary opacity-75">
                                   Spider-Man has always held a small place in my heart; the spider-like hero swinging from building to building has always mesmerized me, particularly as a child.
                                </p>
                                <a href="https://www.youtube.com/watch?v=Ph1Sig_ozm8" id="deleteBtn" data-id="${id}" class="btn btn-primary mx-auto w-100 shadow-sm">
                                    Ko'rish
                                </a>
                             </div>`;

		postCards.appendChild(card);
	});
}
