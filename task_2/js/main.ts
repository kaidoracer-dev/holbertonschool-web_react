interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home'; }
  getCoffeeBreak() { return 'Getting a coffee break'; }
  workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home'; }
  getCoffeeBreak() { return 'Cannot have a break'; }
  workTeacherTasks() { return 'Getting to work'; }
}

type Salary = number | string;
function createEmployee(salary: Salary): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) employee.workDirectorTasks();
  else employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
console.log(teachClass('Math'));
console.log(teachClass('History'));
