var rest = require('restler');
var express = require('express');
var app = express();
app.get('/*', function(req,res){
res.send("THis is The BOT ");
});
 var c=0;
var d = 6758;
var f = 90;
var token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjJhNzJkNGJmYTYxMTY3YTNkMmRiZWUiLCJsb2NhbCI6eyJwYXNzd29yZCI6IiQyYSQwOSRuV3NuSEl6UGVHdnlnYlBmWTUzeHhPTXZIU0g3T2xWYVM3d3FNdmxvek5oUmhjUEZQRHJkeSIsInVzZXJuYW1lIjoiYXBpIn19.jgploZQxiycZAC9nBFz_SkH6s1ou0WO6cPQN1F0Q59g";
var checkst = setInterval(function(){
c=c+1;
d=d-2;
f=f+3;
if(f>=3000){
f=90;
}
if(d<=0){
d=7000;
}
if(c>=250){
c=10;
}
var dat = f.toString()+"/"+d.toString()+"/"+c.toString();
rest.get("http://nodejs-ninjax.rhcloud.com/api/node/"+dat+"/ndns?token="+token).on('complete', function(result) {
  if (result instanceof Error) {
    console.log('Error:', result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    console.log(result);
  }
});
},2000);
app.listen(process.env.OPENSHIFT_NODEJS_PORT);
 