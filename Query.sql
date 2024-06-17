use [Library];


select * from Books; 
select * from Users;
select * from Orders;
select * from BookCategories;

delete  from BookCategories

insert into Users (FirstName, LastName, Email, Mobile, Password, Blocked, Active, CreatedOn, UserType)
values ('Admin', 'Admin', 'admin@gmail.com', '7757869131', 'admin1999, 1, 1, 2023/01/10 21:00:00', 'ADMIN');

update Orders set OrderedOn = '2023/01/05 13:00:00' where Id=2;

select
o.Id as OrderId,
u.Id as UserId, CONCAT(u.FirstName,' ',u.LastName) as Name,
o.BookId as BookId, b.Title as BookName,
o.OrderedOn as OrderDate, o.Returned as Returned
from Users u LEFT JOIN Orders o ON u.Id=o.UserId
LEFT JOIN Books b ON o. BookId=b.Id
where o.UserId IN (1);

insert into Orders (UserId, BookId, Orderedon, Returned) values (4, 3, '2023/01/15 13:00:00', 0);

update Books set Ordered=0 where Id=5;

update Users set UserType='ADMIN' where Id=2;
GO