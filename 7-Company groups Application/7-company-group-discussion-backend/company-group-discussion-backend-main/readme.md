# Create Database


# Create Database named - 'empchatappdb2' in mySql Workbench

# please dont change routing path; 


# refer- src folder in ReactApp , for login Functionality



# sql queries to add data for test


# insert Groups 
-- Group 1 (Angular)
INSERT INTO Mygroups (name, type) VALUES ('Angular', 'Technical');

-- Group 2 (React)
INSERT INTO Mygroups (name, type) VALUES ('React', 'Technical');

-- Group 3 (Support Team)
INSERT INTO Mygroups (name, type) VALUES ('Support Team', 'Functional');

-- Group 4 (Data Science)
INSERT INTO Mygroups (name, type) VALUES ('Data Science', 'Technical');

-- Group 5 (Sales Team)
INSERT INTO Mygroups (name, type) VALUES ('Sales Team', 'Functional');

-- Group 6 (Marketing)
INSERT INTO Mygroups (name, type) VALUES ('Marketing', 'Functional');



#insert Employees 
INSERT INTO employees (username, password, role) VALUES
    ('Admin1', 'adminpass1', 'admin'),
    ('Admin2', 'adminpass2', 'admin'),
    ('Admin3', 'adminpass3', 'admin'),
    ('Admin4', 'adminpass4', 'admin'),
    ('Admin5', 'adminpass5', 'admin'),
    ('Admin6', 'adminpass6', 'admin'),
    ('User1', 'userpass1', 'user'),
    ('User2', 'userpass2', 'user'),
    ('User3', 'userpass3', 'user'),
    ('User4', 'userpass4', 'user'),
    ('User5', 'userpass5', 'user'),
    ('User6', 'userpass6', 'user'),
    ('User7', 'userpass7', 'user'),
    ('User8', 'userpass8', 'user'),
    ('User9', 'userpass9', 'user'),
    ('User10', 'userpass10', 'user'),
    ('User11', 'userpass11', 'user'),
    ('User12', 'userpass12', 'user'),
    ('User13', 'userpass13', 'user'),
    ('User14', 'userpass14', 'user'),
    ('User15', 'userpass15', 'user'),
    ('User16', 'userpass16', 'user'),
    ('User17', 'userpass17', 'user'),
    ('User18', 'userpass18', 'user'),
    ('User19', 'userpass19', 'user'),
    ('User20', 'userpass20', 'user'),
    ('User21', 'userpass21', 'user'),
    ('User22', 'userpass22', 'user'),
    ('User23', 'userpass23', 'user'),
    ('User24', 'userpass24', 'user'),
    ('User25', 'userpass25', 'user'),
    ('User26', 'userpass26', 'user'),
    ('User27', 'userpass27', 'user'),
    ('User28', 'userpass28', 'user'),
    ('User29', 'userpass29', 'user'),
    ('User30', 'userpass30', 'user'),
    ('User31', 'userpass31', 'user'),
    ('User32', 'userpass32', 'user'),
    ('User33', 'userpass33', 'user'),
    ('User34', 'userpass34', 'user'),
    ('User35', 'userpass35', 'user'),
    ('User36', 'userpass36', 'user'),
    ('User37', 'userpass37', 'user'),
    ('User38', 'userpass38', 'user'),
    ('User39', 'userpass39', 'user'),
    ('User40', 'userpass40', 'user'),
    ('User41', 'userpass41', 'user'),
    ('User42', 'userpass42', 'user'),
    ('User43', 'userpass43', 'user'),
    ('User44', 'userpass44', 'user'),
    ('User45', 'userpass45', 'user'),
    ('User46', 'userpass46', 'user'),
    ('User47', 'userpass47', 'user'),
    ('User48', 'userpass48', 'user'),
    ('User49', 'userpass49', 'user'),
    ('User50', 'userpass50', 'user'),
    ('User51', 'userpass51', 'user'),
    ('User52', 'userpass52', 'user'),
    ('User53', 'userpass53', 'user'),
    ('User54', 'userpass54', 'user'),
    ('User55', 'userpass55', 'user'),
    ('User56', 'userpass56', 'user'),
    ('User57', 'userpass57', 'user'),
    ('User58', 'userpass58', 'user'),
    ('User59', 'userpass59', 'user'),
    ('User60', 'userpass60', 'user');
    
    
    
# insert relationship in group and employee

-- Group 1 (Angular)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (1, 1), (1, 7), (1, 8), (1, 9), (1, 10), (1, 11), (1, 12), (1, 13), (1, 14), (1, 15), (1, 16);

-- Group 2 (React)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (2, 2), (2, 17), (2, 18), (2, 19), (2, 20), (2, 21), (2, 22), (2, 23), (2, 24), (2, 25), (2, 26);

-- Group 3 (Support Team)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (3, 3), (3, 27), (3, 28), (3, 29), (3, 30), (3, 31), (3, 32), (3, 33), (3, 34), (3, 35), (3, 36);

-- Group 4 (Data Science)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (4, 4), (4, 37), (4, 38), (4, 39), (4, 40), (4, 41), (4, 42), (4, 43), (4, 44), (4, 45), (4, 46);

-- Group 5 (Sales Team)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (5, 5), (5, 47), (5, 48), (5, 49), (5, 50), (5, 51), (5, 52), (5, 53), (5, 54), (5, 55), (5, 56);

-- Group 6 (Marketing)
INSERT INTO group_employee (my_group_group_id, employees_employee_id) VALUES
    (6, 6), (6, 57), (6, 58), (6, 59), (6, 60), (6, 61), (6, 62), (6, 63), (6, 64), (6, 65), (6, 66);



# insert messages

-- Messages for Group 1 (Angular) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES 
    (1, 1, 'Hello from User1 in Angular Group', '2023-01-01 10:00:00'),
    (7, 1, 'Hello from User7 in Angular Group', '2023-01-02 11:00:00'),
    (8, 1, 'Hello from User8 in Angular Group', '2023-01-03 12:00:00'),
    (9, 1, 'Hello from User9 in Angular Group', '2023-01-04 13:00:00'),
    (10, 1, 'Hello from User10 in Angular Group', '2023-01-05 14:00:00'),
    (11, 1, 'Hello from User11 in Angular Group', '2023-01-06 15:00:00'),
    (12, 1, 'Hello from User12 in Angular Group', '2023-01-07 16:00:00'),
    (13, 1, 'Hello from User13 in Angular Group', '2023-01-08 17:00:00'),
    (14, 1, 'Hello from User14 in Angular Group', '2023-01-09 18:00:00'),
    (15, 1, 'Hello from User15 in Angular Group', '2023-01-10 19:00:00'),
    (16, 1, 'Hello from User16 in Angular Group', '2023-01-11 20:00:00');

-- Messages for Group 2 (React) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES 
    (2, 2, 'Hello from User2 in React Group', '2023-01-01 11:00:00'),
    (17, 2, 'Hello from User17 in React Group', '2023-01-02 12:00:00'),
    (18, 2, 'Hello from User18 in React Group', '2023-01-03 13:00:00'),
    (19, 2, 'Hello from User19 in React Group', '2023-01-04 14:00:00'),
    (20, 2, 'Hello from User20 in React Group', '2023-01-05 15:00:00'),
    (21, 2, 'Hello from User21 in React Group', '2023-01-06 16:00:00'),
    (22, 2, 'Hello from User22 in React Group', '2023-01-07 17:00:00'),
    (23, 2, 'Hello from User23 in React Group', '2023-01-08 18:00:00'),
    (24, 2, 'Hello from User24 in React Group', '2023-01-09 19:00:00'),
    (25, 2, 'Hello from User25 in React Group', '2023-01-10 20:00:00'),
    (26, 2, 'Hello from User26 in React Group', '2023-01-11 21:00:00');

-- Messages for Group 3 (Support Team) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES 
    (3, 3, 'Hello from User3 in Support Team Group', '2023-01-01 12:00:00'),
    (27, 3, 'Hello from User27 in Support Team Group', '2023-01-02 13:00:00'),
    (28, 3, 'Hello from User28 in Support Team Group', '2023-01-03 14:00:00'),
    (29, 3, 'Hello from User29 in Support Team Group', '2023-01-04 15:00:00'),
    (30, 3, 'Hello from User30 in Support Team Group', '2023-01-05 16:00:00'),
    (31, 3, 'Hello from User31 in Support Team Group', '2023-01-06 17:00:00'),
    (32, 3, 'Hello from User32 in Support Team Group', '2023-01-07 18:00:00'),
    (33, 3, 'Hello from User33 in Support Team Group', '2023-01-08 19:00:00'),
    (34, 3, 'Hello from User34 in Support Team Group', '2023-01-09 20:00:00'),
    (35, 3, 'Hello from User35 in Support Team Group', '2023-01-10 21:00:00'),
    (36, 3, 'Hello from User36 in Support Team Group', '2023-01-11 22:00:00');

-- Messages for Group 4 (Data Science) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES  
    (4, 4, 'Hello from User4 in Data Science Group', '2023-01-01 13:00:00'),
    (37, 4, 'Hello from User37 in Data Science Group', '2023-01-02 14:00:00'),
    (38, 4, 'Hello from User38 in Data Science Group', '2023-01-03 15:00:00'),
    (39, 4, 'Hello from User39 in Data Science Group', '2023-01-04 16:00:00'),
    (40, 4, 'Hello from User40 in Data Science Group', '2023-01-05 17:00:00'),
    (41, 4, 'Hello from User41 in Data Science Group', '2023-01-06 18:00:00'),
    (42, 4, 'Hello from User42 in Data Science Group', '2023-01-07 19:00:00'),
    (43, 4, 'Hello from User43 in Data Science Group', '2023-01-08 20:00:00'),
    (44, 4, 'Hello from User44 in Data Science Group', '2023-01-09 21:00:00'),
    (45, 4, 'Hello from User45 in Data Science Group', '2023-01-10 22:00:00'),
    (46, 4, 'Hello from User46 in Data Science Group', '2023-01-11 23:00:00');

-- Messages for Group 5 (Sales Team) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES  
    (5, 5, 'Hello from User5 in Sales Team Group', '2023-01-01 14:00:00'),
    (47, 5, 'Hello from User47 in Sales Team Group', '2023-01-02 15:00:00'),
    (48, 5, 'Hello from User48 in Sales Team Group', '2023-01-03 16:00:00'),
    (49, 5, 'Hello from User49 in Sales Team Group', '2023-01-04 17:00:00'),
    (50, 5, 'Hello from User50 in Sales Team Group', '2023-01-05 18:00:00'),
    (51, 5, 'Hello from User51 in Sales Team Group', '2023-01-06 19:00:00'),
    (52, 5, 'Hello from User52 in Sales Team Group', '2023-01-07 20:00:00'),
    (53, 5, 'Hello from User53 in Sales Team Group', '2023-01-08 21:00:00'),
    (54, 5, 'Hello from User54 in Sales Team Group', '2023-01-09 22:00:00'),
    (55, 5, 'Hello from User55 in Sales Team Group', '2023-01-10 23:00:00'),
    (56, 5, 'Hello from User56 in Sales Team Group', '2023-01-11 00:00:00');

-- Messages for Group 6 (Marketing) and its Employees
INSERT INTO Messages (employee_id, group_id, text, local_date_time) 
VALUES 
    (6, 6, 'Hello from User6 in Marketing Group', '2023-01-01 15:00:00'),
    (57, 6, 'Hello from User57 in Marketing Group', '2023-01-02 16:00:00'),
    (58, 6, 'Hello from User58 in Marketing Group', '2023-01-03 17:00:00'),
    (59, 6, 'Hello from User59 in Marketing Group', '2023-01-04 18:00:00'),
    (60, 6, 'Hello from User60 in Marketing Group', '2023-01-05 19:00:00'),
    (61, 6, 'Hello from User61 in Marketing Group', '2023-01-06 20:00:00'),
    (62, 6, 'Hello from User62 in Marketing Group', '2023-01-07 21:00:00'),
    (63, 6, 'Hello from User63 in Marketing Group', '2023-01-08 22:00:00'),
    (64, 6, 'Hello from User64 in Marketing Group', '2023-01-09 23:00:00'),
    (65, 6, 'Hello from User65 in Marketing Group', '2023-01-10 00:00:00'),
    (66, 6, 'Hello from User66 in Marketing Group', '2023-01-11 01:00:00');





