class User {
    constructor(id, name, email, address, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.role = 0;
    }
}

class Admin extends User {
    constructor(id, name, email, address, phone) {
        super(id, name, email, address, phone);
        this.role = 1;
    }
}

let admin = new Admin(1, "Suzuki", "admin@sample.com", "Tokyo, Japan", "090-1234-5678");
let user1 = new User(2, "user1", "user1@sample.com", "Tokyo, Japan", "012-3456-7890");
let user2 = new User(3, "user2", "user2@sample.com", "Aichi, Japan", "001-1234-5678");
let user3 = new User(4, "user3", "user3@sample.com", "Aichi, Japan", "080-1234-5678");

let users = [admin, user1, user2, user3];

function user_exists(value) {
    let index = users.findIndex(e => e.name == value);
    if (index == -1) {
        return false;
    } else {
        return index;
    }
}

function deleteUser() {
    let input = prompt("Enter the name to search");
    let index = user_exists(input);
    if (!index) {
        console.log("No user found. Please try again");
    } else {
        if (users[index].role == 1) {
            alert("No permission");
        } else {
            users.splice(index,1);
            console.log(users);
        }
    }
}

function updateUser() {
    let input = Number(prompt("Enter the id of the user"));
    let index = user_exists(input);
    if (!index) {
        console.log("No user found. Please try again");
    } else {
        if (users[index].role == 1) {
            alert("No permission");
        } else {
            let key = prompt("What do you want to update?");
            if (users[index][key]) {
                let content = prompt("Input the new value");
                users[index][key] = content;
                console.log(`Users updated!`, users[index]);
            } else {
                alert("Cannot find the key to update");
            }
        }
    }
}