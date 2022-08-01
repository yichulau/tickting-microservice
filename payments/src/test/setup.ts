import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';
declare global {
    var signin: ()=> string[];
}

jest.mock('../nats-wrapper');
let mongo: any;

beforeAll(async()=> {
    process.env.JWT_KEY = 'asdf'
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose.connect(mongoUri, {});
});

beforeEach(async ()=> {
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections){
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    if (mongo) {
      await mongo.stop();
    }
    await mongoose.connection.close();
});

global.signin = () => {

    // build a JWT payload. { id, email, iat }
    // create the JWT
    // Build session object
    // Take JSON and encode it as base64
    // return a string that  the cookie

    const payload = {
        id: '31232321',
        email: 'test@test.com'
    }

    const token = jwt.sign(payload, process.env.JWT_KEY!);

    const session = { jwt: token};
    const sessionJSON = JSON.stringify(session);
    const base64 = Buffer.from(sessionJSON).toString('base64');
    return [`session=${base64}`];
};