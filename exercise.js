
const printName = function() {
    let helloName;
    inner = function() {
        helloName = "hello Jhon";
        setTimeout(function() {
            console.log(helloName);}, 1000);
        return helloName;
    }
    return inner;
}

printName()();