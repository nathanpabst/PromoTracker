USE [master]
GO
/****** Object:  Database [PromoTracker]    Script Date: 2/12/2019 7:34:36 PM ******/
CREATE DATABASE [PromoTracker]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N't2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\t2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N't2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\t2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [PromoTracker] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PromoTracker].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PromoTracker] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PromoTracker] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PromoTracker] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PromoTracker] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PromoTracker] SET ARITHABORT OFF 
GO
ALTER DATABASE [PromoTracker] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PromoTracker] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PromoTracker] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PromoTracker] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PromoTracker] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PromoTracker] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PromoTracker] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PromoTracker] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PromoTracker] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PromoTracker] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PromoTracker] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PromoTracker] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PromoTracker] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PromoTracker] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PromoTracker] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PromoTracker] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PromoTracker] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PromoTracker] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [PromoTracker] SET  MULTI_USER 
GO
ALTER DATABASE [PromoTracker] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PromoTracker] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PromoTracker] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PromoTracker] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PromoTracker] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [PromoTracker] SET QUERY_STORE = OFF
GO
USE [PromoTracker]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [PromoTracker]
GO
/****** Object:  Table [dbo].[book]    Script Date: 2/12/2019 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[book](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[customerId] [int] NULL,
	[isbn] [bigint] NULL,
	[promoId] [int] NULL,
	[title] [varchar](255) NULL,
	[status] [varchar](255) NULL,
	[createdOn] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[customer]    Script Date: 2/12/2019 7:34:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[customer](
	[id] [int] NULL,
	[customerNumber] [int] NULL,
	[name] [varchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[order]    Script Date: 2/12/2019 7:34:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[order](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[orderNumber] [int] NULL,
	[bookId] [int] NULL,
	[orderDate] [datetime] NULL,
	[quantity] [bigint] NULL,
	[orderTypeId] [int] NULL,
	[printFee] [money] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orderType]    Script Date: 2/12/2019 7:34:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderType](
	[id] [int] NULL,
	[type] [varchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[promotion]    Script Date: 2/12/2019 7:34:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[promotion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
	[start] [datetime] NULL,
	[end] [datetime] NULL,
	[desc] [varchar](255) NULL,
	[category] [varchar](255) NULL,
	[restrictions] [varchar](255) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[book] ON 

INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (1, 9000000, 9780679785897, 1, N'Fear and Loathing in Las Vegas', N'active', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (2, 9000000, 9780451191151, 2, N'The Fountainhead', N'active', CAST(N'2018-01-02T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (3, 9000000, 9780060529703, 3, N'Everything Is Illuminated', N'active', CAST(N'2016-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (4, 9000000, 9780307887436, 1, N'Ready Player One', N'active', CAST(N'2016-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (5, 9000000, 9780393324815, 3, N'Moneyball', N'active', CAST(N'2014-01-06T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (6, 9000000, 9780452281257, 11, N'Anthem', N'active', CAST(N'2018-06-06T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (7, 9000000, 978132854695, 12, N'AI Super Powers', N'active', CAST(N'2019-04-02T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (8, 9000000, 9780262038409, 13, N'How Smart Machines Work', N'active', CAST(N'2019-01-06T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (9, 9000000, 9780307265432, 14, N'The Road', N'active', CAST(N'2019-02-10T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (10, 9000000, 9780544484009, 15, N'Everything Is Illuminated', N'active', CAST(N'2019-04-07T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (11, 9000001, 9780735210622, 16, N'When', N'active', CAST(N'2018-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (12, 9000002, 9780393354775, 16, N'The Undoing Project', N'active', CAST(N'2018-01-02T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (13, 9000003, 9780140042597, 16, N'On The Road', N'active', CAST(N'2018-01-03T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (14, 9000004, 9780375757327, 15, N'Robinson Crusoe', N'active', CAST(N'2018-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (15, 9000005, 9780099910107, 15, N'A Farewell To Arms', N'active', CAST(N'2018-01-05T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (16, 9000006, 9780451163967, 15, N'One Flew Over The Cuckoo''s Nest', N'active', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (17, 9000007, 9780062497482, 15, N'They Call Me SuperMensch', N'active', CAST(N'2019-01-02T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (18, 9000008, 9780449213940, 3, N' All Quiet On the Western Front', N'active', CAST(N'2019-01-03T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (19, 9000009, 9780142437230, 3, N'Don Quixote', N'active', CAST(N'2019-01-04T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (20, 9000010, 9780684856476, 3, N' The Rum Diary', N'active', CAST(N'2019-01-05T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (21, 9000011, 9780812995343, 3, N'Lincoln In The Bardo', N'active', CAST(N'2019-01-06T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (22, 9000012, 9780380729401, 3, N'Something Wicked This Way Comes', N'active', CAST(N'2019-01-07T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (23, 9000013, 9780385353304, 11, N'Station Eleven', N'active', CAST(N'2019-01-08T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (24, 9000014, 9780385542364, 11, N'The Underground Railroad', N'active', CAST(N'2019-01-09T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (25, 9000015, 9780684830490, 11, N'The Old Man and the Sea', N'active', CAST(N'2019-01-10T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (26, 9000016, 9780142437612, 11, N'Seize the Day', N'active', CAST(N'2019-01-11T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (27, 9000017, 9781594204111, 11, N'The Signal and the Noise', N'active ', CAST(N'2019-01-12T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (28, 9000018, 9781594489587, 11, N'The Brief Wonderous Life of Oscar Wao', N'active ', CAST(N'2019-01-13T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (29, 9000019, 9780062435637, 14, N'Competing Against Luck', N'active ', CAST(N'2019-01-14T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (30, 9000020, 9780743249270, 14, N'Lean Thinking', N'active', CAST(N'2019-01-15T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (31, 9000021, 9781400063253, 14, N'American Lion', N'active', CAST(N'2019-01-16T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (32, 9000022, 9780618711659, 14, N'Extremely Loud and Incredibly Close', N'active ', CAST(N'2019-01-17T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (33, 9000023, 9780061142024, 14, N'Stardust', N'active', CAST(N'2019-01-17T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (34, 9000024, 9780374292089, 14, N'Wolf in White Van', N'active', CAST(N'2019-01-18T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (35, 9000025, 9781400069286, 14, N'The Power of Habit', N'active', CAST(N'2019-01-19T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (36, 9000026, 9781455530090, 2, N'13 Hours', N'active', CAST(N'2019-01-20T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (37, 9000027, 9780062285539, 2, N'The Good Luck of Right Now', N'active', CAST(N'2019-01-21T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (38, 9000028, 9780804139021, 2, N'The Martian', N'active', CAST(N'2019-01-22T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (39, 9000029, 9780060833459, 2, N'The Effective Executive', N'active', CAST(N'2019-01-23T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (40, 9000030, 9781771642095, 2, N'1000 Lashes', N'active', CAST(N'2019-01-24T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (41, 9000031, 9780060589462, 2, N'Zen and the Art of Motorcycle Maintenance', N'active', CAST(N'2019-01-25T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (42, 9000032, 9781400067657, 2, N'Destiny and Power', N'active', CAST(N'2019-01-26T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (43, 9000033, 9781451648539, 2, N'Steve Jobs', N'active', CAST(N'2019-01-27T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (44, 9000034, 9780393353150, 15, N'The Big Short', N'active', CAST(N'2019-01-28T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (45, 9000035, 9780316921176, 15, N'Infinite Jest', N'active', CAST(N'2019-01-29T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (46, 9000036, 9780525951278, 15, N'This Is Where I Leave You', N'active ', CAST(N'2019-01-30T00:00:00.000' AS DateTime))
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (47, 9000037, 9781554681723, 15, N'The Art of Racing in the Rain', N'active', CAST(N'2019-01-31T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[book] OFF
INSERT [dbo].[customer] ([id], [customerNumber], [name]) VALUES (1, 9000000, N'Bob Loblaws Law Blogs')
INSERT [dbo].[customer] ([id], [customerNumber], [name]) VALUES (2, 6000000, N'Margni Books')
SET IDENTITY_INSERT [dbo].[order] ON 

INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (1, 42, 5, CAST(N'2019-02-01T00:00:00.000' AS DateTime), 3000, 1, 18000.9900)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (2, 6200, 1, CAST(N'2019-02-02T00:00:00.000' AS DateTime), 500, 2, 4000.3700)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (3, 44, 5, CAST(N'2019-02-03T00:00:00.000' AS DateTime), 6000, 1, 36000.5400)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (4, 6201, 2, CAST(N'2019-02-04T00:00:00.000' AS DateTime), 1000, 2, 8000.8100)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (5, 46, 3, CAST(N'2019-02-05T00:00:00.000' AS DateTime), 50, 1, 312.5000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (6, 41, 11, CAST(N'2019-01-01T00:00:00.000' AS DateTime), 1000, 1, 5250.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (7, 43, 12, CAST(N'2019-02-02T00:00:00.000' AS DateTime), 2500, 2, 13125.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (8, 40, 13, CAST(N'2019-02-03T00:00:00.000' AS DateTime), 3300, 1, 17325.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (9, 45, 14, CAST(N'2019-02-04T00:00:00.000' AS DateTime), 4200, 2, 22050.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (10, 39, 15, CAST(N'2019-02-05T00:00:00.000' AS DateTime), 800, 1, 4200.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (11, 47, 16, CAST(N'2019-02-06T00:00:00.000' AS DateTime), 1700, 2, 8925.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (12, 48, 17, CAST(N'2019-02-07T00:00:00.000' AS DateTime), 3300, 1, 17325.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (13, 49, 18, CAST(N'2019-02-08T00:00:00.000' AS DateTime), 4200, 2, 22050.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (14, 50, 19, CAST(N'2019-02-09T00:00:00.000' AS DateTime), 1100, 1, 5775.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (15, 51, 20, CAST(N'2019-02-10T00:00:00.000' AS DateTime), 1900, 2, 9975.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (16, 52, 21, CAST(N'2019-02-11T00:00:00.000' AS DateTime), 3300, 1, 17325.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (17, 53, 22, CAST(N'2019-02-12T00:00:00.000' AS DateTime), 4200, 2, 22050.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (18, 54, 23, CAST(N'2019-02-13T00:00:00.000' AS DateTime), 5700, 1, 29925.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (19, 55, 24, CAST(N'2019-02-14T00:00:00.000' AS DateTime), 10500, 2, 55125.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (20, 56, 25, CAST(N'2019-02-15T00:00:00.000' AS DateTime), 4800, 1, 25200.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (21, 57, 26, CAST(N'2019-02-16T00:00:00.000' AS DateTime), 20500, 2, 107625.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (22, 58, 27, CAST(N'2019-02-17T00:00:00.000' AS DateTime), 17200, 1, 90300.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (23, 59, 28, CAST(N'2019-02-18T00:00:00.000' AS DateTime), 4600, 2, 24150.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (24, 60, 29, CAST(N'2019-02-19T00:00:00.000' AS DateTime), 7100, 1, 37275.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (25, 61, 30, CAST(N'2019-02-20T00:00:00.000' AS DateTime), 100, 2, 525.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (26, 62, 31, CAST(N'2019-02-21T00:00:00.000' AS DateTime), 11400, 1, 59850.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (27, 63, 32, CAST(N'2019-02-22T00:00:00.000' AS DateTime), 11200, 2, 58800.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (28, 64, 33, CAST(N'2019-02-23T00:00:00.000' AS DateTime), 14200, 1, 74550.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (29, 65, 34, CAST(N'2019-02-24T00:00:00.000' AS DateTime), 3200, 2, 16800.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (30, 66, 35, CAST(N'2019-02-25T00:00:00.000' AS DateTime), 18300, 1, 96075.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (31, 67, 36, CAST(N'2019-02-26T00:00:00.000' AS DateTime), 1200, 2, 6300.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (32, 68, 37, CAST(N'2019-02-26T00:00:00.000' AS DateTime), 12300, 1, 64575.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (33, 69, 38, CAST(N'2019-02-27T00:00:00.000' AS DateTime), 8600, 2, 45150.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (34, 70, 39, CAST(N'2019-02-27T00:00:00.000' AS DateTime), 12600, 1, 66150.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (35, 71, 40, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 9200, 2, 48300.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (36, 72, 41, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 12900, 1, 67725.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (37, 73, 42, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 21600, 2, 48300.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (38, 74, 43, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 24300, 1, 127575.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (39, 75, 44, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 18800, 2, 98700.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (40, 76, 45, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 14600, 1, 76650.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (41, 77, 46, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 3000, 2, 15750.0000)
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (42, 78, 47, CAST(N'2019-02-28T00:00:00.000' AS DateTime), 3200, 1, 16800.0000)
SET IDENTITY_INSERT [dbo].[order] OFF
INSERT [dbo].[orderType] ([id], [type]) VALUES (1, N'SR')
INSERT [dbo].[orderType] ([id], [type]) VALUES (2, N'DI')
SET IDENTITY_INSERT [dbo].[promotion] ON 

INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (1, N'FREEBOOK', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2022-12-31T00:00:00.000' AS DateTime), N'free print AND eBook setup', N'marketing', N'AU customers only')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (2, N'ALMOSTFREE', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-09-30T00:00:00.000' AS DateTime), N'50 percent off print and eBook title setup', N'none', N'UK and US customers only')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (3, N'GETSTARTED', CAST(N'2019-06-01T00:00:00.000' AS DateTime), CAST(N'2019-12-31T00:00:00.000' AS DateTime), N'free title setup', N'expert', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (11, N'GETPUBLISHED', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'free title setup for p&e', N'marketing', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (12, N'NANO', CAST(N'2018-11-01T00:00:00.000' AS DateTime), CAST(N'2019-03-31T00:00:00.000' AS DateTime), N'free title setup for p&e', N'marketing', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (13, N'EXPERT', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'50 percent of print and eBook title setup', N'Expert', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (14, N'1106DESIGN', CAST(N'2017-10-01T00:00:00.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'free title setup for p&e', N'Expert', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (15, N'WHISPER', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2020-12-31T00:00:00.000' AS DateTime), N'free title setup for p&e', N'Expert', N'none')
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (16, N'NANOWINNER', CAST(N'2018-11-01T00:00:00.000' AS DateTime), CAST(N'2019-03-31T00:00:00.000' AS DateTime), N'5% discount on pub direct orders', N'marketing', N'NANO competition winners only')
SET IDENTITY_INSERT [dbo].[promotion] OFF
USE [master]
GO
ALTER DATABASE [PromoTracker] SET  READ_WRITE 
GO
