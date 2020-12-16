let staffs = [
    {
        name: 'Quang Thang',
        age: 23,
        salary: 1000,
        position: 'Mentor',
    },
    {
        name: 'Chi Pheo',
        age: 30,
        salary: 5000,
        position: 'Boss',
    },
    {
        name: 'Cong Ly',
        age: 28,
        salary: 3000,
        position: 'Manager',
    },
];

let action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
let close = true;

while (close) {
    if (action.toLowerCase() == 'create') {
        let newName = prompt("Enter new staff's name");
        let newAge = Number(prompt("Enter new staff's age"));
        let newSalary = Number(prompt("Enter new staff's salary"));
        let newPosition = prompt("Enter new staff's position");

        let newStaff = {
            name: newName,
            age: newAge,
            salary: newSalary,
            position: newPosition,
        }
        staffs.push(newStaff);
        action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
    } else if (action.toLowerCase() == 'read') {
        let mess = "";
        for (item of staffs) {
            mess += '-------------------------------\r\n';
            mess += 'Name: ' + item.name + '\r\n';
            mess += 'Age: ' + item.age + '\r\n';
            mess += 'Salary: ' + item.salary + '$\r\n';
            mess += 'Position: ' + item.position + '\r\n';
        }
        alert(mess);
        action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
    } else if (action.toLowerCase() == 'update') {
        let updateName = prompt('Who do u want to update?');
        let index = -1;
        for (i = 0; i < staffs.length; i++) {
            if (updateName.toLowerCase() == staffs[i].name.toLowerCase()) {
                index = i;
            }
        }
        if (index < 0) {
            alert('Name Not Found!');
            action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
        } else {
            let newName = prompt("Enter staff's name");
            let newAge = Number(prompt("Enter staff's age"));
            let newSalary = Number(prompt("Enter staff's salary"));
            let newPosition = prompt("Enter staff's position");

            staffs[index].name = newName;
            staffs[index].age = newAge;
            staffs[index].salary = newSalary;
            staffs[index].position = newPosition;
        }
        action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
    } else if (action.toLowerCase() == 'delete') {
        let deleteName = prompt('Who do u want to delete?');
        let index = -1;
        for (i = 0; i < staffs.length; i++) {
            if (deleteName.toLowerCase() == staffs[i].name.toLowerCase()) {
                index = i;
            }
        }
        if (index < 0) {
            alert('Name Not Found!');
            action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
        } else {
            staffs.splice(index, 1);
            alert('Delete successful');
        }
        action = prompt('What do u want to do?(Create, Read, Update, Delete, Close)');
    } else if (action.toLowerCase() == 'close') {
        close = false;
    }
}

















