

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores){
        super(firstName, lastName, id);
        this.scores = scores
    
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        let total = 0;
        for(let i = 0; i < this.scores.length; i++){
            total += this.scores[i];
        }
        let avgScore = total / this.scores.length;
   
        if(avgScore >= 90 && avgScore <= 100){
            return ("O")
        }else if(avgScore >= 80 && avgScore < 90){
            return ("E")
        }else if(avgScore >= 70 && avgScore< 80){
            return ("A")
        }else if(avgScore >= 55 && avgScore< 70){
         return ("P")
        }else if(avgScore >= 40 && avgScore< 55){
            return ("D")
        }else{
            return("T")
        }
    }
}

