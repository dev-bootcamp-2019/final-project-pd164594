pragma solidity ^0.4.18;

contract Owned {
    address owner;

    function Owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require (msg.sender == owner);
        _;
    }

}


contract Registrar is Owned {
    
    /**
    State Variables
     */
    struct Student {
        string grade;
        address studentAddr;
        string fName;
        string lName;
        string email;
        string className;
    }
    
    mapping (address => Student) Students;
    
    address[] public studentAccts;

    event studentInfo(
        string grade,
        address studentAddr,
        string fName,
        string lName,
        string email,
        string className
        );



     /** @dev Adds a student to our Registry. 
      * @param _address
      * @param _grade
      * @param _fName
      * @param _lName
      * @param _email
      * @param _className
      */
    function setStudent (address _address, string memory _grade, string memory _fName, string memory _lName, string memory _email, string memory _className) onlyOwner public {
        

        var student = Students[_address];
        
        //Setting the variables of my Struct. 
        student.grade = _grade;
        student.studentAddr = _address;
        student.fName = _fName;
        student.lName = _lName;
        student.email = _email;
        student.className = _className;
        
        studentAccts.push(_address) -1;
    }
    
    function getStudents () view public returns(address[] memory){
        return studentAccts;
    }
    
    // creating student function
    function getStudent(address _address) view public returns (string memory, address, string memory, string memory, string memory, string memory){
        return (Students[_address].grade, Students[_address].studentAddr, Students[_address].fName, Students[_address].lName, Students[_address].email, Students[_address].className);
    }
    
    function countStudents () view public returns (uint){
        return studentAccts.length; 
    }
}