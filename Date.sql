USE [Library]
GO
SET IDENTITY_INSERT [dbo].[BookCategories] ON 

INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (1, N'Historical', N'Ancient')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (2, N'Adventure', N'Science fiction')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (3, N'Historical', N'Classical')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (4, N'Historical', N'Medieval')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (5, N'Historical', N'Modern')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (6, N'Historical', N'Contemporary')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (7, N'Adventure', N'Realist')
INSERT [dbo].[BookCategories] ([Id], [Category], [SubCategory]) VALUES (8, N'Religious', N'Christian')
SET IDENTITY_INSERT [dbo].[BookCategories] OFF
GO
SET IDENTITY_INSERT [dbo].[Books] ON 

INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (2, N'The Odyssey', N'Homer',3, 1, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (3, N'Pride and Prejudice', N'Jane Austen', 4, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (5, N'The Iliad', N'Homer', 5, 1, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (7, N'The Epic of Gilgamesh', N'Anonymous', 5, 0, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (8, N'Meditations', N'Marcus Aurelius', 2, 0, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (9, N'The Histories', N'Herodotus',2, 0, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (12, N'Politics', N'Aristotle', 5, 0, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (13, N'Politics', N'Aristotle', 5, 0, 1)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (14, N'The Great Gatsby', N'Scott Fitzgerald', 4, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (15, N'The Count of Monte Cristo', N'Alexandre Dumas', 4, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (16, N'The Count of Monte Cristo', N'Alexandre Dumas', 4, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (17, N'Hamlet', N'William Shakespeare', 9, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (18, N'Dracula', N'Bram Stoker', 10, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (19, N'A Tale of Two Cities', N'Charles Dickens', 10, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (20, N'A Tale of Two Cities', N'Charles Dickens', 10, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (21, N'A Tale of Two Cities', N'Charles Dickens', 10, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (22, N'A Tale of Two Cities', N'Charles Dickens', 10, 0, 3)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (23, N'The Templars', N'Dan Jones', 3.5, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (24, N'The Templars', N'Dan Jones', 3.5, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (25, N'The Celts', N'Alice Roberts', 6.7, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (26, N'In Search of the Dark Ages', N'Michael Wood', 6, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (27, N'Powers and Thrones', N'Dan Jones', 6, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (28, N'A Distant Mirror', N'Barbara Tuchman', 6, 0, 4)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (29, N'History of Modern India', N'Bipan Chandra', 20, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (30, N'Stalingrad', N'Antony Beevor', 20, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (31, N'Stalingrad', N'Antony Beevor', 20, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (32, N'Stalingrad', N'Antony Beevor', 20, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (33, N'Gulag', N'Anne Applebaum', 23, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (34, N'Gulag', N'Anne Applebaum', 23, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (35, N'Gulag', N'Anne Applebaum', 23, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (36, N'Gulag', N'Anne Applebaum', 23, 0, 5)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (37, N'The Diary of a Young Girl', N'Anne Frank', 15, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (38, N'A Promised Land', N'Barack Obama', 15, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (39, N'Rage', N'Bob Woodward', 15, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (40, N'Rage', N'Bob Woodward', 15, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (41, N'The Age of Extremes', N'Eric Hobsbawm', 13, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (42, N'Ariadne', N'Jennifer Saint', 13, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (43, N'Ariadne', N'Jennifer Saint', 13, 0, 6)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (44, N'Moby Dick', N'Herman Melville', 17, 0, 7)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (45, N'Robinson Crusoe', N'Daniel Defoe', 10, 0, 7)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (50, N'Dune', N'Frank Herbert', 8, 0, 2)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (51, N'Hyperion', N'Dan Simmons', 9.5, 0, 2)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (52, N'Point Nemo', N'Jeremy Robinson', 10, 0, 2)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (53, N'Point Nemo', N'Jeremy Robinson', 10, 0, 2)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (54, N'After Death', N'Dean Koontz', 12, 0, 2)
INSERT [dbo].[Books] ([Id], [Title], [Author], [Price], [Ordered], [CategoryId]) VALUES (55, N'20,000 Leagues Under the Sea', N'Jules Verne', 12, 0, 7)
SET IDENTITY_INSERT [dbo].[Books] OFF
GO