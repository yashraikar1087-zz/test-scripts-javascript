const request=require('supertest');
const expect=require('expect');

var app=require('./server').app;

it('should return hello respose',(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect('hello')
    .end(done);
});

it('should return my user object',(done)=>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res)=>{
        expect(res.body).toInclude({
            name:'Jen',
            age:24
        });
    })
    .end(done);
});