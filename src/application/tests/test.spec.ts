import app from '../routes/app.routes';
import request from 'supertest';

describe('GET /swapis/peoples', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/swapis/peoples').send();
    expect(response.status).toBe(200);    
  });

  test('should respond with an array', async () => {
    const response = await request(app).get('/swapis/peoples').send();
    expect(response.body).toBeInstanceOf(Array);    
  });
});

describe('GET /swapis/planets', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/swapis/planets').send();
    expect(response.status).toBe(200);    
  });

  test('should respond with an array', async () => {
    const response = await request(app).get('/swapis/planets').send();
    expect(response.body).toBeInstanceOf(Array);    
  });
});

describe('GET /swapis/fusions', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/swapis/fusions').send();
    expect(response.status).toBe(200);    
  });

  test('should respond with an array', async () => {
    const response = await request(app).get('/swapis/fusions').send();
    expect(response.body).toBeInstanceOf(Array);    
  });
});