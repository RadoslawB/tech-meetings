# JS decorators

### 1. What is it? 

- Its a tool to modify behaviour of abstraction being decorated
- Decorator is a special kind of declaration `@expression` with well designed syntax.
- It can be *attached* to:
     - class
     - method
     - accessor
     - property
- 


__Note__: At this moment (2019.04.11) its under Stage-2. In JS and TS its experimental feature.

---
<br/><br/>


How to enable in TypeSscript:
- comand line: `tsc --target ES5 --experimentalDecorators`
- `tsconfig.json`: 
```
{
  "compilerOptions": {
      "target": "ES5",
      "experimentalDecorators": true
  }
}
```
to run code: `tsc --p tsconfig.json  && node example.js`


---
<br/><br/>


# 2. Decorate

### function:

Not allowed using `@expression`:
```javascript

function decorator() {}

@decorator
function wrapped() {} // error

``` 

Need to stick with functional programming methods:
```javascript

const decorator = f => a => f(a)
```

Python approach: 
```python
def decorator(wrappedFunction):
        print('side effect')
        return wrappedFunction

@decorator
def myFunc():
        print('myFunc call')
        return 'original'

```
<br/><br/>

###  class:

The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace aclass definition.


Basic flow:
```javascript

function classDecorator(decoratedClassConstructor) {
    console.log('Decorator wraps', decoratedClassConstructor);
}
@classDecorator
class WrapMe {
    constructor() {
        console.log('Creating WrapMe instance');
    }
}
```

Modify constructor function: 
```javascript

function classDecorator(classConstructor) {
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
console.log('Instance:', instance);

```


### method:
The decorator is applied to the __Property Descriptor__ for the method, and can be used to observe, modify, or replace a method definition


Property descriptor:
```javascript
Object.defineProperty(obj, prop, descriptor)
```

```javascript
interface PropertyDescriptor {
    configurable?: boolean; // can be deleted from coresponding object?
    enumerable?: boolean; // should be showed when looping?
    value?: any; // method body, primitives, objects, everything -  it is js
    writable?: boolean; // can assign value to this property? obj.key = 10
    get?(): any; // accessor
    set?(v: any): void; // accessor
}
```

Modify method behaviour: fat arrow vs classic
```
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = () => this
}
```
```
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
        return this
    };
}
```

### Factories:

```javascript

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Test {
    
    @enumerable(true)
    method() {}
}

```

### Decorator Composition

Same as function composition
```@f @g x``` => `f(g(x))`


### [Use case](https://github.com/jayphelps/core-decorators)

- benchmarking
- logging 
- autobind
- deprecated
- nonconfigurable
- Angular: input, component, injectable


##### Refference:

- https://github.com/tc39/proposal-decorators 
- https://www.typescriptlang.org/docs/handbook/decorators.html
- https://github.com/jayphelps/core-decorators
- Decorating functions https://hackernoon.com/function-decorators-part-2-javascript-fadd24e57f83
