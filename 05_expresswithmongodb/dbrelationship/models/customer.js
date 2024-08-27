//create orders in collection
//create customer collection
//Define schema in customer collection
//then add the created orders in customer

const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb://localhost:27017/relationdb";

main();

async function main() {
  await mongoose.connect(MONGODB_URL);
}

const ordersSchema = new Schema({
  name: String,
  price: Number,
});

const Order = mongoose.model("Order", ordersSchema);
const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    const result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
});

const Customer = mongoose.model("Customer", customerSchema);

const addOrders = async () => {
  const res = await Order.insertMany([
    { name: "chips", price: 10 },
    { name: "chocolate", price: 100 },
    { name: "pizza", price: 200 },
  ]);
};

// addOrders();

const addCustomer = async () => {
  const customer1 = new Customer({
    name: "lusiana",
  });
  const order1 = await Order.findOne({ name: "chips" });
  const order2 = await Order.findOne({ name: "chocolate" });
  customer1.orders.push(order1);
  customer1.orders.push(order2);
  const res = await customer1.save();
  console.log(res);
};

// addCustomer();

const findCustomer = async () => {
  const result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

// findCustomer();
//creating mongoose pre and pos middlewares

// const addCustomer = async () => {
//   const newCust = new Customer({
//     name: "karan arjun",
//   });
//   const newOrder = new Order({
//     name: "pizza",
//     price: 250,
//   });
//   newCust.orders.push(newOrder);
//   newOrder.save();
//   newCust.save();
//   console.log("added new customer");
// };

// addCustomer();

const delCust = async () => {
  const res = await Customer.findByIdAndDelete("66cd5b16e43d082380b36ef9");
  console.log(res);
};

delCust();
