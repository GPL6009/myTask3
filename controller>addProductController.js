const database = require('../controller/database');
const multer  = require('multer')
const path = require('path');
// const upload = multer({ dest: 'uploads/' })

exports.addProduct = function (req, res) {
    console.log("this is add product");

        //email verification starts
        var query = 'SELECT * FROM addProduct';
        database.query(query, function (err, result) {
            if (err) throw err;            
    
            if(result.length > 0){
                res.json({
                    data:result
                });
            }
            
        });// verification ends

}


//
exports.productDetails = function (req, res) {
    console.log("this is product Details");


    var title    = req.body.title;

    var description = req.body.description;

    var pImage = req.body.pImage;
    
    var price = req.body.price;

    console.log("title:",title);

    var query = `
INSERT INTO addProduct 
(productTitle, description, image, price ) 
VALUES ("${title}", "${description}", "${pImage}", "${price}" )
`;

database.query(query, function (err, result) {
    if (result < 0) {
        console.log('no data');
    }
    if (err) {

        throw err;
    }
    else {

        console.log("rows are inserted");
        var message = "success";
    }
    //res.send(console.log('wow you done..!'));
    res.json({
        data:message
    });

});


}
