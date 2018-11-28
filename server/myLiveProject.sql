-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 26, 2018 at 09:59 AM
-- Server version: 5.7.23-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myLiveProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(255) NOT NULL,
  `blog_name` varchar(255) NOT NULL,
  `blog_description` varchar(255) NOT NULL,
  `blog_image` varchar(255) NOT NULL,
  `blog_date` varchar(255) NOT NULL,
  `total_like` varchar(255) NOT NULL,
  `blog_comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `blog_name`, `blog_description`, `blog_image`, `blog_date`, `total_like`, `blog_comment`) VALUES
(1, 'hsdsasxsxssxssx', 'sasdddadvdvd', 'Screenshot from 2018-06-25 17-26-56.png', '2018-10-14T16:16:07.565Z', '7', ''),
(2, 'new blosxsxsx', 'heloox cknkjcdcdcwds csdcdscdcxdwcdwc  edwedewd', 'laptop-image2.png', '2018-10-14T16:17:04.182Z', '5', 'hii'),
(3, 'rteat', 'ewfeferf', 'download.jpeg', '2018-10-14T09:17:02.666Z', '2', ''),
(4, 'xdx ', 'ddd', '', '2018-10-14T16:09:32.849Z', '1', 'hiii');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment`
--

CREATE TABLE `blog_comment` (
  `blog_id` int(123) NOT NULL,
  `comment_id` int(253) NOT NULL,
  `comments` varchar(4553) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog_comment`
--

INSERT INTO `blog_comment` (`blog_id`, `comment_id`, `comments`) VALUES
(1, 1, 'xsxswdwsd'),
(2, 2, ''),
(2, 3, ''),
(1, 4, 'buhuihi'),
(1, 5, 'buhuihi'),
(1, 6, ''),
(2, 7, ''),
(2, 8, ''),
(2, 9, ''),
(1, 10, 'swwswsws'),
(1, 11, ''),
(1, 12, 'sqsws'),
(2, 13, 'wswsws'),
(1, 14, ''),
(1, 15, ''),
(1, 16, 'sxsxsx'),
(1, 17, 'sd'),
(1, 18, 'sddwdwdw'),
(2, 19, 'xsxsxsx'),
(2, 20, 'wewefwvfws'),
(2, 21, 'hggjyjtjy'),
(4, 22, 'sww'),
(4, 23, 'sww'),
(4, 24, 'sww');

-- --------------------------------------------------------

--
-- Table structure for table `book_list`
--

CREATE TABLE `book_list` (
  `book_id` int(122) NOT NULL,
  `book_name` varchar(222) NOT NULL,
  `book_number` varchar(222) NOT NULL,
  `empolyee_name` varchar(255) NOT NULL,
  `book_auther` varchar(255) NOT NULL,
  `book_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book_list`
--

INSERT INTO `book_list` (`book_id`, `book_name`, `book_number`, `empolyee_name`, `book_auther`, `book_status`) VALUES
(5, 'Recat js', '8262882', 'Book Not Issue', 'Aman Jain\'s Company', 1),
(6, 'New testing Pipeline 4565ww', '122', 'Book Not Issue', 'wwdwd', 1),
(7, 'cscdc', '23232', 'Book Not Issue', 'defef', 1),
(10, 'sxxs', '2222', 'Book Not Issue', 'ddede', 1),
(11, 'dwdd', '', 'Book Not Issue', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employee_attendance`
--

CREATE TABLE `employee_attendance` (
  `attendance_id` int(22) NOT NULL,
  `emp_new_id` int(22) DEFAULT NULL,
  `total_time` varchar(222) NOT NULL,
  `emp_live_status` tinyint(1) NOT NULL,
  `in_time` varchar(222) NOT NULL,
  `out_time` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_attendance`
--

INSERT INTO `employee_attendance` (`attendance_id`, `emp_new_id`, `total_time`, `emp_live_status`, `in_time`, `out_time`) VALUES
(1, 1, '', 1, '2018-10-26T04:27:16.816Z', ''),
(2, 2, '', 1, '2018-10-26T04:27:22.797Z', '');

-- --------------------------------------------------------

--
-- Table structure for table `empolyee_info`
--

CREATE TABLE `empolyee_info` (
  `emp_id` int(11) NOT NULL,
  `prefix` varchar(11) NOT NULL,
  `first_name` varchar(11) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(2444) NOT NULL,
  `date_of_birth` varchar(2222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `phone` varchar(222) NOT NULL,
  `address` varchar(22222) NOT NULL,
  `imp_notes` varchar(22222) NOT NULL,
  `addar_number` varchar(222) NOT NULL,
  `pan_number` varchar(222) NOT NULL,
  `joing_date` varchar(222) NOT NULL,
  `gendar` char(1) NOT NULL,
  `profile` varchar(222) NOT NULL,
  `emp_title` varchar(232) NOT NULL,
  `emp_description` varchar(2332) NOT NULL,
  `emp_unique_id` varchar(222) NOT NULL,
  `emp_department` varchar(322) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empolyee_info`
--

INSERT INTO `empolyee_info` (`emp_id`, `prefix`, `first_name`, `middle_name`, `last_name`, `date_of_birth`, `email`, `phone`, `address`, `imp_notes`, `addar_number`, `pan_number`, `joing_date`, `gendar`, `profile`, `emp_title`, `emp_description`, `emp_unique_id`, `emp_department`) VALUES
(1, 'mr', 'Aman', '', 'jain', '', 'aman#gmail.com', '9806701954', '', '', '', '', '', '', '', '', '', '0', ''),
(2, 'scscsc', 'scc', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'scc@sx', 'ssc');

-- --------------------------------------------------------

--
-- Table structure for table `emp_table`
--

CREATE TABLE `emp_table` (
  `emp_id` int(222) NOT NULL,
  `emp_name` varchar(222) NOT NULL,
  `emp_phone` varchar(222) NOT NULL,
  `emp_email` varchar(222) NOT NULL,
  `emp_position` varchar(222) NOT NULL,
  `emp_status` tinyint(1) NOT NULL,
  `start_at` varchar(255) NOT NULL,
  `out_time` varchar(122) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_table`
--

INSERT INTO `emp_table` (`emp_id`, `emp_name`, `emp_phone`, `emp_email`, `emp_position`, `emp_status`, `start_at`, `out_time`) VALUES
(1, 'Aman jain', '9806701954', 'aman9893jain@gmail.com', 'Angu;lar developer', 0, '', '2018-10-23T17:28:52.011Z');

-- --------------------------------------------------------

--
-- Table structure for table `emp_task`
--

CREATE TABLE `emp_task` (
  `task_id` int(222) NOT NULL,
  `task_name` varchar(222) NOT NULL,
  `task_details` varchar(222) NOT NULL,
  `task_time` varchar(222) NOT NULL,
  `status` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_task`
--

INSERT INTO `emp_task` (`task_id`, `task_name`, `task_details`, `task_time`, `status`) VALUES
(1, 'new', 'hello', '12.00', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(222) NOT NULL,
  `name` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `password` varchar(222) NOT NULL,
  `created_at` varchar(222) NOT NULL,
  `updated_at` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'aman', 'aman@mail.com', '12345', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(8, 'aman', 'aman9893jian@gmail.com', '1223333', '2018-09-01 16:45:37', '2018-09-01 16:45:37'),
(9, 'aman123', 'aman9893jian@gmail.comm', '1223333', '2018-09-01 16:52:18', '2018-09-01 16:52:18'),
(10, 'swded', 'deded', 'ededed', '2018-09-01 17:01:29', '2018-09-01 17:01:29'),
(11, 'aman', 'aman@gmail.com', '123456', '2018-09-03 11:49:05', '2018-09-03 11:49:05'),
(12, 'aman', ' aman@.com', '123456', '2018-09-03 12:13:43', '2018-09-03 12:13:43'),
(13, 'aanand', 'a@gmail.com', '123', '2018-09-11 14:57:05', '2018-09-11 14:57:05'),
(14, 'baljeet', 'baljeet@gmail.com', '12345', '2018-09-13 15:04:15', '2018-09-13 15:04:15'),
(15, 'nare', 'n@gmail.com', '1234', '2018-09-15 10:48:38', '2018-09-15 10:48:38'),
(16, 'dcdfrfr', 'n@gmail.com', '1', '2018-09-15 10:49:29', '2018-09-15 10:49:29'),
(17, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBi7sRfAZCO8lizxLWfVzwIB1WT7ePHpoogIm0rPRS_ByIBBDlsc5kpDQWzwwUMT3AUK6APV02nT2GAoTCoX06HzgyvaFdQAwY983NpCwXF4nbJMzxMaMQ0_gKA', '2018-09-28 11:22:40', '2018-09-28 11:22:40'),
(18, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBi7sRfAZCO8lizxLWfVzwIB1WT7ePHpoogIm0rPRS_ByIBBDlsc5kpDQWzwwUMT3AUK6APV02nT2GAoTCoX06HzgyvaFdQAwY983NpCwXF4nbJMzxMaMQ0_gKA', '2018-09-28 11:22:49', '2018-09-28 11:22:49'),
(19, 'aman jain', 'amanjain941505@gmail.com', 'ya29.GlsmBoR3mWnJHz_KWHS9JCF5Hekic5xuod58wY6Ua9UF9ev48HVyARq0jwaz62UNMd8nEbbuWcrfv9Jxx0Qake_MNAkDs9-L7lRz1FRhKtgUmQfvBLfUx_Gvbay5', '2018-09-28 11:23:13', '2018-09-28 11:23:13'),
(20, 'aman jain', 'amanjain941505@gmail.com', 'ya29.GlsmBoR3mWnJHz_KWHS9JCF5Hekic5xuod58wY6Ua9UF9ev48HVyARq0jwaz62UNMd8nEbbuWcrfv9Jxx0Qake_MNAkDs9-L7lRz1FRhKtgUmQfvBLfUx_Gvbay5', '2018-09-28 11:23:38', '2018-09-28 11:23:38'),
(21, 'aman jain', 'amanjain941505@gmail.com', 'ya29.GlsmBoR3mWnJHz_KWHS9JCF5Hekic5xuod58wY6Ua9UF9ev48HVyARq0jwaz62UNMd8nEbbuWcrfv9Jxx0Qake_MNAkDs9-L7lRz1FRhKtgUmQfvBLfUx_Gvbay5', '2018-09-28 11:23:50', '2018-09-28 11:23:50'),
(22, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:23:55', '2018-09-28 11:23:55'),
(23, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:25:57', '2018-09-28 11:25:57'),
(24, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:26:16', '2018-09-28 11:26:16'),
(25, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:26:32', '2018-09-28 11:26:32'),
(26, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:26:35', '2018-09-28 11:26:35'),
(27, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:32:59', '2018-09-28 11:32:59'),
(28, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:33:52', '2018-09-28 11:33:52'),
(29, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:34:19', '2018-09-28 11:34:19'),
(30, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBgal2ze1nne5pkXCSSYISZkRlzaO7zubb2Pqmr2wRIdZFHfmnu-kRJQux1tc75N9DXsOLJKwmEI5jXpthpg0zttlf9StQqSF2NMFyxAublyyZ807huRDgfABZQ', '2018-09-28 11:35:12', '2018-09-28 11:35:12'),
(31, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBjFB_fj76l9lfqo0Auq4pOYTdqrad6DzkE1m4mnGddY1tQ1LTe8tZ1xoiZFu-ImkLK-KC99XZJvriPg2Y7bSEv2CI_zMRBkwxHsil9UuWwEkkwx7RQTDnjibTg', '2018-09-28 11:35:18', '2018-09-28 11:35:18'),
(32, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBq32JFv1tK_4s9bGt3zU-K41m8kVn-oK-PC6v0w8E7DwoGUruqllJB0qW-XjQ9GlGf7W0xQlI06_vocfGR3SW7JoQLOQscvI3ntZUZUi9PlEkoAw6ldCLJngUQ', '2018-09-28 11:35:28', '2018-09-28 11:35:28'),
(33, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBq32JFv1tK_4s9bGt3zU-K41m8kVn-oK-PC6v0w8E7DwoGUruqllJB0qW-XjQ9GlGf7W0xQlI06_vocfGR3SW7JoQLOQscvI3ntZUZUi9PlEkoAw6ldCLJngUQ', '2018-09-28 11:35:38', '2018-09-28 11:35:38'),
(34, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBq32JFv1tK_4s9bGt3zU-K41m8kVn-oK-PC6v0w8E7DwoGUruqllJB0qW-XjQ9GlGf7W0xQlI06_vocfGR3SW7JoQLOQscvI3ntZUZUi9PlEkoAw6ldCLJngUQ', '2018-09-28 11:36:00', '2018-09-28 11:36:00'),
(35, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBq32JFv1tK_4s9bGt3zU-K41m8kVn-oK-PC6v0w8E7DwoGUruqllJB0qW-XjQ9GlGf7W0xQlI06_vocfGR3SW7JoQLOQscvI3ntZUZUi9PlEkoAw6ldCLJngUQ', '2018-09-28 11:36:11', '2018-09-28 11:36:11'),
(36, 'aman jain', 'aman9893jain@gmail.com', 'ya29.GlwmBq32JFv1tK_4s9bGt3zU-K41m8kVn-oK-PC6v0w8E7DwoGUruqllJB0qW-XjQ9GlGf7W0xQlI06_vocfGR3SW7JoQLOQscvI3ntZUZUi9PlEkoAw6ldCLJngUQ', '2018-09-28 11:36:19', '2018-09-28 11:36:19'),
(37, 'aman jain', 'aman9893jain@gmail.com', 'ya29.Gl02BtSFGiVE7RhUpIVmMmY9VVaDCafztpD9RwXN3viy-aL5JYiuzAAg8hgIC7_0eYsRUFV7jKV1_ZiJIirLHoQJl5ok0PeoOzfXp4iUXkn-IP6pAUI9zSxBVLUd2Ek', '2018-10-14 14:28:46', '2018-10-14 14:28:46'),
(38, 'aaaa', 'aman', '12345', '2018-10-18 22:02:19', '2018-10-18 22:02:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `blog_id` (`blog_id`);

--
-- Indexes for table `book_list`
--
ALTER TABLE `book_list`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `employee_attendance`
--
ALTER TABLE `employee_attendance`
  ADD PRIMARY KEY (`attendance_id`);

--
-- Indexes for table `empolyee_info`
--
ALTER TABLE `empolyee_info`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `emp_table`
--
ALTER TABLE `emp_table`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `comment_id` int(253) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `book_list`
--
ALTER TABLE `book_list`
  MODIFY `book_id` int(122) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `employee_attendance`
--
ALTER TABLE `employee_attendance`
  MODIFY `attendance_id` int(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `empolyee_info`
--
ALTER TABLE `empolyee_info`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `emp_table`
--
ALTER TABLE `emp_table`
  MODIFY `emp_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD CONSTRAINT `blog_comment_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
