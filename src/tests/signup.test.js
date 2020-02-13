import Chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { user, token } from './mockData/user.mock';

Chai.use(chaiHttp);
Chai.should();

describe('Barefoot nomad signup tests', () => {
  it('users should be able to create accounts', (done) => {
    Chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.data.should.have.property('email', user.email);
        res.body.data.should.have.property('firstName', user.firstName);
        res.body.data.should.have.property('lastName', user.lastName);
        res.body.should.have.property('message');
        done();
      });
  });

  it('users should be able to verify their accounts', (done) => {
    Chai
      .request(app)
      .get(`/api/v1/auth/verify/${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message', 'Your account is verified, you can now login');
        done();
      });
  });
});
