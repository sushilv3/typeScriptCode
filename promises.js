let promise = Promise.resolve('brother finished work');
promise.then(() => {
    console.log('promise fulfill');
})

//example 2
let myPromise = new Promise((resolve, reject) => {
    let finishedWork = false;
    if (finishedWork) {
        resolve();
    } else {
        reject();
    }
});
myPromise.then(() => {
    console.log('task is finsihed');
}).catch(() => {
    console.log('task is not finished');
});


//example 3

function getData(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };

        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: this.statusText
            });

        };
        xhr.send();
    });
}

function printData(data) {
    console.log(data);
    console.log(JSON.parse(data));
}
getData('GET', 'https://jsonplaceholder.typicode.com/users').then(printData);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(console.log);