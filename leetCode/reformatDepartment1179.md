# Reformat Department 1179

```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| revenue       | int     |
| month         | varchar |
+---------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
```
# What is a primary key
- A unique id number to help us find information

# Simplified
- The table needs to be reformated 
- Revenue table must have an id column
- Each month should have a revenue column --> Jan_Revenue


# Code
- SUM will summarize all rows
- Select id selects id
- FROM selects the table name
- We then group by id
- if month = jan, add revenue else null; Column names Jan_Revenue
- Using AS allows us to name our columns
```
# Write your MySQL query statement below
SELECT id,
SUM(IF(month = "Jan", revenue, NULL)) AS Jan_Revenue,
SUM(IF(month = "Feb", revenue, NULL)) AS Feb_Revenue,
SUM(IF(month = "Mar", revenue, NULL)) AS Mar_Revenue,
SUM(IF(month = "Apr", revenue, NULL)) AS Apr_Revenue,
SUM(IF(month = "May", revenue, NULL)) AS May_Revenue,
SUM(IF(month = "Jun", revenue, NULL)) AS Jun_Revenue,
SUM(IF(month = "Jul", revenue, NULL)) AS Jul_Revenue,
SUM(IF(month = "Aug", revenue, NULL)) AS Aug_Revenue,
SUM(IF(month = "Sep", revenue, NULL)) AS Sep_Revenue,
SUM(IF(month = "Oct", revenue, NULL)) AS Oct_Revenue,
SUM(IF(month = "Nov", revenue, NULL)) AS Nov_Revenue,
SUM(IF(month = "Dec", revenue, NULL)) AS Dec_Revenue
FROM Department
GROUP BY id
```