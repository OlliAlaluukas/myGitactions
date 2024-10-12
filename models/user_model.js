
let users = [
    {"name":"Teppo Testi","age":35}, 
    {"name":"Teppo Testimies","age":31}, 
    {"name":"Teppo Testaus","age":32}, 
    {"name":"Teppo Testitesti","age":46}
  ];

const user = {
    getAllUsers(callback){
        callback(users);
    }
}

module.exports = user;