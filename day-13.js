

// Declare your class here.
class MyBook extends Book {
    constructor(title, author, price){
        super(title, author);
        this.price = price;
    }

    display(){
        console.log("Title: " + this.title + "\n" + "Author: " + this.author + "\n" + "Price: " + this.price)
    }
}
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    
// End class

