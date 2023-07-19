// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Contract {
    
    // Structure for User Data
    struct Users{
        string userName;
    }

    // Array to record all users address
    address[] usersAddress;

    // Mapping of address of user to user data
    mapping (address => Users) usersRecord;

    // Events for Smart Contract
    event registerNewUserEvent(address,string,uint,string);

    // Creating a Course Provider account
    address private provider = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;

    // Add user
    function registerNewUser(string memory userName) external returns(string memory)  {
        if(bytes(usersRecord[msg.sender].userName).length == 0){
            usersAddress.push(msg.sender);
            usersRecord[msg.sender].userName = userName;
            emit registerNewUserEvent(msg.sender,userName,0,"Registration Successful");
            return "Registeration Successful!";
        }
        else
        emit registerNewUserEvent(msg.sender,userName,0,"You already have an Account");{
            return "You have already have an Account";
        }
    }

    // Display User Profile
    function displayUserProfile() external view returns(string memory) {
        return usersRecord[msg.sender].userName;
    }
    

    // // Display Added Users
    // function displayAllUsers() external view returns (address[] memory, string[] memory) {
    //     require(msg.sender == provider,"Only Provider can access this feature");
    //     uint userCount = usersAddress.length;
    //     address[] memory addresses = new address[](userCount);
    //     string[] memory usernames = new string[](userCount);
    //     for (uint i = 0; i < userCount; i++) {
    //         addresses[i] = usersAddress[i];
    //         usernames[i] = usersRecord[usersAddress[i]].userName;
    //     }
    //     return (addresses, usernames);
    // }

    // Check for account
    function Login() external view returns (bool) {
        if(bytes(usersRecord[msg.sender].userName).length == 0){
            // User Not Registered
            return false;
        }
        else{
            // User Registered
            return true;
        }
    }

    // Check for admin
    function checkAdmin() external view returns(bool){
        if(msg.sender == provider){
            return true;
        }
        else{
            return false;
        }
    }
}