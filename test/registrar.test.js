var Registrar = artifacts.require('Registrar')

contract('Registrar', function(accounts) {

    const owner = accounts[0]
    const alice = accounts[1]
    const bob = accounts[2]
    const emptyAddress = '0x0000000000000000000000000000000000000000'
    const fName = "Pat"
    const lName = "Doyle"
    const grade = "A"
    const email = "patrick.doyle126@gmail.com"
    const className = "Math"



    it("should add a student to our registry", async() => {
        const registrar = await Registrar.deployed()
    
        await registrar.setStudent(alice, grade, fName, lName, email, className)

        const result = await registrar.getStudent.call(alice)

        assert.equal(result[0], grade, 'the grade of the student added to our registry')
        assert.equal(result[1], alice, 'the eth address of our student in the registry')
        assert.equal(result[2], fName, 'The first name of the student in our registry')
        assert.equal(result[3], lName, 'The last name of the student in our registry')
        assert.equal(result[4], email, 'The students email address in the registry')
        assert.equal(result[5], className, "The students class name")

    })

    it("should emit and event when a student is added", async() => {
        const registrar = await Registrar.deployed()

        var eventEmitted = false

        var event = registrar.studentInfoSet(alice, grade, fName, lName, email, className)
        await event.watch((err, res) => {

            eventEmitted = true
        })

        // const amount = web3.toWei(2, "ether")

        // var aliceBalanceBefore = await web3.eth.getBalance(alice).toNumber()
        // var bobBalanceBefore = await web3.eth.getBalance(bob).toNumber()

        // await supplyChain.buyItem(sku, {from: bob, value: amount})

        // var aliceBalanceAfter = await web3.eth.getBalance(alice).toNumber()
        // var bobBalanceAfter = await web3.eth.getBalance(bob).toNumber()

        // const result = await supplyChain.fetchItem.call(sku)

        // assert.equal(result[3].toString(10), 1, 'the state of the item should be "Sold", which should be declared second in the State Enum')
        // assert.equal(result[5], bob, 'the buyer address should be set bob when he purchases an item')
        assert.equal(eventEmitted, true, 'adding an item should emit a Sold event')
        // assert.equal(aliceBalanceAfter, aliceBalanceBefore + parseInt(price, 10), "alice's balance should be increased by the price of the item")
        // assert.isBelow(bobBalanceAfter, bobBalanceBefore - price, "bob's balance should be reduced by more than the price of the item (including gas costs)")
    })

    // it("should allow the seller to mark the item as shipped", async() => {
    //     const supplyChain = await SupplyChain.deployed()

    //     var eventEmitted = false

    //     var event = supplyChain.Shipped()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })

    //     await supplyChain.shipItem(sku, {from: alice})

    //     const result = await supplyChain.fetchItem.call(sku)

    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 2, 'the state of the item should be "Shipped", which should be declared third in the State Enum')
    // })

    // it("should allow the buyer to mark the item as received", async() => {
    //     const supplyChain = await SupplyChain.deployed()

    //     var eventEmitted = false

    //     var event = supplyChain.Received()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })

    //     await supplyChain.receiveItem(sku, {from: bob})

    //     const result = await supplyChain.fetchItem.call(sku)

    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 3, 'the state of the item should be "Received", which should be declared fourth in the State Enum')
    // })

});