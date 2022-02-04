function solve(inputObject) {

    if(inputObject.dizziness === true) {
        inputObject.levelOfHydrated += inputObject.weight * 0.1 * inputObject.experience;
        inputObject.dizziness = false;
    }

    return inputObject;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
    ));