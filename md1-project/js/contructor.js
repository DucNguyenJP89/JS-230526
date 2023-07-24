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

export class UserFeed {
    constructor(id, userId, createdAt, updatedAt, content) {
        this.id = id;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.content = content;
    }
}