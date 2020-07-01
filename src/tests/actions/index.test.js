import {
  getRestaurants,
  getRestaurantsToReducer,
  setFilteredRestaurants,
  setInputSearch,
} from "../../actions/index";

const restaurants = {
  restaurants: [
    {
      id: "1",
      name: "Habibs",
      logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
      deliveryTime: 60,
      category: "Árabe",
      description:
        "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
      shipping: 6,
      address: "Rua das Margaridas, 110 - Jardim das Flores",
    },
    {
      id: "10",
      name: "Tadashii",
      logoUrl: "http://soter.ninja/futureFoods/logos/tadashii.png",
      deliveryTime: 50,
      category: "Asiática",
      description:
        "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
      shipping: 13,
      address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
    },
  ],
};

const inputData = "hamburguer";
//executa ação mock
test("Check data action getRestaurantsToReducer", () => {
  const mockGetRestaurantsToReducer = getRestaurantsToReducer(restaurants);
  // verifica os dados
  expect(mockGetRestaurantsToReducer).toBeDefined();
  expect(mockGetRestaurantsToReducer.type).toEqual("GET_RESTAURANTS");
  expect(mockGetRestaurantsToReducer.payload).toEqual(restaurants);
});

test(" Check data action setFilteredRestaurants", () => {
  const mockSetFilteredRestaurants = setFilteredRestaurants(restaurants);
  // verifica os dados
  expect(mockSetFilteredRestaurants).toBeDefined();
  expect(mockSetFilteredRestaurants.type).toEqual("SET_FILTERED_RESTAURANTS");
  expect(mockSetFilteredRestaurants.payload).toEqual(restaurants);
});

test("Check data action setInputSearch", () => {
  //executa ação mock
  const mockSetInputSearch = setInputSearch(inputData);
  // verifica os dados
  expect(mockSetInputSearch).toBeDefined();
  expect(mockSetInputSearch.type).toEqual("SET_INPUT_SEARCH");
  expect(mockSetInputSearch.payload).toEqual({ inputData: inputData });
});
