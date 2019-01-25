$("#transactionText").hide();


var defaultAccount


        window.addEventListener('load', async () => {
          // Modern dapp browsers...
          if (window.ethereum) {
              window.web3 = new Web3(ethereum);
              try {
                  // Request account access if needed
                  await ethereum.enable();
                  // Acccounts now exposed
                  web3.eth.sendTransaction({/* ... */});
              } catch (error) {
                  // User denied account access...
              }
          }
          // Legacy dapp browsers...
          else if (window.web3) {
              window.web3 = new Web3(web3.currentProvider);
              // Acccounts always exposed
              web3.eth.sendTransaction({/* ... */});
          }
          // Non-dapp browsers...
          else {
              console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
          }
      });

        web3.eth.getAccounts(function(error, accounts){
          defaultAccount = accounts;
          console.log(web3.eth.defaultAccount)
          console.log(defaultAccount)
          $("#ethaddress").html(web3.eth.defaultAccount)
        })



   
        // Adding the contracts ABI. //Add your contract ABI in between parenthesis. 
        const RegistrarContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x75f12b21"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"studentAccts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb37d1f42"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"grade","type":"string"},{"indexed":false,"name":"studentAddr","type":"address"},{"indexed":false,"name":"fName","type":"string"},{"indexed":false,"name":"lName","type":"string"},{"indexed":false,"name":"email","type":"string"},{"indexed":false,"name":"className","type":"string"}],"name":"studentInfoSet","type":"event","signature":"0xeb01e5f67eb4012e734a88491c4ccb6a775d42e662e3d132fd1f69fea2e3057f"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event","signature":"0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_grade","type":"string"},{"name":"_fName","type":"string"},{"name":"_lName","type":"string"},{"name":"_email","type":"string"},{"name":"_className","type":"string"}],"name":"setStudent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbc736646"},{"constant":true,"inputs":[],"name":"getStudents","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf1d064b3"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getStudent","outputs":[{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6b7b44d7"},{"constant":true,"inputs":[],"name":"countStudents","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x477f5a69"},{"constant":false,"inputs":[],"name":"stopRegistry","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc2feb650"},{"constant":false,"inputs":[],"name":"startRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x976e68a3"}])
        
        // // Defining the address of where my smart contract is located. 
        const Registrar = RegistrarContract.at("0x831bFFF15833F219E7E7282F51e4E3DE4EBAb935");



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
      
     
