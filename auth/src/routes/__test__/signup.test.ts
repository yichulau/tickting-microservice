import request from 'supertest';
import { app } from '../../app';

it('to send email and password to get response', async () =>{
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);
});

it('it returns a 400 with an invalid email', async ()=>{ // negative test case
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'testtest.com',
        password: 'password'
    })
    .expect(400);
})

it('it returns a 400 with an invalid password', async ()=>{ // negative test case
    return request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'p'
    })
    .expect(400);
})

it('it returns a 400 with missing and password', async ()=>{ // negative test case
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
    })
    .expect(400);

    await request(app)
    .post('/api/users/signup')
    .send({

    })
    .expect(400);
});

it('disallows ducplicate emails', async ()=>{
    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201);

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(400);
})

it('set a cookie after successful signup', async ()=>{
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);
    
    expect(response.get('Set-Cookie')).toBeDefined();
})