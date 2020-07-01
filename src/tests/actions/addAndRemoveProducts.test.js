import {
  saveProducts,
  saveProductsToReducer,
  removeProdutcs,
  removeProductsToReducer,
} from "../../actions/addAndRemoveProducts";

const mockData = {
  quantity: 5,
  id: "3vcYYSOEf8dKeTPd7vHe",
  price: 15,
  title: "Pastel",
  description: "Pastel autêntico, feito na hora!",
  img: "urlImage",
};

const mockId = 1;

test("Check  dispatch action  removeProdutcs", () => {
  const dispatch = jest.fn();
  removeProdutcs(mockId)(dispatch);
  expect(dispatch).toBeDefined();
  expect(dispatch).toHaveBeenCalledWith({
    payload: mockId,
    type: "REMOVE_PRODUCTS",
  });
});

test("Check action data removeProductsToReducer", () => {
  const MockRemoveProductsToReducer = removeProductsToReducer(mockId);
  expect(MockRemoveProductsToReducer.payload).toBeDefined();
  expect(MockRemoveProductsToReducer.payload).toEqual(mockId);
  expect(MockRemoveProductsToReducer.type).toEqual("REMOVE_PRODUCTS");
});

test("Check dispatch action  saveProducts", () => {
  const dispatch = jest.fn();
  saveProducts(mockData)(dispatch);
  expect(dispatch).toBeDefined();
  expect(dispatch).toHaveBeenCalledWith({
    payload: mockData,
    type: "SAVE_PRODUCTS",
  });
});

test("Check action data saveProductsToReducer ", () => {
  const MocksaveProductsToReducer = saveProductsToReducer(mockData);
  expect(MocksaveProductsToReducer.payload).toBeDefined();
  expect(MocksaveProductsToReducer.payload).toEqual(mockData);
  expect(MocksaveProductsToReducer.type).toEqual("SAVE_PRODUCTS");
});
