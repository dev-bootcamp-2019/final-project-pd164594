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
    const stopped = true



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

    it("it should pause the function of a contract", async() => {
        const registrar = await Registrar.deployed()

        await registrar.stopRegistry()

        result = await registrar.stopped.call()
        assert.equal(result, true, 'Should change status to True')
    })

    it("should activate the funcations of the contract that are stopped", async() => {
        const registrar = await Registrar.deployed()

        await registrar.startRegistry()

        result = await registrar.stopped.call()
        assert.equal(result, false, 'Should change status to false')
    })

    it("checking that the owner of the contract is properly set", async() => {
        const registrar = await Registrar.deployed()
        result = await registrar.owner.call()
        assert.equal(result, owner, 'Should return the owners address of the contract')
    })

});