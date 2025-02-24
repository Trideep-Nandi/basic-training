//Asynchronous CustomTimeout
function customSetTimeout(callback, time) {
    new Promise((r) => {
        let now = Date.now();
        while (Date.now() < now + time) {}
        callback();
        r();
    });
}

// Synchronous CustomTimeout
function customSetTimeout (callback, time){
    let now = Date.now();
    while (Date.now() < now + time){}
    callback()
}