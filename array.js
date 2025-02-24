/*
Implement a javascript Array having the following prototype functions without using Native javascript array:
- push
- pop
- shift
- unshift
- length
- splice
- indexOf
- forEach
*/

function MyArray() {
    this.data = {};
    this.length = 0;
}

MyArray.prototype.push = function (value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
};

MyArray.prototype.pop = function () {
    if (this.length === 0) return undefined;
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
};

MyArray.prototype.shift = function () {
    if (this.length === 0) return undefined;
    const firstElement = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
};

MyArray.prototype.unshift = function (value) {
    for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
    }
    this.data[0] = value;
    this.length++;
    return this.length;
};

MyArray.prototype.indexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this.data[i] === value) {
            return i;
        }
    }
    return -1;
};

MyArray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this.data[i], i, this);
    }
};
