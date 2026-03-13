```json
{
  "name": "database.sql",
  "content": "
-- إنشاء قاعدة البيانات
CREATE DATABASE IF NOT EXISTS website_db;

-- استخدام قاعدة البيانات
USE website_db;

-- إنشاء جدول المستخدمين
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- إنشاء جدول المقالات
CREATE TABLE IF NOT EXISTS articles (
  id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);

-- إنشاء جدول التعليقات
CREATE TABLE IF NOT EXISTS comments (
  id INT AUTO_INCREMENT,
  content TEXT NOT NULL,
  article_id INT,
  user_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (article_id) REFERENCES articles(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
",
  "type": "SQL",
  "summary": "قاعدة البيانات للموقع الإلكتروني، تحتوي على ثلاثة جداول: المستخدمين، المقالات، والتعليقات."
}
```