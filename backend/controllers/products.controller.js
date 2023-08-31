const request = require('request');

module.exports.getproducts = async (req, res) => {
  const options = {
   url: 'https://dummyjson.com/products',
   json: true,
   method: 'Get',
 }
 console.log(options)
 await request(options, (err, response, body) => {
   console.log(body)

   if (err) {
     res.json(err)
   } else {
     res.json(body)

   }
 });

}

