API_URL = "https://api.escuelajs.co/api/v1/products?limit=18&offset=1";
const app = document.getElementById("app");

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

getData(API_URL).then((data) => {
  data.map((item) => {
    app.innerHTML += `
        <div class="p-3 bg-slate-300 hover:bg-slate-500 transition rounded-lg flex flex-col hover:text-white justify-center text-center hover:cursor-pointer hover:scale-105">
            <h2 class="font-bold my-3">${item.title}</h2>
            <img class="rounded-lg" src="${item.images[0]}" alt="${item.title}">
        </div>`;
  });
});
