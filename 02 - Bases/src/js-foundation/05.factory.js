
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => ({
        id: getUUID(),
        name,
        birthdate,
        age: getAge(birthdate),
    });
};

module.exports = {
    buildMakePerson,
};
