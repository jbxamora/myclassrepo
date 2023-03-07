const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName', {
  // Getter function for the virtual property
  get() {
    // Combine the `first` and `last` properties of the document to create the full name
    return `${this.first} ${this.last}`;
  },
  // Setter function for the virtual property
  set(value) {
    // Split the `value` string into an array of two strings, representing the `first` and `last` names
    const [first, last] = value.split(' ');
    // Use the `set()` method to update the underlying `first` and `last` properties on the document with the new values
    this.set({ first, last });
  },
});


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

// When setting a virtual property, you cannot directly set the virtual property itself(in this case fullName) as it is not a physical property stored in the database.
// Instead, you need to set the underlying properties(first and last in this case) that make up the virtual property.

// In the setter for the fullName virtual property, the value parameter is the full name string that we want to use to set the first and last properties.We first split
//  the value string into an array of two strings(using a space character as the delimiter), representing the first and last names.

//   Then, we use the set() method to set the values of the underlying first and last properties on the this object, 
// which is the Mongoose document that we are setting the virtual property on.The set() method takes an object of key - value pairs, 
// where the keys are the property names to set and the values are the new values to set those properties to.

//     So, the set() method in the virtual property setter is equivalent to calling this.first = first and this.last = last separately.
// It just provides a cleaner and more flexible way to set multiple properties at once.
