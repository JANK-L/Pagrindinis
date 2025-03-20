/*axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const naujaUzduotis = {
  userID: 1,
  id: 101,
  title: "Mano nauja uzduotis",
  body: "Reikia uzsakyti picos",
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", naujaUzduotis)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
*/
const getStoreProducts = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/ability/${id}/`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

getStoreProducts(3);
