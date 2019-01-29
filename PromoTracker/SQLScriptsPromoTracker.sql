USE [master]
GO
/****** Object:  Database [PromoTracker]    Script Date: 1/26/2019 1:28:18 PM ******/
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
/****** Object:  Table [dbo].[book]    Script Date: 1/26/2019 1:28:19 PM ******/
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
/****** Object:  Table [dbo].[customer]    Script Date: 1/26/2019 1:28:19 PM ******/
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
/****** Object:  Table [dbo].[order]    Script Date: 1/26/2019 1:28:19 PM ******/
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
/****** Object:  Table [dbo].[orderType]    Script Date: 1/26/2019 1:28:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orderType](
	[id] [int] NULL,
	[type] [varchar](255) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[promotion]    Script Date: 1/26/2019 1:28:20 PM ******/
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
GO
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (1, 9000000, 9780679785897, 1, N'Fear and Loathing in Las Vegas', N'active', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (2, 9000000, 9780451191151, 2, N'The Fountainhead', N'active', CAST(N'2018-01-02T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (3, 9000000, 9780060529703, 3, N'Everything Is Illuminated', N'active', CAST(N'2016-01-04T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (4, 9000000, 9780307887436, 1, N'Ready Player One', N'active', CAST(N'2016-01-04T00:00:00.000' AS DateTime))
GO
INSERT [dbo].[book] ([id], [customerId], [isbn], [promoId], [title], [status], [createdOn]) VALUES (5, 9000000, 9780393324815, 3, N'Moneyball', N'active', CAST(N'2014-01-06T00:00:00.000' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[book] OFF
GO
INSERT [dbo].[customer] ([id], [customerNumber], [name]) VALUES (1, 9000000, N'Bob Loblaws Law Blogs')
GO
INSERT [dbo].[customer] ([id], [customerNumber], [name]) VALUES (2, 6000000, N'Margni Books')
GO
SET IDENTITY_INSERT [dbo].[order] ON 
GO
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (1, 42, 5, CAST(N'2019-02-01T00:00:00.000' AS DateTime), 3000, 1, 18000.9900)
GO
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (2, 6200, 1, CAST(N'2019-02-02T00:00:00.000' AS DateTime), 500, 2, 4000.3700)
GO
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (3, 44, 5, CAST(N'2019-02-03T00:00:00.000' AS DateTime), 6000, 1, 36000.5400)
GO
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (4, 6201, 2, CAST(N'2019-02-04T00:00:00.000' AS DateTime), 1000, 2, 8000.8100)
GO
INSERT [dbo].[order] ([id], [orderNumber], [bookId], [orderDate], [quantity], [orderTypeId], [printFee]) VALUES (5, 46, 3, CAST(N'2019-02-05T00:00:00.000' AS DateTime), 50, 1, 312.5000)
GO
SET IDENTITY_INSERT [dbo].[order] OFF
GO
INSERT [dbo].[orderType] ([id], [type]) VALUES (1, N'SR')
GO
INSERT [dbo].[orderType] ([id], [type]) VALUES (2, N'DI')
GO
SET IDENTITY_INSERT [dbo].[promotion] ON 
GO
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (1, N'FREEBOOK1', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-06-30T00:00:00.000' AS DateTime), N'free title setup', N'marketing', N'US customers only')
GO
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (2, N'ALMOSTFREE', CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-09-30T00:00:00.000' AS DateTime), N'50 percent off title setup', N'association', N'UK customers only')
GO
INSERT [dbo].[promotion] ([id], [name], [start], [end], [desc], [category], [restrictions]) VALUES (3, N'GETSTARTED', CAST(N'2019-06-01T00:00:00.000' AS DateTime), CAST(N'2019-12-31T00:00:00.000' AS DateTime), N'free title setup', N'expert', N'none')
GO
SET IDENTITY_INSERT [dbo].[promotion] OFF
GO
USE [master]
GO
ALTER DATABASE [PromoTracker] SET  READ_WRITE 
GO
