export class User {
    constructor(id, firstName, lastName, email, password, birthday, gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.gender = gender;
        this.status = 1; //status: 0-inactive, 1-active, 9-blocked
        this.isLogin = false;
    }
}