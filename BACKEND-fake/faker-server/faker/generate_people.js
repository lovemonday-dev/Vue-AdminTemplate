module.exports = function() {
    var {faker} = require("@faker-js/faker");

    return {
        people: faker.helpers.multiple(function(_, n) {
            return {
                id: n + 1,
                name: faker.person.fullName(),
                avatar: faker.image.avatar(),
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                zipCode: faker.location.zipCode(),
                stateAbbr: faker.location.state({abbreviated: true}),
                phone: faker.phone.number(),
                email: faker.internet.email(),
                department: faker.helpers.arrayElement(["Customer Support", "Engineering", "Sales", "Finance", "Marketing", "Production",
                                      "R&D", "Human Resource Management"]),
                jobs: faker.helpers.arrayElement(['analyst', 'economist', 'Secretary', 'management board', 'wholesale distributing manager',
                'export sales manager', 'sales manager', 'sales representative', 'service engineer', 'purchasing assistent',
                'assistent', 'CEO (Chief Executive Officer)', 'treasurer, CFO (Chief Financial Officer)', 'warehouse worker',
                'warehouse manager', 'service engineer', 'commercial agent', 'co-director', 'managing director', 'director general',
                'purchasing manager', 'buyer', 'director of boards'])
            };
        }, {count: 100})
    };
};
