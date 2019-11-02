import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
const app = express();
const axios = require('axios');
const Buffer = require('buffer/').Buffer


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

//contact printful here && global variables

var storeData;
var variantData;

//this is the main configuration for the printful website
//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://api.printful.com/';
const apikey = Buffer.from("pxtgyt89-v2pd-q1o9:j8pj-hkqhi8s06pw1").toString('base64');
const config ={
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization':"Basic "+ apikey,
    }
}
//end of main setup

//this axios call is for the base products
axios.get(url + "sync/products", config)
  .then(function(response){
      //console.log(response)
      storeData = response;
      getVariantInfo();
  })
  .catch(function(error){
      console.log(error)
  })
  .finally(function(){
      console.log("made a get request!")
  })

function getVariantInfo(){
  let storeItems = storeData.data.result;
  let promises = []

  storeItems.forEach(element => {
    let address = url + "sync/products/" + element.id;
    promises.push(axios.get(address, config))
  });
  
  Promise.all(promises).then(function(results){
    variantData = [];
    //results[0].data//.result.sync_variants;
    for(let i =0; i < results.length; i ++){
      if(results[i].data.code == 200){
      variantData.push(results[i].data.result);
      }
      else{ variantData.push(undefined)}
    }
    console.log(variantData);
  })
  .catch(function(error){
    console.log(error);
  })
}
//end of contact

//routes here

router.get('/test', (req,res)=>{
    res.json("Maryam is beautiful!");
});

router.get('/store', (req,res)=>{
  let data = {
    storeData: storeData.data,
    variantData: variantData
  }
  res.send(data);
})


//end of routes

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})