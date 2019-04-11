// Basic flow
// function classDecorator(decoratedClassConstructor) {
//     //happens when script is being read
//     console.log('Decorator wraps', decoratedClassConstructor);
// }
// @classDecorator
// class WrapMe {
//     constructor() {
//         console.log('Creating WrapMe instance');
//     }
// }
// const instance = new WrapMe();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modify constrcutor
// function classDecorator<T extends {new(...args:any[]):{}}>(classConstructor:T) {
//     // append, override properties
//     return class extends classConstructor {
//         newProperty = "new property";
//         oldProperty = 'became override'
//     }
// }
//
// @classDecorator
// class Test {
//     oldProperty = 'oldProperty';
// }
//
// const instance = new Test();
// console.log('Instance:',instance);
// Decorate methods
// function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const oldMethodResult = descriptor.value();
//     descriptor.value = function() {
//         return  oldMethodResult + ' and new value';
//     }
// }
//
// class Test {
//     @methodDecorator
//     merthod() {
//         return 'original value';
//     }
// }
//
// const instance = new Test();
// console.log(instance.merthod());
// Decorator composition
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
