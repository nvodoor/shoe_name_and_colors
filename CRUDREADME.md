# CRUD DOCUMENTATION

## GET REQUESTS

- req.body requirements: None
- req.params requirements: ShoeID
- Response: ShoeData

## POST REQUESTS

- req.body requirements: ['ShoeID', 'shoeColors', 'price', 'shoeLine', 'images', 'shoeType']
- Response: None

## DELETE REQUESTS

- req.param requirements: ShoeID
- Response: None

## UPDATE REQUESTS

- req.param requirements: ShoeID
- req.body requirements: ['ShoeID', 'shoeColors', 'price', 'shoeLine', 'images', 'shoeType']
- Response: None
