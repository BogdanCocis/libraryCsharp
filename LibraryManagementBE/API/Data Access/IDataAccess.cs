﻿using API.Models;
using Dapper;
using System.Data.SqlClient;

namespace API.Data_Access
{
    public interface IDataAccess
    {
        int CreateUser(User user);
        bool IsEmailAvailable(string email);
        bool AuthenticateUser(string email, string password, out User? user);

        IList<Book> GetAllBooks();
        bool OrderBook(int userId, int bookId);
        IList<Order> GetOrdersOfUser(int userId);

        IList<Order> GetAllOrders();

        bool ReturnBook(int userId, int bookId);

        public IList<User> GetUsers();

        void BlockUser(int userId);

        void UnblockUser(int userId);

        void DeactivateUser(int userId);

        void ActivateUser(int userId);

        public IList<BookCategory> GetAllCategories();

        void InsertNewBook(Book book);

        bool DeleteBook(int bookId);

        void CreateCategory(BookCategory bookcategory);
    }
}
