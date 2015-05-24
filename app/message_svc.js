var MessageSvc = function(){
  var msg = "hello world";  
};

MessageSvc.prototype = {
    random500: function(){
        return 100 + Math.random()*100;
    },
    findFoo: function(id, cb){
        setTimeout(function(){
            var result = _.find(db.foos, { id: id});
            cb(result);
        }, this.random500());
    },
    findBar: function(foo, cb){
        setTimeout(function(){
            var result = _.find(db.bars, { id: foo.bar_id});
            cb(result);
        }, this.random500());
    },
    findBazz: function(foo, cb){
        setTimeout(function(){
            var result = _.find(db.bazzes, { id: foo.bazz_id});
            cb(result);
        }, this.random500());
    },
    getMessage : function(id, cb){
        var that = this;
        this.findFoo(id, function(foo){
            if(!foo)
                return cb("no foo");
            var bar = null;
            var bazz = null;
            that.findBar(foo, function(_bar){
                if(!_bar)
                    return cb("no bar");
               bar = _bar; 
               if(bazz && bar)
                cb(null, bar.msg + " " + bazz.msg);
            });
            that.findBazz(foo, function(_bazz){
                if(!_bazz)
                    return cb("no bazz");
               bazz = _bazz; 
               if(bazz && bar)
                cb(null, bar.msg + " " + bazz.msg);
            });
        });
    }
};
