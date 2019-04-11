// Basic flow
function classDecorator(decoratedClassConstructor) {
    //happens when script is being read
    console.log('Decorator wraps', decoratedClassConstructor);
}
@classDecorator
class WrapMe {
    constructor() {
        console.log('Creating WrapMe instance');
    }
}
const instance = new WrapMe();

// Modify constrcutor
function classDecorator<T extends {new(...args:any[]):{}}>(classConstructor:T) {
    // append, override properties
    return class extends classConstructor {
        newProperty = "new property";
        oldProperty = 'became override'
    }
}

@classDecorator
class Test {
    oldProperty = 'oldProperty';
}

const instance = new Test();
console.log('Instance:',instance);

// Decorate methods
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldMethodResult = descriptor.value();
    descriptor.value = function() {
        return  oldMethodResult + ' and new value';
    }
}

class Test {
    @methodDecorator
    merthod() {
        return 'original value';
    }
}

const instance = new Test();
console.log(instance.merthod());

// Decorator composition
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {
    }
}

