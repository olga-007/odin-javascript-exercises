const findTheOldest = function(people) {
    function getAge(person) {
        return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
    }
    return people.reduce((oldest, current) => getAge(current) > getAge(oldest) ? current : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
