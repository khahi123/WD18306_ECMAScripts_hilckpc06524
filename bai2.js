// vi du ve object literal
let person = {
    name: 'Kha Hi',
    age: 20,
    address: {
        city: 'Kien Giang',
        country: 'Viet Nam'
    },
    greet: function () {
        console.log(`xin chao, tui ten la ${person.name},nam nay tui ${this.age} tuoi`);
    }
};

// Truy cập thuộc tính của đối tượng
console.log(person.name);
console.log(person.address.city);

// Gọi phương thức của đối tượng
person.greet();
