### Conceptual Exercise

#### What is RESTful routing?

>

- RESTful routing is a way to organize and define API endpoints for web applications. It uses HTTP verbs (such as GET, POST, PUT, PATCH, DELETE) and CRUD actions (create, read, update, delete) to map requests to specific controller actions. This approach makes it easier for developers to understand the purpose of each endpoint and helps maintain consistency throughout the application.
  >
- For a route to be fully RESTful, it must meet certain requirements. First, it should separate the client (such as a web browser or mobile app) from the server, meaning that neither needs to know anything about the internal workings of the other. Second, it should be stateless, which means that each request should contain all the information needed for the server to respond without relying on previous requests. Finally, it should use standard HTTP methods to define the capabilities of each endpoint.

#### What is a resource?

>

- Resources are the building blocks of a RESTful API, and they allow clients (such as web browsers or mobile apps) to interact with the server and manipulate data in a predictable and consistent way. By representing each piece of data as a resource, developers can create a structured and organized API that is easy to understand and use.
  >
- For example, a resource could be a user account, a blog post, an image, or any other piece of data that can be represented by a unique URL. Each resource has a unique identifier or URI (Uniform Resource Identifier) that can be used to access or modify that resource using various HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

#### When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

>

- When building a JSON API, the focus should be on providing routes and endpoints that allow clients to interact with the data directly, rather than rendering HTML forms for users to interact with because the focus of a JSON API is on providing data to be consumed by client applications, not on rendering HTML forms for users to interact with.

#### What does idempotent mean? Which HTTP verbs are idempotent?

>

- Idempotent refers to an operation or request that can be repeated multiple times with the same result, without changing the system state beyond the initial request. In other words, performing an idempotent operation multiple times will have the same effect as performing it just once.

>

- The following HTTP methods are considered idempotent: GET: Retrieving a resource with GET multiple times should not have any side effects on the server.PUT: Updating a resource with PUT should have the same effect, regardless of how many times the operation is performed. DELETE: Deleting a resource with DELETE should have the same effect, regardless of how many times the operation is performed.

>

- The following HTTP methods are not idempotent: POST: Creating a resource with POST is not idempotent because each request will create a new resource on the server.
  PATCH: Updating a resource with PATCH is not necessarily idempotent because subsequent requests may change the system state differently depending on the initial state of the resource.

#### What is the difference between PUT and PATCH?

>

- The main difference between PUT and PATCH is in how they handle updates to resources.

>

- PUT is typically used to completely replace a resource or create a new resource with a specific ID. When using PUT, the entire representation of the resource is sent in the request, including any fields that may not have changed. This means that if only a subset of the fields need to be updated, the entire representation of the resource must still be sent.

>

- PATCH, on the other hand, is used to make partial updates to a resource. With PATCH, only the fields that need to be updated are sent in the request, and the server applies those changes to the existing resource. This makes PATCH more efficient than PUT when only a subset of the fields need to be updated.

#### What is one way encryption?

>

- One-way encryption is a cryptographic process that transforms plain text into a fixed-length string of characters, which cannot be reversed to obtain the original text. This process is also known as hashing

#### What is the purpose of a `salt` when hashing a password?

>

- A salt is a random string of data that is added to a password before it is hashed using a one-way encryption algorithm. The purpose of using a salt when hashing a password is to make the resulting hash value unique for each password, even if multiple users have the same password.

#### What is the purpose of the Bcrypt module?

>

- The Bcrypt module provides an implementation of the Bcrypt hashing algorithm in various programming languages, including JavaScript, Python, Ruby, and others. It allows developers to easily hash passwords and compare hashed passwords with user input, while automatically generating and managing secure salts for each password.

#### What is the difference between authorization and authentication?

>

- Authentication is the process of verifying the identity of a user, device, or application, while authorization is the process of granting or denying access to specific resources or actions based on the authenticated identity. In simpler terms, authentication confirms who you are, while authorization determines what you can access.
