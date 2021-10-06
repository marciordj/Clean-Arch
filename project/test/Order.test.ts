import Order from "../src/Order";

test("Should be create an order with invalid cpf", () => {
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid cpf"));
});

test("Should be create an order", () => {
  const order = new Order("450-238-008-30");
  expect(order).toBeDefined();
});

test("Should be create an order with 3 itens", () => {
  const order = new Order("450-238-008-30")
  order.addItem(new Item(1, "Colecionaveis", "Manopla do infinito", 2000), 1);
  order.addItem(new Item(2, "Colecionaveis", "Joia da alma", 2200), 1);
  order.addItem(new Item(3, "Colecionaveis", "Joia do poder", 5000), 1);
  const total = order.getTotal();
  expect(total).toBe(9200)
});