# ORM Technology
Object relational mapping.
This mapps objects with relational databases.

# Notes on all things mysql and java
I think jps lets you switch from hibernate to another helper more easily.
JPA is helpful for saving data to a database.
Jpa has a find() method. we need to give it a class name and item you are looking for.
To use a jpa class we need to use EntityManger from JPA.
EM = entity manager
JPA is a specification used with hibernate.
So we need hibernate and then we can give it the specification of JPA.
Msql JDBC connecter is used to connect Mysql with hibernate.
We also may need EntityMangerFactory = emf
All the entitymangerfactory stuff comes from javax.persistance.EntityManger.
# JPA
Works with entity 
When we add @entity to the top outside of a class we can then use JPA with that class because jpa works with entity.
Then we add @id inside of the class because every table needs a primary key.

# To save
Before saving we 
em.getTransaction().begin()
em.persist();
em.getTransaction().commit()



# Meta-Inf
We create an xml file
    persistence.xml
    ```
        <persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd"
             version="2.1">

    <persistence-unit name="defaultPersistenceUnit" transaction-type="RESOURCE_LOCAL">
        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
        <non-jta-data-source>DefaultDS</non-jta-data-source>
        <class>models.Guitar</class>
        <properties>
            <property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect"/>
        </properties>
    </persistence-unit>

</persistence>
```


# Hibernate
Connects objects with relational data.
So connects java with mysql.
JDBC = java database connectivity
