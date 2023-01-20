const findTheOldest = function(people) {
    let oldestindex = 0;
    max_age = 0;
    for(i=0; i<people.length; i++){
        if(people[i].yearOfDeath == undefined){
            if((2023 - people[i].yearOfBirth) > (people[oldestindex].yearOfDeath - people[oldestindex].yearOfBirth)){
                oldestindex = i;
            }
        }else{
            if((people[i].yearOfDeath - people[i].yearOfBirth) > (people[oldestindex].yearOfDeath - people[oldestindex].yearOfBirth)){
                oldestindex = i;
          }
        }
    }
    return people[oldestindex];
};

// Do not edit below this line
module.exports = findTheOldest;
