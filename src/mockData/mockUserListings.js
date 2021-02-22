const mockUserListings = {
  "data": {
    "getUserListings": {
      "listings": [{
        "id": "283284732",
        "zipCode": '80222',
        "status": 'open',
        "updatedAt": '11/11/11',
        "produceName": 'Pepper',
        "produceType": 'Poblano',
        "description": 'Each pepper is 5 inches long',
        "quantity": '15',
        "units": 'peppers',
        "offers": [{
           "id": "46293764912",
           "user": {
              "firstName": 'Dakota',
              "email": 'thedude@example.com'
            },
           "status": 'pending',
           "updatedAt": '12/12/12',
           "produceName": 'Tomato',
           "produceType": 'Roma',
           "description": 'Organic, vine-ripened',
           "quantity": '2',
           "units": 'lbs'
        }]
      },
      {
        "id": "9238748931742",
        "zipCode": '80222',
        "status": 'accepted',
        "updatedAt": '13/13/13',
        "produceName": 'Squash',
        "produceType": 'Yellow',
        "description": '7 inches long each',
        "quantity": '3',
        "units": 'lbs',
        "offers": [{
           "id": "783467823",
           "user": {
              "firstName": 'Marge',
              "email": 'LargeMarge@bigadventure.com'
            },
           "status": 'accepted',
           "updatedAt": '14/14/14',
           "produceName": 'Melon',
           "produceType": 'Watermelon',
           "description": 'Organic, seedless',
           "quantity": '2',
           "units": 'melons'
        }]
      }]
  },
  "error": []
  }
}

export default mockUserListings;