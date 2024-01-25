// add readonly modifier to prevent props reassignment
function exercise18() {
  // TODO: define class Student with properties name, age, studentId
  // TODO: add constructor to initialize the properties
  // TODO: add method printStudent to print the student info to console
  // TODO: create an instance of the class Student
  // TODO: print the student info to console
  // TODO: try to change the studentId property
  // TODO: change the studentId property to readonly, make sure that changing the property is not allowed
}
// TODO: compile and run the code
exercise18();

// use optional modifier to fix compile time error
function exercise19() {
  type TWidget = {
    name: string;
    width: number;
    height: number;
    color: string;
    os: string;
    space: number;
  };

  const widget: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
    space: 100,
  };
  console.log(widget.name);

  // TODO: uncomment the code below and update the type definition to fix compile time error

  // const widgetWithSize: TWidget = {
  //   name: 'widget',
  //   width: 10,
  //   height: 20,
  //   color: 'red',
  //   space: 100,
  // }

  // const desktopWidget:TWidget = {
  //   name: 'widget',
  //   width: 10,
  //   height: 20,
  //   os: 'windows',
  //   space: 100,
  // }

  // TODO: print the result to console
}
// TODO: compile and run the code
exercise19();

// use uniton types to replace unknown type for compile time type checking
function exercise20() {
  function formatCommandLine(command: unknown) {
    if (typeof command === 'string') {
      return command.trim();
    } else if (Array.isArray(command)) {
      return command.map((arg) => arg.trim()).join(' ');
    }
    throw new Error('command must be string or string[]');
  }

  console.log(formatCommandLine('  git status  ')); // git status
  console.log(formatCommandLine(['git ', ' status '])); // git status
  console.log(formatCommandLine(false)); // run time error - should be compile time error instead
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise20();

// use literal types for type checking
function exercise21() {
  // TODO: define rock, paper, scissors literal type and assign it to TMove type
  // TODO: add type check to the function below
  function rockPaperSizorsVins(me: unknown, other: unknown) {
    if (me === 'rock' && other === 'paper') {
      return false;
    }
    if (me === 'paper' && other === 'scissors') {
      return false;
    }
    if (me === 'scissors' && other === 'rock') {
      return false;
    }
    return true;
  }
  console.log(rockPaperSizorsVins('rock', 'paper')); // false
  console.log(rockPaperSizorsVins('paper', 'scissors')); // false
  console.log(rockPaperSizorsVins('scissors', 'rock')); // false
  console.log(rockPaperSizorsVins('rock', 'scissors')); // true
  // TODO: make sure that the following calls are not allowed
  console.log(rockPaperSizorsVins('papapaper', 'scissors')); // true - no type check
}
// TODO: compile and run the code
// TODO: write unit-tests for the function above, passing different types of values to it (need to export the function first)
exercise21();

// use intersection types to avoid code duplication
function exercise22() {
  // TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types

  type TWidget = {
    name: string;
  };

  type TWidgetWithSize = {
    name: string;
    width: number;
    height: number;
    color: string;
  };

  type TDesktopWidget = {
    name: string;
    width: number;
    height: number;
    color: string;
    os: string;
  };

  type TMobileWidget = {
    name: string;
    width: number;
    height: number;
    color: string;
    space: number;
  };

  const widget: TWidget = {
    name: 'widget',
  };
  const widgetWithSize: TWidgetWithSize = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
  };
  const desktopWidget: TDesktopWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    os: 'windows',
  };
  const mobileWidget: TMobileWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  };
  console.log(widget.name);
  console.log(
    widgetWithSize.name +
      ' ' +
      widgetWithSize.width +
      ' ' +
      widgetWithSize.height +
      ' ' +
      widgetWithSize.color,
  );
  console.log(
    desktopWidget.name +
      ' ' +
      desktopWidget.width +
      ' ' +
      desktopWidget.height +
      ' ' +
      desktopWidget.color +
      ' ' +
      desktopWidget.os,
  );
  console.log(
    mobileWidget.name +
      ' ' +
      mobileWidget.width +
      ' ' +
      mobileWidget.height +
      ' ' +
      mobileWidget.color +
      ' ' +
      mobileWidget.space,
  );
  // TODO: print the result to console
}
// TODO: compile and run the code
exercise22();

// rewrite the code using async await
function exerciseA() {
  function printMessagesWithTimeout() {
    setTimeout(() => {
      console.log('1');

      setTimeout(() => {
        console.log('2');

        setTimeout(() => {
          console.log('3');
        }, 1000);
      }, 1000);
    }, 1000);
  }
  printMessagesWithTimeout();
}
// TODO: compile and run the code
// TODO: write unit-tests for this code. Mock setTimeout function
exerciseA();

// create react app with typescript
function excerciseZ() {
  // TODO: push to github and share the link below
}
excerciseZ();