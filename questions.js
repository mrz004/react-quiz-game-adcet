const question = [
  {
    question: "What does CSS stand for?",
    options: [
      "Counter Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which programming language is known as the 'mother of all languages'?",
    options: ["Java", "C", "Python", "Assembly"],
    answer: "C",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the previous object",
      "Refers to the global object",
      "Refers to a specific object",
    ],
    answer: "Refers to the current object",
  },
  {
    question: "What is the time complexity of the quicksort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    question: "What is the role of the 'HEAD' in Git?",
    options: [
      "Points to the latest commit in the working directory",
      "Points to the latest commit in the repository",
      "Points to the remote repository",
      "Points to the initial commit",
    ],
    answer: "Points to the latest commit in the repository",
  },
  {
    question: "In object-oriented programming, what is encapsulation?",
    options: [
      "Hiding the implementation details and showing only the necessary features",
      "Inheritance of properties and methods",
      "Creating instances of a class",
      "Implementing interfaces",
    ],
    answer:
      "Hiding the implementation details and showing only the necessary features",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Automated Programming Interface",
      "Application Process Integration",
    ],
    answer: "Application Programming Interface",
  },
  {
    question:
      "What is the purpose of the 'finally' block in a try-catch-finally statement in Java?",
    options: [
      "To handle exceptions",
      "To ensure a block of code always gets executed",
      "To catch all types of exceptions",
      "To specify custom exceptions",
    ],
    answer: "To ensure a block of code always gets executed",
  },
  {
    question: "Which database is known as a 'NoSQL' database?",
    options: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"],
    answer: "MongoDB",
  },
  {
    question: "What is the significance of the '404' HTTP status code?",
    options: [
      "Page not found",
      "Server error",
      "Request timeout",
      "Unauthorized access",
    ],
    answer: "Page not found",
  },
  {
    question: "What is the primary purpose of Docker?",
    options: [
      "Version control",
      "Containerization",
      "Load balancing",
      "Continuous integration",
    ],
    answer: "Containerization",
  },
  {
    question: "What is the difference between 'let' and 'const' in JavaScript?",
    options: [
      "'let' is used to declare constants, and 'const' is used for variables",
      "'let' is block-scoped, and 'const' is function-scoped",
      "'let' allows reassignment, while 'const' does not",
      "'let' is used for primitive types, and 'const' is used for objects",
    ],
    answer: "'let' allows reassignment, while 'const' does not",
  },
  {
    question: "What is the purpose of the 'yield' keyword in Python?",
    options: [
      "To stop the execution of a function",
      "To create a generator",
      "To return a value from a function",
      "To raise an exception",
    ],
    answer: "To create a generator",
  },
  {
    question:
      "What does MVC stand for in the context of software architecture?",
    options: [
      "Model-View-Controller",
      "Most Valuable Code",
      "Modern View Configuration",
      "Multiple View Configuration",
    ],
    answer: "Model-View-Controller",
  },
  {
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
    answer: "Merge Sort",
  },
  {
    question: "What is the purpose of the 'volatile' keyword in Java?",
    options: [
      "To declare a variable as constant",
      "To indicate that a variable may be changed by multiple threads",
      "To create an immutable class",
      "To specify the access level of a variable",
    ],
    answer: "To indicate that a variable may be changed by multiple threads",
  },
  {
    question: "What is a closure in programming?",
    options: [
      "A function that has access to variables from its outer scope",
      "A type of loop structure",
      "A built-in JavaScript object",
      "A mechanism for error handling",
    ],
    answer: "A function that has access to variables from its outer scope",
  },
  {
    question: "What is the significance of the 'NaN' value in JavaScript?",
    options: [
      "Not a Number",
      "Negative and Null",
      "No Assignment",
      "No Argument",
    ],
    answer: "Not a Number",
  },
  {
    question: "What is the purpose of the 'super' keyword in Java?",
    options: [
      "To reference the parent class",
      "To call a superclass method",
      "To create an instance of a class",
      "To declare a constant",
    ],
    answer: "To reference the parent class",
  },
  {
    question: "What is the difference between 'GET' and 'POST' HTTP methods?",
    options: [
      "GET is used for sending data to the server, while POST is used for retrieving data",
      "GET is idempotent, while POST is not",
      "GET appends data to the URL, while POST sends data in the request body",
      "GET is faster than POST",
    ],
    answer:
      "GET appends data to the URL, while POST sends data in the request body",
  },
  {
    question: "What is the purpose of the 'charAt()' method in Java?",
    options: [
      "To convert a string to uppercase",
      "To extract a character at a specific index",
      "To check if a character is present in a string",
      "To concatenate two strings",
    ],
    answer: "To extract a character at a specific index",
  },
  {
    question: "What is the 'Event Loop' in JavaScript?",
    options: [
      "A loop that iterates through events in a GUI application",
      "A mechanism for handling asynchronous operations",
      "A loop that processes mouse and keyboard events",
      "A loop that executes JavaScript statements",
    ],
    answer: "A mechanism for handling asynchronous operations",
  },
  {
    question: "In Python, what is the purpose of the 'pass' statement?",
    options: [
      "To create an empty function",
      "To indicate a placeholder that does nothing",
      "To break out of a loop",
      "To skip the current iteration of a loop",
    ],
    answer: "To indicate a placeholder that does nothing",
  },
  {
    question: "What is the role of the 'virtual' keyword in C++?",
    options: [
      "To declare a variable as virtual",
      "To create a virtual machine",
      "To indicate that a method can be overridden in a derived class",
      "To specify the access level of a class",
    ],
    answer: "To indicate that a method can be overridden in a derived class",
  },
  {
    question: "What is the purpose of the 'map()' function in JavaScript?",
    options: [
      "To create a new array with the results of calling a provided function on every element",
      "To concatenate two arrays",
      "To filter elements in an array",
      "To reverse the elements of an array",
    ],
    answer:
      "To create a new array with the results of calling a provided function on every element",
  },
  {
    question: "What is the purpose of the 'volatile' keyword in C#?",
    options: [
      "To declare a variable as constant",
      "To indicate that a variable may be changed by multiple threads",
      "To create an immutable class",
      "To specify the access level of a variable",
    ],
    answer: "To indicate that a variable may be changed by multiple threads",
  },
];

export default question;
