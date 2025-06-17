
// program berisikan kombinasi beberapa  flow control yang dijadikan 
// ke dalam satu kesatuan program yang utuh dalam bentuk function, looping
// kondisional, dan error handling

function checkGrades(grades){
    for(let i = 0; i < grades.length; i++){
        if(typeof grades[i] !== 'number'){
            throw new Error("Invalid Input All grades must be numbers.");
        }
    
    const grade = grades[i];
    let predicate; 
    
    if (grade >= 90){
        predicate = "A"
    } else if (grade >= 80){
        predicate = "B"
    } else if (grade >= 70){
        predicate = "C"
    } else if (grade >= 60 ){
        predicate = "D"
    } else {
        predicate = "E"
    }
    console.log(`Grade for student ${i + 1} is: ${predicate}`);
    }
}

try {
    const studentGrades = [95, 85, 76, 65, 55];
    checkGrades(studentGrades);
} catch (e){
    console.error(e);
}