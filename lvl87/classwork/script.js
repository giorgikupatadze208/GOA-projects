N1
//პრომისი არის ჯავასკრიპტის ობიექტი რომელიც წარმოადგენს ოპერაციასავით მაგალითად pending არის
//რომელიც არ დასრულებულა და იტვირთება fulfilieded არის რომელიც წარმატებით დასრულდა და
//rejected არის რომელიც ცუდად და უარყოფითად დასრულდა

N2
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "მონაცემები კარგად ჩაიტვირთა" };
            resolve(data);
        }, 2000); 
    });
}

fetchData().then(response => console.log(response));

N3
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("მონაცემები ცუდად ჩაიტვიღტა"));
        }, 2000);
    });
}

fetchDataWithError()
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

N4
function fetchDataRandomly() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; 
            
            if (success) {
                resolve({ message: "მონაცემები ცუდად ჩაიტვირთა" });
            } else {
                reject(new Error("მონაცემები ცუდად ჩაიტვირთა "));
            }
        }, 2000); 
    });
}

fetchDataRandomly()
    .then(response => console.log(response))
    .catch(error => console.error(error.message));
