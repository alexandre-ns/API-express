const should = require("should");
const request = require("supertest");
const app = require("../app");

describe("E-commerce API", () => {
  it("getAllProducts", async () => {
    const res = await request(app).get("/api/products");
    //console.log("===>",res.body.length);
    res.status.should.equal(200);
    res.body.should.be.an.Array();
    //res.body.length.should.equal(5);
  });

  it("getProductById", async () => {
    const res = await request(app).get(
      "/api/products/66864300572da0a1555898c8"
    );
    res.status.should.equal(200);
    res.body.should.be.an.Object();
    res.body.should.have.property("name");
  });

  it("should return 404 if the product does not exist", async () => {
    const res = await request(app).get("/api/products/00000");
    console.log("====>", res.body);
    //console.log("====>", res.message);
    res.status.should.equal(404);
    JSON.parse(res.text).should.have.property("message");
    //res.text.should.equal('Product not found');
  });

  /*it("should create a new product", async () => {
    const newProduct = { name: "Product 3", price: 300 };
    const res = await request(app).post("/api/products").send(newProduct);
    res.status.should.equal(201);
    res.body.should.have.property("id");
    res.body.should.have.property("name", "Product 3");
    res.body.should.have.property("price", 300);
  });*/
});
