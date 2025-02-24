- Write a regex pattern that matches the password
	1. Uppercase (A-Z) and lowercase (a-z) English letters.
	2. Digits (0-9).
	3. Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~	    
	4. Character. ( period, dot or full stop) provided that it is not the first or last character and it will not come one after the other.
```
^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=\w+\.\w+\.?)(?=.*[\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]).*[^\.]$
```

- Write a regex pattern to match the valid email address
```
[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]{2,}
```

- Write a regex pattern that verifies credit card pattern
```
(?:\d{3,4}[\s-]?){3}\d{4}
```

- Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph
```
Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. [mytraining@deqode.com](mailto:mytraining@deqode.com) Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.
```

- Regex Pattern
```
(?<phone>(?:\(?\+91\)?)?-?\d+-?\d+)|(?<email>[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]{2,})
```

- script.js
```js
const regex = /(?<phone>(?:\(?\+91\)?)?-?\d+-?\d+)|(?<email>[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.+-]{2,})/gm;
const text = `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. [mytraining@deqode.com](mailto:mytraining@deqode.com) Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.`

const phoneNumbers = []
const emails = []
function extractDetails (regex, text){
    while (true)
    {
        const match = regex.exec(text);
        if (match === null)
            break;
        const group = match.groups;
        if (group.phone !== undefined)
            phoneNumbers.push(group.phone)
        if (group.email !== undefined)
            emails.push(group.email)
    }
}

extractDetails(regex, text);
console.log(phoneNumbers);
console.log(emails);
```