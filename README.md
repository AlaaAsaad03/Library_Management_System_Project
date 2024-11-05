# Library Management System

A web-based Library Management System built with Angular 18 for the front-end and .NET Core 8 APIs for the back-end. This system allows users to manage books, borrowers, and library staff, providing role-based access to different functionalities.

## Features

- **User Authentication**: Role-based access for admins, librarians, and members.
- **Book Management**: Add, update, and delete books from the inventory.
- **Borrowing & Returns**: Handle book borrowing and returns, track due dates.
- **Inventory Control**: Keep track of book availability and manage book categories.
- **User Management**: Manage library members and staff.

## Tech Stack

- **Front-end**: Angular 18
- **Back-end**: .NET Core 8
- **Database**: SQL Server (or any other relational database)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (or another compatible database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/library-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd library-management-system
   ```

3. Install the dependencies for Angular:

   ```bash
   cd ClientApp
   npm install
   ```

4. Set up the back-end:

   ```bash
   cd ../ServerApp
   dotnet restore
   ```

5. Update the connection string for your database in `appsettings.json`.

6. Run the back-end API:

   ```bash
   dotnet run
   ```

7. Run the front-end Angular app:

   ```bash
   cd ../ClientApp
   ng serve
   ```

### Usage

1. Access the application in your browser at `http://localhost:4200/`.
2. Log in as an admin, librarian, or member to explore different features.

## API Endpoints

- **/api/books**: Manage book information
- **/api/users**: Manage library members and staff
- **/api/borrow**: Handle borrowing and returning of books

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute to the project.
