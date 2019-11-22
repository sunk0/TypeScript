var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Teacher;
}());
function greeter(person) {
    return person.firstName + person.lastName;
}
var user = new Teacher("Gosho", "Moshev");
document.body.textContent = greeter(user);
