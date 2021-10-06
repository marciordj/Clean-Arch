import Order from "../src/Order";

test("Should be create an order with invalid cpf", () => {
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid cpf"));
})

test("Should be create an order", () => {
  const order = new Order("450-238-008-30");
  expect(order).toBeDefined();
})