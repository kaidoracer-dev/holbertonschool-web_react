interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Alice', lastName: 'Dupont', age: 20, location: 'Paris' };
const student2: Student = { firstName: 'Bob', lastName: 'Martin', age: 22, location: 'Lyon' };

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
thead.innerHTML = '<tr><th>Prénom</th><th>Ville</th></tr>';
table.appendChild(thead);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
