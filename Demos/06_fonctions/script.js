
console.warn("Window");

let fnAnonyme = function () { console.log(this); };

let fnFlechee = () => console.log(this);

fnAnonyme();
fnFlechee();

console.warn("Object");

let obj = {

    fnAnonyme: function () { console.log(this); },
    fnFlechee: () => console.log(this)

};

obj.fnAnonyme();
obj.fnFlechee();