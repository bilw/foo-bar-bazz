var MessageSvc = function(){
  var msg = "hello world";  
};

MessageSvc.prototype = {
    random500: function(){
        return 50 + Math.random()*100;
    },
    findFoo: function(id){
        var dfd = Q.defer();
        setTimeout(function(){
            var result = _.find(db.foos, { id: id});
            if(result)
                return dfd.resolve(result);
            dfd.reject("no foo");
        }, this.random500());
        return dfd.promise;
    },
    findBar: function(foo){
        var dfd = Q.defer();
        setTimeout(function(){
            var result = _.find(db.bars, { id: foo.bar_id});
            if(result)
                return dfd.resolve(result);
            dfd.reject("no bar");
        }, this.random500());
        return dfd.promise;
    },
    findBazz: function(foo){
        var dfd = Q.defer();
        setTimeout(function(){
            var result = _.find(db.bazzes, { id: foo.bazz_id});
            if(result)
                return dfd.resolve(result);
            dfd.reject("no bazz");
        }, this.random500());
        return dfd.promise;
    },
    getMessage : function(id){
        var that = this;
        var dfd = Q.defer();
        this.findFoo(id)
            .then(function(foo){
                Q.all([that.findBar(foo), that.findBazz(foo)])
                    .spread(function(bar, bazz){
                        dfd.resolve(bar.msg + " " + bazz.msg);
                    })
                    .catch(function(err){
                        dfd.reject(err);
                    });
            })
            .catch(function(ex){
                dfd.reject(ex);
            });
        return dfd.promise;
    }
};
