export default {
  up: (queryInterface) => queryInterface.bulkInsert('travelRequests', [
    {
      requestId: '48e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1234567',
      gender: 'male',
      from: 'RW- Kigali',
      to: 'UG- Kampala',
      accommodation: 'yes',
      reason: ' just for fun!',
      manager: 'manager@example.com',
      departureDate: '2020-03-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      requestId: '46e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1234569',
      gender: 'female',
      from: 'Kenya',
      to: 'Sudan',
      accommodation: 'yes',
      reason: 'Ridding',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-03-24',
      status: 'rejected',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      requestId: '45e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1234565',
      gender: 'female',
      from: 'Tanzania',
      to: 'USA',
      accommodation: 'yes',
      reason: 'Hiking',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-03-24',
      status: 'approved',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      requestId: '44e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1234565',
      gender: 'female',
      from: 'Australia',
      to: 'HongKong',
      accommodation: 'yes',
      reason: 'gaming',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-04-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('travelRequests', null, {})
};
