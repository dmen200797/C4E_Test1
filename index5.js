while (true) {
    let input = prompt('Enter any day u want(dd/mm/yyyy)');
    let arr = input.split("/");
    let day = Number(arr[0]);
    let month = Number(arr[1]);
    let year = Number(arr[2]);
    if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            if (day <= 31 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            if (day <= 30 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else if (month === 2) {
            if (day <= 29 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else {
            alert(input + ' la ngay ko hop le');
        }
    } else {
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
            if (day <= 31 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            if (day <= 30 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else if (month === 2) {
            if (day <= 28 && day >= 1) {
                alert(input + ' la ngay hop le');
            } else {
                alert(input + ' la ngay ko hop le');
            }
        } else {
            alert(input + ' la ngay ko hop le');
        }
    }
}














