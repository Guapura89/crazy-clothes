const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("categories");

API_URL = "https://api.escuelajs.co/api/v1/users";
API_CAT = "https://api.escuelajs.co/api/v1/products";

// Get user
const getData = async (url_api) => {
  try {
    const response = await axios.get(url_api);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const users = getData(API_URL).then((data) => {
  // Users
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Octubre", "Diciembre", "Enero", "Febrero", "Marzo"],
      datasets: [
        {
          label: "User history",
          data: [2, 7, 5, 10, data.length],
          borderWidth: 5,
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

const categories = getData(API_CAT).then((data) => {
  // Categories
  const clothes = data.filter((item) => item.category.name === "Clothes");
  const electronics = data.filter(
    (item) => item.category.name === "Electronics"
  );
  const forniture = data.filter((item) => item.category.name === "Furniture");
  const shoes = data.filter((item) => item.category.name === "Shoes");
  const others = data.filter((item) => item.category.name === "Others");

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Clothes", "Electronics", "Fortniture", "Shoes", "Others"],
      datasets: [
        {
          label: "Items per category",
          data: [
            clothes.length,
            electronics.length,
            forniture.length,
            shoes.length,
            others.length,
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
          ],
          borderWidth: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
