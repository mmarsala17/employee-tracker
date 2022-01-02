INSERT INTO department (name)
values
    ('Executive'),
    ('Finance'),
    ('Marketing'),
    ('Human Resources'),
    ('Information Technology'),
    ('International Business'),
    ('Sales'),

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Director of Sales', '200000', 2),
    ('Sales Manager', '125000', 2),
    ('Salesperson', '100000', 2),
    ('CEO', '275000', 1),
    ('Director of IT', '200000' 5),
    ('IT Manager', '150000', 5),
    ('Software Engineer', '100000', 5),
    ('IT Intern', '50000', 5),
    ('Director of Marketing', '150000', 3),
    ('Marketing Coordinator', '100000', 3),
    ('Marketing Intern', '50000', 3),
    ('International Buisness Development Director', '150000', 6),
    ('International Marketing Director', '75000', 6),
    ('Director of Finance', '100000', 2),
    ('Finance Manager', '100000', 2),
    ('VP of Finance', '100000', 2),
    ('Financial Advisor', '50000', 2),
    ('Financial Analyst', '50000', 2),
    ('Budget Analyst', '50000', 2),
    ('Director of HR', '150000', 4),
    ('HR Coordinator', '100000', 4);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('John', 'Jacob', 1, NULL),
    ('Jacob', 'Trombly', 2, 1),
    ('Jaden', 'Pope', 3, 2),
    ('Joe', 'Martinez', 4, 3),
    ('Tyrone', 'Davis', 4, 3),
    ('Josiah', 'Byrd', 5, 1),
    ('Mary', 'Robertson', 6,5),
    ('Amy', 'Winehouse', 7, 6),
    ('Kim', 'West', 7, 6),
    ('Florence', 'England', 8, 6),
    ('Issac', 'Long', 9, 1),
    ('Wiliam', 'Pear', 10, 9),
    ('Jay', 'Garcia', 10, 9),
    ('Bernie', 'Maddox', 11, 9),
    ('Louise', 'Ball', 12, 1),
    ('Leon', 'Lionheart', 13, 12),
    ('Gareth', 'Ball', 14, 1),
    ('Ashley', 'Matsui', 15, 14),
    ('Jaden', 'Singleton', 16, 14),
    ('Vito', 'Valentino', 17, 15),
    ('Zayn', 'Smith', 17, 15),
    ('Scott', 'Clark', 18, 16),
    ('Robin', 'Robinson', 19, 16),
    ('Jamaal', 'Baldwin', 19, 16),
    ('Yao', 'Chung', 20, 1),
    ('Augustus', 'Murphy', 21, 20);
