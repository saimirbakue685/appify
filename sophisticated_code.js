```javascript
// file: sophisticated_code.js

// Import required modules
const fs = require('fs');
const path = require('path');

// Define a class for a complex data structure
class ComplexDataStructure {
  constructor() {
    this.data = [];
  }

  // Add data to the data structure
  addData(data) {
    this.data.push(data);
  }

  // Remove data from the data structure
  removeData(index) {
    this.data.splice(index, 1);
  }

  // Get the size of the data structure
  getSize() {
    return this.data.length;
  }

  // Sort the data in ascending order
  sortData() {
    this.data.sort((a, b) => a - b);
  }

  // Perform a complex calculation based on the data
  calculate() {
    let result = 0;
    for (let i = 0; i < this.data.length; i++) {
      result += this.data[i] ** 2;
    }
    return result;
  }
}

// Create an instance of the complex data structure
const complexDataStructure = new ComplexDataStructure();

// Add some data to the data structure
complexDataStructure.addData(5);
complexDataStructure.addData(10);
complexDataStructure.addData(7);

// Sort the data
complexDataStructure.sortData();

// Remove data at index 1
complexDataStructure.removeData(1);

// Print the size of the data structure
console.log('Size:', complexDataStructure.getSize());

// Calculate and print the result
console.log('Result:', complexDataStructure.calculate());

// Write the data structure to a file
const filePath = path.join(__dirname, 'data.json');
fs.writeFileSync(filePath, JSON.stringify(complexDataStructure.data));

// Read the data from the file and create a new instance of the data structure
const fileData = fs.readFileSync(filePath, 'utf8');
const newDataStructure = new ComplexDataStructure();
newDataStructure.data = JSON.parse(fileData);

// Print the data from the new data structure
console.log('New Data:', newDataStructure.data);
```

This code demonstrates a sophisticated example that goes beyond a basic "hello world" or calculator program. It includes the definition of a `ComplexDataStructure` class with methods to add, remove, sort, and calculate data. It also demonstrates file I/O operations to write the data structure to a file and read it back. The code is well-commented to provide explanations for each step.