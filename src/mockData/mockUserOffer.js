const mockUserOffers = {
   "data": {
     "getUserOffers": {
       "listings": [{
       "id": '23',
       "produceName": 'Pepper',
       "produceType": 'Jalapeno',
       "description": 'Large jalapenos',
       "quantity": '3',
       "unit": 'lbs',
       "status": 'open',
       "updatedAt": '02/21/2021',
       "user": {
         "id": '17',
         "firstName": 'Sonia'
       },
       "offers": [{
         "produceName": 'Herbs',
         "produceType": 'Italian Parsley',
         "description": 'Broad-leaf, organic',
         "quantity": '12',
         "unit": 'bunches',
         "status": 'pending',
         "updatedAt": '2/22/2021',
         "user": {
           "firstName": 'Ryu',
           "email": 'streetFighter@capcom.com'
         }
       }]
     },
     {
       "id": '9',
       "produceName": 'Kale',
       "produceType": 'Tuscan',
       "description": 'Great for kale chips!',
       "quantity": '2',
       "unit": 'grocery bags',
       "status": 'accepted',
       "updatedAt": '02/20/2021',
       "user": {
         "id": '170',
         "firstName": 'Cami'
       },
       "offers": [{
         "produceName": 'Peppers',
         "produceType": 'Green Chile',
         "description": 'Large, 5 inches each',
         "quantity": '1',
         "unit": 'grocery bag',
         "status": 'accepted',
         "updatedAt": '2/22/2021',
         "user": {
           "firstName": 'Ryu',
           "email": 'streetFighter@capcom.com'
         }
       }]
     }]
    },
    "error": []
   }
  }

  export default mockUserOffers;