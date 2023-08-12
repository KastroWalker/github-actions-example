const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('/', () => {
  it("should return 200 and 'Home Page' in the response", async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Home page');
  });
});

describe('/contact', () => {
  it("should return 200 and 'Contact Page' in the response", async () => {
    const response = await request.get('/contact');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Contact page');
  });
});
