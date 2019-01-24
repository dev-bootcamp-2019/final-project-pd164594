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

    it("should return the number of students in our registry", async() => {
        const registrar = await Registrar.deployed()
    
        await registrar.setStudent(alice, grade, fName, lName, email, className)

        const result = await registrar.countStudents.call()
        
        assert.equal(parseInt(result), 2, 'the number of students in our registry')
   
    })

    it("it should pause the function of a contract.", async() => {
        const registrar = await Registrar.deployed()
        const stopped = false

        result =  await registrar.stopRegistry()

    

        assert.equal(result, True, 'the state of the item should be "Shipped", which should be declared third in the State Enum')
    })

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