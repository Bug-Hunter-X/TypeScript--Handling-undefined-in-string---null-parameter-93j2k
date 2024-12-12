function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Correct
printName('John'); // Correct
printName(undefined); // Error: Object is possibly 'undefined'.