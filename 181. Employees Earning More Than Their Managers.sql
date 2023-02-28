Select t1.name as Employee
From Employee t1, Employee t2
Where t1.managerId = t2.id and t1.salary > t2.salary
