function User(adminpriv) {
    this.name = 'Admin';
    this.password = 'admin123';
    this.email = 'living.regardless@gmail.com';
    this.isAdmin = true;
}

function User1(normalpriv) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.isAdmin = false;
}

let admin = new User('Admin');
let user01 = new User1('Jack');

alert(admin.name);