const should = require('should');
const request = require('supertest');
const app = require('../app');

describe('E-commerce API', () => {
  it('getAllProducts', async () => {
    const res = await request(app).get('/api/products');
    res.status.should.equal(200);
    res.body.should.be.an.Array();
  });

  it('getProductById ok', async () => {
    const res = await request(app).get(
      '/api/products/66864300572da0a1555898c8'
    );
    res.status.should.equal(200);
    res.body.should.be.an.Object();
    res.body.should.have.property('name');
  });

  it('getProductById error', async () => {
    const res = await request(app).get('/api/products/00000');
    res.status.should.equal(404);
    JSON.parse(res.text).should.have.property('message');
  });

  /*it("createproduct", async () => {
    const newProduct = { name: "novo produto", price: 300 };
    const res = await request(app).post("/api/products").send(newProduct);
    res.status.should.equal(201);
    res.body.should.have.property("name", "novo produto");
    res.body.should.have.property("price", 30.95);
  });*/
});
