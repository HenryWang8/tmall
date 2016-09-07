SET NAMES UTF8;/*告诉数据库当前要执行的SQL语句本身所使用的字符编码*/
DROP DATABASE IF EXISTS tianmao;
CREATE DATABASE tianmao DEFAULT  CHARSET=UTF8;  /*MySQL中不能写UTF-8*/
USE tianmao;
##创建一个用户表
CREATE TABLE emp(
	eno INT AUTO_INCREMENT,
	name VARCHAR(32),
	epwd INT,
	phone VARCHAR(11),
	PRIMARY KEY(eno)
);
##向员工表中插入记录行  注意SQL中的DATE的赋值
INSERT INTO emp(name,epwd,phone) VALUES('admin',123456,15392586355);
INSERT INTO emp(name,epwd,phone) VALUES('唐沐',123456,15392586355);
##查询所有的员工数据
SELECT eno,name,epwd,phone FROM emp;

