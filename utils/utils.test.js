const utils=require("./utils");
const expect=require("expect");

describe('Utils',()=>{
    it('should add two numbers',()=>{
        var res=utils.add(33,11);
        expect(res).toBe(44).toBeA('number');
        // if(res !==44){
        //     throw new Error(`Expected 44,but got ${res}`);
        // }
       
    });
    
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should sqaure a number',()=>{
        var res=utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should async sqaure a number',(done)=>{
        utils.asyncSquare(4,(sqaure)=>{
            expect(sqaure).toBe(16).toBeA('number');
            done();
        });
    });
    
    it('should expect some values',()=>{
        //expect(12).toNotBe(12);
        //expect({name:'Andrew'}).toEqual({name:'andrew'});
        // /expect([2,3,4]).toExclude(5);
    });
    
    it('should set firstName and lastName',()=>{
        var user={
            location:'Philadelphia',
            age:25
        };
        var res=utils.setName(user,"Yash Raikar");
        //console.log(res);
        //expect(user).toEqual(res);
        expect(res).toInclude({
            firstName:'Yash',
            lastName:'Raikar'
        });
    });
});

