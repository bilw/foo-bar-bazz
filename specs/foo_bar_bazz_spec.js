describe("My Sanity", function(){
    var sanity = true;
    it("exists", function(){
        expect(sanity).toBeTruthy();
    });
});

describe("db", function(){
    describe("foos", function(){
        it("there are 6 of them", function(){
            expect(db.foos.length).toEqual(6);
        });
    });
    describe("bars", function(){
        it("there are 2 of them", function(){
            expect(db.bars.length).toEqual(2);
        });
    });
    describe("bazzes", function(){
        it("there are 2 of them", function(){
            expect(db.bazzes.length).toEqual(2);
        });
    });
});

describe("MessageSvc", function(){
    var svc;
    var msg;
    var err;
    beforeEach(function(done){
        svc = new MessageSvc();
        msg = null;
        err = null;
        done();
        
    });
    var computeResult = function(id, done){
        svc.getMessage(id, function(_err, _msg){
            if(_err)
                err = _err;
            else
                msg = _msg;
            done();
        });
    };
    describe("getMessage", function(){
        describe("when foo id is 1", function(){
            beforeEach(function(done){
               computeResult(1, done); 
            });
            it("return hello world", function(){
                expect(msg).toEqual("hello world");
            });
        });
        describe("when foo id is 2", function(){
            beforeEach(function(done){
               computeResult(2, done); 
            });
            it("return hello world", function(){
                expect(msg).toEqual("hello galaxy");
            });
        });
        describe("when foo id is 3", function(){
            beforeEach(function(done){
               computeResult(3, done); 
            });
            it("return hello world", function(){
                expect(msg).toEqual("goodbye world");
            });
        });
        describe("when foo id is 4", function(){
            beforeEach(function(done){
               computeResult(4, done); 
            });
            it("return hello world", function(){
                expect(msg).toEqual("goodbye galaxy");
            });
        });
        describe("when foo id is 8", function(){
            beforeEach(function(done){
               computeResult(8, done); 
            });
            it("return hello world", function(){
                expect(err).toEqual("no foo");
            });
        });
        describe("when foo id is 5", function(){
            beforeEach(function(done){
               computeResult(5, done); 
            });
            it("return hello world", function(){
                expect(err).toEqual("no bar");
            });
        });
        describe("when foo id is 6", function(){
            beforeEach(function(done){
               computeResult(6, done); 
            });
            it("return hello world", function(){
                expect(err).toEqual("no bazz");
            });
        });
    });
});