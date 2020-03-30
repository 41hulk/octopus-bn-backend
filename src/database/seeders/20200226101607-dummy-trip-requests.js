export default {
  up: (queryInterface) => queryInterface.bulkInsert('travelRequests', [
    {
      id: '48e9bfdf-6d21-4fd8-8fc7-df654d615be1',
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
      id: '46e9bfdf-6d21-4fd8-8fc7-df654d615be1',
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
      id: '70e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1204569',
      gender: 'male',
      from: 'Rwanda',
      to: 'Tanzania',
      accommodation: 'yes',
      reason: 'Forest',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-09-24',
      status: 'rejected',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '45e9bfdf-6d21-4fd8-8fc7-df654d615be1',
      id: '45e9bfdf-6d21-4fd8-8fc7-df654d615be1',
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
      id: '44e9bfdf-6d21-4fd8-8fc7-df654d615be1',
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
    },
    {
      id: '54e9bfdf-6d21-4fd8-8fc7-df654d615be6',
      userID: '0e11ed8c-a1a5-4f49-a3ca-450769bfa49o',
      type: 'one way',
      passportNumber: 'GH1234550',
      gender: 'male',
      from: 'Kigali',
      to: 'Nyagatare',
      accommodation: 'no',
      reason: 'farming',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-04-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5086bfdb-37d3-4b03-99f6-1889e33aa048',
      userID: '123212965431',
      type: 'one way',
      passportNumber: 'GH1234550',
      gender: 'male',
      from: 'Kigali',
      to: 'Nyagatare',
      accommodation: 'no',
      reason: 'farming',
      manager: 'itsafact57@gmail.com',
      departureDate: '2020-05-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '81821f4e-0d90-460c-b8c5-17da573f5e19',
      userID: 'd01cf3f2-4601-4b53-8ffd-fd46b6ded623',
      type: 'one way',
      passportNumber: 'GH1234850',
      gender: 'male',
      from: 'Kamonyi',
      to: 'Kigali',
      accommodation: 'yes',
      reason: 'farming',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-04-24',
      status: 'approved',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2b5e4cd5-7137-48b8-86ca-52fdf7929a97',
      userID: 'd01cf3f2-4601-4b53-8ffd-fd46b6ded623',
      type: 'one way',
      passportNumber: 'GH1234850',
      gender: 'male',
      from: 'Kamonyi',
      to: 'Kigali',
      accommodation: 'yes',
      reason: 'farming',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-04-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2b5e4cd5-7137-48b8-86ca-17fdf7929a97',
      userID: 'd01cf3f2-4601-4b53-8ffd-fd46b5ded623',
      type: 'one way',
      passportNumber: 'GH1234850',
      gender: 'male',
      from: 'Kamonyi',
      to: 'Kigali',
      accommodation: 'yes',
      reason: 'farming',
      manager: 'needs.grid@gmail.com',
      departureDate: '2020-04-24',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('travelRequests', null, {})
};
