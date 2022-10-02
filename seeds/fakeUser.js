const {randUserName, randPassword, randFirstName, randLastName, randEmail, randFullAddress , randPhoneNumber} = require('@ngneat/falso');
const User =  require('../models/user');

function createRandomUser() {
    return {
        username: randUserName(),
        password: randPassword(),
        firstName: randFirstName(),
        lastName: randLastName(),
        email: randEmail(),
        address: randFullAddress(),
        phoneNumber: randPhoneNumber(),
        role: Math.floor(Math.random() * (2 - 0 + 1) + 0),    
    };
}

Array.from({ length: 10 }).forEach(() => {
    var userInfo = createRandomUser();
    var user = new User(userInfo);
    user.save(()=>{
        console.log(user);
    });
});