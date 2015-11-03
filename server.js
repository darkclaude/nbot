var Client = require('node-rest-client').Client;
 
client = new Client();
 var c=0;
var d = 6758;
var f = 90;
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
var dat = c.toString()+"/"+d.toString()+"/"+f.toString();
	client.get("http://nodejs-ninjax.rhcloud.com/api/node/+dat+/ndns?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjJhNzJkNGJmYTYxMTY3YTNkMmRiZWUiLCJsb2NhbCI6eyJwYXNzd29yZCI6IiQyYSQwOSRuV3NuSEl6UGVHdnlnYlBmWTUzeHhPTXZIU0g3T2xWYVM3d3FNdmxvek5oUmhjUEZQRHJkeSIsInVzZXJuYW1lIjoiYXBpIn19.jgploZQxiycZAC9nBFz_SkH6s1ou0WO6cPQN9g1F0Q5", function(data, response){
            // parsed response body as js object 
            console.log(data);
            // raw response 
            console.log(response);
        });
},3000);

 