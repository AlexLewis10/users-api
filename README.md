## Users API

A small project using [Swagger](https://swagger.io/) and the [Redocly](https://github.com/Redocly/redoc#redoc-options-object) RedocStandalone component to build mock API documentation.

The documentation shows the correct way to send api requests for a database of users. A list of users can be accessed, as well as creating, updating, viewing and deleting an individual user.

The result is a simple website with a Requests and an Error Codes page. It is possible to have error responses in the same place as the 200 responses underneath the requests but this would have resulted in a lot of repitition. Instead, some recomended best practice was followed from the OpenAPI 3.0 documentation to have a page with a list of standard error codes as well as some common errors.

| | |
|-|-|
| Framework | React |
| Components | Redocly |
| API documentation | Swagger |
| Test | Jest/Enzyme |
