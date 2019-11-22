interface Person{
    firstName: string;
    lastName: string;
}

class Teacher{
     fullName: string;
    constructor(public firstName: string,public lastName: string ){
        this.fullName = firstName + lastName;
    }
}


function greeter (person: Person){
    return person.firstName + person.lastName;
}
let user = new Teacher ("Gosho", "Moshev");
document.body.textContent = greeter(user);