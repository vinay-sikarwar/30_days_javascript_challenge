// Activity 1 : Object creation and acess
//------------------------------------------------
// Task 1 - 
var book = {"Title": "The journey",
            "Author": "Vinay",
            "year": 2024
}
console.log(book);

// Task 2 - 
console.log(book.Title);
console.log(book.year);

// Activity 2 : Object Methods
//------------------------------------------------
// Task 3 - 
var book = {"Title": "The journey",
    "Author": "Vinay",
    "year": 2024,
    "methd" : function(){
        return this.Title +": "+ this.Author;
    }
}
console.log(book.methd());  // parenthesis () are required with methods of objects

// Task 4 - 
var book = {"Title": "The journey",
    "Author": "Vinay",
    "year": 2024,
    // "newMethod" : (num) =>{         //  Arrow functions do not have their own this context
    //     this.year = num;
    // }
    "newMethod" : function(num){
        this.year = num;
    }
}
book.newMethod(2020);
console.log(book.year);

// Activity 3 : Nested Objects
//------------------------------------------------
// Task 5 - 
var library = {"name": "shyam library",
    "books": {"action": "spiderman", "thrill": "doremon"},
    "All_books": ["hello", "hi", "newbook", "oldBook"],
    "year": 2024
}
console.log(library.books.action);

// Task 6 - 
console.log(library.name);
console.log(library.books);
console.log(library.All_books);

// Activity 4 : .this keyword
//------------------------------------------------
// Task 7 - 
var bookzy = {"Title": "The journey",
    "Author": "Vinay",
    "year": 2024,
    "methd" : function(){
        return this.Title +": "+ this.year;
    }
}
console.log(bookzy.methd());

// Activity 5 : Object Iteration
//------------------------------------------------
// Task 8 - for...in

for (const key in bookzy) {
    console.log(`${bookzy[key]} and key was ${key}`)
    }

// Task 9 - Object.keys and Object.values
var keyOfObject = Object.keys(bookzy);
console.log(keyOfObject);

var valueObject = Object.values(bookzy);
console.log(valueObject);

//------------------------------------------------
            // Day-7 task: completed
//------------------------------------------------