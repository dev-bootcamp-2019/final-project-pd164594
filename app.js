        // remix URL: "http://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js"

        $("#transactionText").hide();

        if (typeof web3 != 'undefined') {
          web3 = new Web3(web3.currentProvider);
        } else {
          web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
        }
        // var web3 = new Web3(new Web3.providers.HttpProvider(
        //     'https://ropsten.infura.io/[3f152de5c51d4490b60883598c1d8418]'
        //  ));

        web3.eth.defaultAccount = web3.eth.accounts[0];

        console.log(web3.eth.accounts);

        // Adding the contracts ABI. //Add your contract ABI in between parenthesis. 
        const RegistrarContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"Students","outputs":[{"name":"grade","type":"string"},{"name":"studentAddr","type":"address"},{"name":"fName","type":"string"},{"name":"lName","type":"string"},{"name":"email","type":"string"},{"name":"className","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studentAccts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"grade","type":"string"},{"indexed":false,"name":"studentAddr","type":"address"},{"indexed":false,"name":"fName","type":"string"},{"indexed":false,"name":"lName","type":"string"},{"indexed":false,"name":"email","type":"string"},{"indexed":false,"name":"className","type":"string"}],"name":"studentInfo","type":"event"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_grade","type":"string"},{"name":"_fName","type":"string"},{"name":"_lName","type":"string"},{"name":"_email","type":"string"},{"name":"_className","type":"string"}],"name":"setStudent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getStudents","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getStudent","outputs":[{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}])

        // Defining the address of where my smart contract is located. 
        const Registrar = RegistrarContract.at("0xfb88de099e13c3ed21f80a7a1e49f8caecf10df6");



        // This function hits the Registrar Set Student. 
      $("#button").click(function() {
       
        console.log("our Address, ", $("#address").val())

        Registrar.setStudent($("#address").val(), $("#grade").val(),$("#first_name").val(), $("#last_name").val(),$("#email").val(),$("#className").val(),{gas:3000000}, (err, res) =>{
          console.log("this is my result", res);
          if(err){
            console.log(err)
            alert("Only the ND Registrar can Post Grades");
          } else {
            console.log(res)
            $("#transactionText").show();
            $("#transactionID").html(res);

        
          }
        });

        
      });

      Registrar.countStudents((err, res) => {
          if(res){
            $("#countStuds").html(res.c + ' registered');
          }
      })

      $("#Retrieve").click(function(){
        const address =$("#address").val();
        console.log("click works")

        Registrar.getStudent(address, (err, res) =>{
          console.log(res);
           $("#studentName").html("Student Name: " + res[3] + ", " + res[2]);
           $("#emailAddr").html("Email Address: " + res[4])
           $("#className").html("Class Name: " + res[5])
           $("#grade").html("Final Grade: " + res[0])
           $("#publishedBy").html("Published By address: " + web3.eth.defaultAccount)

        })

      })