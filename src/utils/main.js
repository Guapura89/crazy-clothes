//import fetch from "node-fetch";

API_URL = "https://api.escuelajs.co/api/v1/users";
const app = document.getElementById("app");

// Get user
const getData = async (url_api) => {
  try {
    app.innerHTML =
      '<h1 class="text-4xl font-bold text-center">Loading...</h1>';
    const response = await axios.get(url_api);
    const data = response.data;
    app.innerHTML = "";
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Post user
const postData = async (url_api) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const avatar = "https://cdn-icons-png.flaticon.com/128/2202/2202112.png";
  const datas = {
    email,
    name,
    password,
    role: "customer",
    avatar,
  };
  try {
    const response = await fetch(url_api, {
      method: "post",
      body: JSON.stringify(datas),
      headers: { "Content-Type": "application/json" },
    });
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Post para crear un nuevo item
function createUser() {
  postData(API_URL).then((res) => {
    console.log(res);
    window.location.reload();
  });
}

// Aqui obtenemos los datos y listamos los items
getData(API_URL).then((data) => {
  data.map((item) => {
    app.innerHTML += `
        <div class="px-3 bg-slate-300 hover:bg-slate-500 transition rounded-lg flex flex-col hover:text-white justify-center text-center hover:cursor-pointer hover:scale-105">
            <h2 class="font-bold my-3">${item.name}</h2>
            <img class="rounded-lg" src="${item.avatar}" alt="${item.name}">
        </div>`;
  });
});
