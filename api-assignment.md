# Api Documentation for Social Media Application

# Overview
This documentation outlines the API endpoints to the developer for a social media like application. The API provides the functionality of user authentication, friend management, post 
interaction.
# Base URL
```
api.domain.com/v1/
```
# Authentication
Authentication is done using the `jwt` tokens. Pass the `jwt`
access token as a header with the key Authorization and the value as `Bearer <access-token>`

Below is the header format for common for all the api's.

```
Accept: application/json
Content-Type: application/json
Authorization:
Authorization: Bearer <access-token>
```
# API's
## User Sign-up
- This api endpoint will be used to create an user in the databse.
### Endpoint
```
api.domain.com/v1/signup
```
### Sample request
#### Request HTTP Header
```
POST /signup HTTP1.1
Accept: application/json
Content-Type: application/json
```

#### Request Body
```
{
	"username" : "username",
	"password" : "SecurePassword@123"
}
```

### Sample Response
#### Success
```
HTTP1.1 201 Created
Content-Type: application/json

{
	"userId" : 123123123123123
	"message" : "User signed up successfully",
}
```

#### Error
##### Username Already Exists
```
HTTP1.1 409 Conflict
Content-Type: application/json

{
	"message" : "Username already exists. Please choose another username."
}
```
##### Password Length validation
```
HTTP1.1 400 Bad Request
Content-Type: application/json

{
	"message" : "Password should be of atleast 10 characters long"
}
```
##### Capital Letter validation
```
HTTP1.1 400 Bad Request
Content-Type: application/json

{
	"message" : "Password should contain a capital letter"
}
```

##### Number Validation
```
HTTP1.1 400 Bad Request
Content-Type: application/json

{
	"message" : "Password should contain a number"
}
```

##### Special Character Validation
```
HTTP1.1 400 Bad Request
Content-Type: application/json

{
	message: "Password should contain a special character"
}
```

## User Login
- This api endpoint is for the user login.
- A successful user login will generate a user access token to let the user access to the various resources
### Endpoint
```
api.domain.com/v1/login
```
### Sample Request
#### Request Header
```
POST /login HTTP1.1
Accept: application/json
Content-Type: application/json
```

#### Request Body
```
{
	"username" : "username",
	"password" : "SecurePassword@123"
}
```
### Sample Response
#### Success
```
HTTP1.1 201 Created
Content-Type: application/json

{
	"userId" : 123123123123123
	"access" : <access-token>
	"message" : "User logged in successfully"
}
```

#### Error
##### User does not exists 
```
HTTP1.1 401 UnAuthorized
Content-Type: application/json

{
	"message" : "User with this username does not exists."
}
```

##### Wrong Password
```
HTTP1.1 401 UnAuthorized
Content-Type: application/json

{
	"message" : "Wrong Password"
}
```

## Send Friend Request
- This endpoint is for creating a friend request.
- This would create an entry in the friend request database table.

### Endpoint
```
api.domain.com/v1/user/:id/friend-request
```
- Here the id represent the recipient user.
### Sample Request
#### Request Header
```
POST /user/:id/friend-request HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

#### Request Body
```
{
	"requesterId" : <current-userid>
}
```

### Sample Response
```
HTTP1.1 200 OK
Content-Type: application/json

{
	"requestID" : 0000000001
	"recipientID" : 123123123123123
	"requesterID" : 123123123123121
	"status": "pending"
}
```

## Accept or Reject a friend Request
- This endpoint is used for accepting a friend request or rejecting a friend request.

### Endpoint
```
api.domain.com/v1/user/:id/friend-request/:request-id
```

### Sample Request

#### Accept
#### HTTP Header
```
PATCH /user/:id/friend-request/:request-id HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

#### Request Body
```
{
	"status" : "Accepted"
}
```
##### Reject
```
DELETE /user/:id/friend-request/:request-id HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

### Sample Response
##### Accepted
```
HTTP1.1 200 OK
Content-Type: application/json

{
	"requestID" : 0000000001
	"recipientID" : 123123123123123
	"requesterID" : 123123123123121
	"status": "accepted"
	"message": "Friend Request accepted"
}
```

##### Rejected
```
HTTP1.1 200 OK
Content-Type: application/json

{
	"message" : "Friend request rejected"
}
```

## Create a Post

### Endpoint
```
api.domain.com/v1/posts
```

### Sample Request
#### HTTP Header
```
POST /posts HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

### Request Body
```
{
	"postContent" : "This is test post"
}
```

### Sample Response
#### Success
```
HTTP1.1 201 Created
Content-Type: application/json

{
		"postId" : 098765123466,
		"content": "Hello this is a sample post 1",
		"userId": 123123123123123
		"createdAt": 2004-10-19 10:23:54+02
}
```

#### Error
##### Validation Error
```
HTTP1.1 400 Bad Request
Content-Type: application/json

{
	"message" : "Post should contain maximum of 256 characters"
}
```

## Like Posts
### Endpoint
```
api.domain.com/v1/posts/:id/like
```
- Here id is of the post which is to be liked.
### Sample HTTP Request
#### HTTP Header
```
POST /posts/:id/like HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

#### HTTP Request
```
{
	"likedBy" : 123123123123123
}
```

### Sample Response
```
HTTP1.1 201 Created
Content-Type: application/json

{
	"LikedId" : 321321321321321
}
```

## List Posts
### Endpoint
```
api.domain.com/v1/posts
```

### Sample HTTP Request
#### HTTP Header
```
GET /posts HTTP1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer <access-token>
```

### Sample Response
```
{
	{
		"postId" : 098765123465,
		"content": "Hello this is a sample post 0",
		"userId": 123123123123123
		"createdAt": 2004-10-19 10:23:54+02
	},
	{
		"postId" : 098765123466,
		"content": "Hello this is a sample post 1",
		"userId": 123123123123123
		"createdAt": 2004-10-19 10:23:54+02
	},
	{
		"postId" : 098765123467,
		"content": "Hello this is a sample post 2",
		"userId": 123123123123123
		"createdAt": 2004-10-19 10:23:54+02
	},
}
```
## Database
### User
- This table would contain the details of the user

| UserID   | PK   |
| -------- | ---- |
| Username | Char |
| Password | Char |
### Post
- This would contain the post details

| PostID    | PK        |
| --------- | --------- |
| User      | FK        |
| Content   | Char(256) |
| CreatedAt | DateTime  |
### Likes
- This would contain the likes on a post
- To get the count of a like on a post we will filter out all the likes using the PostID and aggregate it.

| LikeID | PK  |
| ------ | --- |
| UserID | FK  |
| PostID | FK  |

### Friend Request
- This would contain all the pending friend request.
- For getting the followers we can filter out all the by the recipientID
- RecipientID is of the one to whom the friend request was sent to
- RequesterID is of the one who sent the friend request.

| ID          | PK   |
| ----------- | ---- |
| RecipientID | FK   |
| RequesterID | FK   |
| Status      | Char |

