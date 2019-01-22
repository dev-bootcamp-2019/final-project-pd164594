pragma solidity ^0.5.0;

import "../installed_contracts/zeppelin/contracts/ownership/Ownable.sol";


contract Registrar is Ownable {
    
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
    
    /**
    Mapping the address of the student to the Student Struct. 
     */
    mapping (address => Student) Students;
    
    /**
    Array of all the address in our registry. 
    */
    address[] public studentAccts;

    event studentInfoSet(
        string grade,
        address studentAddr,
        string fName,
        string lName,
        string email,
        string className
        );



     /** @dev Adds a student to our Registry. 
      * @param _address  the address  of the student being added to our registry
      * @param _grade  The students final grade. 
      * @param _fName The Students first name that is being added to our registry.
      * @param _lName  The Students last name that is being added to our registry. 
      * @param _email  The students email address 
      * @param _className  The name of the class 
      */
    function setStudent (address _address, string memory _grade, string memory _fName, string memory _lName, string memory _email, string memory _className) onlyOwner public {
        

        Student memory student = Students[_address];

        student.grade = _grade;
        student.studentAddr = _address;
        student.fName = _fName;
        student.lName = _lName;
        student.email = _email;
        student.className = _className;
        
        studentAccts.push(_address) -1;
    }
    
    /** @dev gets all the addresses that are in our  
      * @return _address  the array of address that have been added to our registry. 
      */
    function getStudents () view public returns(address[] memory){
        return studentAccts;
    }

     /** @dev Adds a student to our Registry. 
      * @param _address  the address  of the student being added to our registry
      * @return _grade  The students final grade. 
      * @return addres  The students address. 
      * @return _fName The Students first name that is being added to our registry.
      * @return lName  The Students last name that is being added to our registry. 
      * @return _email  The students email address 
      * @return  _className  The name of the class 
      */
    function getStudent(address _address) view public returns (string memory, address, string memory, string memory, string memory, string memory){
        return (Students[_address].grade, Students[_address].studentAddr, Students[_address].fName, Students[_address].lName, Students[_address].email, Students[_address].className);
    }



    /** @dev gets all the addresses that are in our  
      * @return uint the number of students in our registry.  
      */
    function countStudents () view public returns (uint){
        return studentAccts.length; 
    }
}