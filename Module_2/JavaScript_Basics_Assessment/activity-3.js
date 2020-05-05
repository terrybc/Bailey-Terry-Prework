

const names = ['Bailey', 'Cheyanne', 'Dash'];
for (i = 0; i < 3; i++) {
    const name = prompt('Please enter a name');
    names.push(name);
}

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}