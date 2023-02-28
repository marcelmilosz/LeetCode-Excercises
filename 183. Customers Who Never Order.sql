Select t1.name as Customers
From Customers t1
LEFT JOIN Orders t2 
ON t1.id = t2.customerId
WHERE t2.customerId is NULL