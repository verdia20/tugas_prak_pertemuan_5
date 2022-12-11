const tbody = document.querySelector("tbody");

const selector = document.querySelector("select");

const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;   
};

const render = (data) => {
  tbody.innerHTML = "";

  data.forEach((item, n) => {
    const tr = document.createElement("tr");
    const no = document.createElement("td");   
    no.textContent = n + 1;
    tr.appendChild(no);

    const nim = document.createElement("td");
    nim.textContent = item.nim;
    tr.appendChild(nim);

    const name = document.createElement("td");
    name.textContent = item.nama;
    tr.appendChild(name);

    const prodi = document.createElement("td");
    prodi.textContent = item.prodi;
    tr.appendChild(prodi);

    tbody.appendChild(tr);
  });
};

const data = getData().then((data) => {
  render(data);
});

selector.addEventListener("change", (e) => {
  const data = getData().then((data) => {
    if (e.target.value === "0") {
      render(data);
    } else {
      const filtered = data.filter((item) => item.prodi === e.target.value);
      render(filtered);
    }
  });
});