# AWS-API

## Author: Seth P. Pierce

### Root Url

<https://iq4ucob2q3.execute-api.us-east-2.amazonaws.com/Lab18>

![uml](/lab18.png)

### Routes

- /people
  - GET
    - requires no input
    - returns all users
  - POST
    - requires request body
      - {
        "id": "id",
        "name": "name",
        "age": age,
        "phone": "phone"
      }
    - returns new user

- /people/{id}
  - GET
    - requires id in path parameter
    - returns person with matching id
  - DELETE
    - requires id in path parameter
    - returns nothing
  - PUT
    - requires id in path parameter, and request body with updated information for the matching id
    - returns the updated person
