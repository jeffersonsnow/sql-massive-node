var app = require('./server');
var db = app.get('db');
module.exports = {
  create: function(req, res, next){
      var product = req.body;
      db.create_product([product.name, product.description, product.price, product.imageurl], function(err, response){
        if(err){
          console.log("error!");
          res.json(err);
        }
        else {
        console.log("I got this far");
        res.json(response);
      }
    });
  },
  getAll: function(req, res, next){
      db.read_products([], function(err, allproducts){
        if(err){
          res.json(err);
        } else{
          res.json(allproducts);
        }
      });
  },
  getOne: function (req, res, next){
      if(req.params.productid){
        db.read_product([req.params.productid], function(err, response){
          if(err){
            res.json(err);
          }else{
            res.json(response);
          }
        });
      }
  },
  // update: function(req, res, next){
  //   if(req.body.productid){
  //     db.update_product([req.body.productid, req.body.description], function(err, response){
  //       if(err){
  //         res.json(err);
  //       }else{
  //         res.json(response);
  //       }
  //     });
  //   }
  // },
  update: function(req, res, next){ 
  db.update_product([req.params.productid, req.query.description], function(err, response){
    if(err){
      res.json(err);
    } else {
      res.json(response);
    }
  });
  },
  delete: function (req, res, next){
      if(req.params.productid){
        db.delete_product([req.params.productid], function(err, response){
          if(err){
            res.json(err);
          }else{
            res.json(response);
          }
        });
      }
  }


  };
