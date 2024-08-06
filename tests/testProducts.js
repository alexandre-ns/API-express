const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
(async () => {
  const chai = await import('chai');
  const expect = chai.expect;

  describe("test routes /products", () => {
    describe("GET /api/products", () => {
      it("should return all products", (done) => {
        request(app)
          .get("/api/products")
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            expect(res.body.length).to.equal(2);
            done();
          });
      });
    });
  });
})();

  /*describe("GET /api/products/:id", () => {
    it("should return a product by the given ID", (done) => {
      request(app)
        .get("/api/products/1")
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("name", "Product 1");
          done();
        });
    });

    it("should return 404 if the product does not exist", (done) => {
      request(app)
        .get("/api/products/999")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.text).to.equal("Product not found");
          done();
        });
    });
  });

  describe("POST /api/products", () => {
    it("should create a new product", (done) => {
      const newProduct = { name: "Product 3", price: 300 };
      request(app)
        .post("/api/products")
        .send(newProduct)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property("id");
          expect(res.body).to.have.property("name", "Product 3");
          expect(res.body).to.have.property("price", 300);
          done();
        });
    });
  });*/
//});
