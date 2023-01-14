fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const votingSection = document.querySelector('.jobs');
      data.forEach(item => {
        const votingBox = document.createElement('div');
        votingBox.classList.add('job');

        const title = document.createElement('h2');
        title.textContent = item.title;
        votingBox.appendChild(title);

        const url = document.createElement('a');
        url.href = "https://devnics.com/discord";

        const button = document.createElement("button");
        button.textContent = "Apply";

        url.appendChild(button);

        votingBox.appendChild(url);

        const desc = document.createElement("p");

        let html = item.description.join("<br>");

        desc.innerHTML = html;
        votingBox.appendChild(desc);
        votingSection.appendChild(votingBox);
      });
    })
    .catch(error => console.log(error));