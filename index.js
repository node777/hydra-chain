// const ethers = require('ethers');
// const sha3 = require('sha3');
// const crypto = require('crypto');

let hydra={
  chains:{
  }
}
exports.create=(chain, genisisBlock)=>{
  //todo check name collisions
  hydra.chains[chain]=[
    genisisBlock
  ]
  //console.log("created genisis "+JSON.stringify(hydra)+" for "+chain)
}
exports.query=(chain, query)=>{
  if(query){
    let c=hydra.chains[chain];
    c[0].chaincode[invoke]
    return `query ${query} been invoked on chain ${chain}`;
  }
  else{
    return hydra.chains[chain];
  }
}
exports.invoke=(chain, invoke, body)=>{

  var d=Object.keys(body)[0];
  let c=hydra.chains[chain];
  try{
    console.log(d);
    let r = c[0].chaincode[invoke](d);
    if(r){
      //todo scrub d
      var data =JSON.parse(d);
      let key = data.k;
      let ts = data.t;
      let msg = data.m;
      let inv = data.i;
      let sig = data.s;
      //block is valid
      try{
        let b= c[0].block(ts, key, inv, msg, sig);
        c.push(b);
        return `chaincode invoked: returned: ${r}`;
      }
      catch(e){
        return `chaincode could not be invoked: ERROR: ${e}`;
      }
    }
    else{
      return `ERROR: chain could not be found`;
    }
  }
  catch(err){
    return `could not execute the function ${req.params.invoke} on chain ${req.params.chain} with params ${d} - got error ${err}`;
  }
}