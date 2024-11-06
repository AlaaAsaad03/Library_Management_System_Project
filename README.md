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
   git clone https://github.com/AlaaAsaad03/library-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd library-management-system
   ```

3. Install the dependencies for Angular:

   ```bash
   cd UI
   npm install
   ```

4. Set up the back-end:

   ```bash
   cd ../API
   dotnet restore
   ```

5. Update the connection string for your database in `appsettings.json`.

6. Run the back-end API:

   ```bash
   dotnet run
   ```

7. Run the front-end Angular app:

   ```bash
   cd ../UI
   ng serve
   ```

### Usage

1. Access the application in your browser at `http://localhost:4200/`.
2. Log in as an admin, librarian, or member to explore different features.

### API Endpoints

**Library**

- **Register User**
  - `POST /api/Library/Register`

- **User Login**
  - `GET /api/Library/Login`

- **Retrieve Books**
  - `GET /api/Library/GetBooks`

- **Order a Book**
  - `POST /api/Library/OrderBook`

- **Get User's Orders**
  - `GET /api/Library/GetOrdersOFUser`

- **Add Book Category**
  - `POST /api/Library/AddCategory`

- **Retrieve Categories**
  - `GET /api/Library/GetCategories`

- **Add Book to Library**
  - `POST /api/Library/AddBook`

- **Delete Book from Library**
  - `DELETE /api/Library/DeleteBook`

- **Return Book**
  - `GET /api/Library/ReturnBook`

- **Retrieve Users**
  - `GET /api/Library/GetUsers`

- **Approve Borrow Request**
  - `GET /api/Library/ApproveRequest`

- **Retrieve All Orders**
  - `GET /api/Library/GetOrders`

- **Send Email Notifications for Pending Returns**
  - `GET /api/Library/SendEmailForPendingReturns`

- **Block Users with Overdue Fines**
  - `GET /api/Library/BlockFineOverdueUsers`

- **Unblock User**
  - `GET /api/Library/Unblock`
