# Set up:
- create a .env file and add the env variables shown on .env.example
- execute the following command on the root of the repository
```bash
 npm install
```
- To execute the application on development run the following command:
```bash
npm run start:dev
 ```

# Endpoints:
The application have just one single endpoint:
```http
GET http://localhost:3001/posts
```
#### Query Parameters:
The accepted Query parameters are: *start* and *size*

#### Response:
- **Status Code**: `200 OK`
- **Content-Type**: `application/json`

#### Example Response:
```json
[
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "user": {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        "comments": [
            {
                "postId": 2,
                "id": 6,
                "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
                "email": "Presley.Mueller@myrl.com",
                "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
            },
            {
                "postId": 2,
                "id": 7,
                "name": "repellat consequatur praesentium vel minus molestias voluptatum",
                "email": "Dallas@ole.me",
                "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
            },
            {
                "postId": 2,
                "id": 8,
                "name": "et omnis dolorem",
                "email": "Mallory_Kunze@marie.org",
                "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
            },
            {
                "postId": 2,
                "id": 9,
                "name": "provident id voluptas",
                "email": "Meghan_Littel@rene.us",
                "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
            },
            {
                "postId": 2,
                "id": 10,
                "name": "eaque et deleniti atque tenetur ut quo ut",
                "email": "Carmen_Keeling@caroline.name",
                "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
            }
        ]
    }
]
```

#### Error Responses:
- **Status Code**: `500 Internal Server Error`
  - **Description**: If something goes wrong on the server side.
 
- **Status Code**: `404 Not Found`
  - **Description**: If a request is made to a route that does not exists.


```json
{
  "message": "Internal server error"
}
```
