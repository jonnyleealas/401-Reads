# Directory Services
Directory server: contains a lookup service that provides mapping between network resources and their network addresses.
Telephone numbers, or contacts, user accounts, 
Allows data to be searchable in the form of objects.

Replications: directory can be copied. 
IT would be responsible for installation, configuration, and maintenance of the directory services infrastructure.


# Implementation of directory services
Directory services provide centralized authentication, authorization, and accounting , also known as AAA.

# IT sysadmin
We administer systems.

# Centralized management
Centralized instructions for all IT services.

# LDAP
Lightweight directory access protocol.
Used to access information in directory services like over a network.
Add, remove, and modify entries in  the directory.
Kerboros - A network auth protocol thats used to authenticate user identity.

# GPO(Group policy object)
Manages configuration across windows machines.

# ADAC(active directory administrative center)
Tool we will use for every day task. Good for learning how things work behind the scenes. Everything is an object inside of adac.
OU: organizational unit. Organizes objects. OUs can contain other OUs. Adac tells us what type of objects they are. 
One level of hierarchy above a domain is called a forrest. A forrest contains more than one domain.
Domain Controller: Hose copies of ad(active directories). Decide when users and computers can login to the domain. These have copies of AD.
IT will have to manage AD.


# Joining an active directory domain.
We will have to join many computers to the domain. The computer will know about the domain and the domain will know about the computer.

# Group Policy Object
Set of policies and preferences that can be applied to a group of objects in the directory. GPO contains setting for computers or user accounts. We can set preferences for different groups within the company. We can install software or block software from any group. We can also set the amount of times a password can be attempted. We can use security filtering as well. Computer config and user config. 

# Windows Registry
A hierarchical database of settings that windows, and many windows applications, use for storing configuration data. GPO is applied by making changes to the registry.


# Group Policy Management Console(GPMC)
Editing AD. Helps trouble shoot as well. 

# Data Recovery
Nature of the recovery. If its damaged hardware we may be able to extract data from hardware that wasn't damaged. We can also use a back up if a back up was made. Resume normal operations while minimizing the disruption to business functions. We need to back up data. We need a well thought out disaster plan.

Post-mortem: A way for you to document any problem you discovered along the way, and most importantly, the ways you fixed them so you can make sure they don't happen again.

We must always be prepared for data loss.

# Backup Data
Only back up data that is absolute necessary.
Email databases, sales databases, financial spreadsheets, server configurations, databases.
Account for future growth and increases in data when thinking about back up.
Local storage advantages: Its close and easy to recover. however in case of damage you could lose everything.
Off site: Safer than onsite. Need to think about encryption and bandwidth. Must prevent un-authorized access.
How long should you hold on to backups. 

Tools: 
    -RSYNC: file transfer utility that's designed to efficiently transfer and synchronize files between locations or computers. Supports compression and ssh. Mac has a tool called time-machine. 

# Restoration Procedures
These need to be documented so others can recover as well. Testing should of procedures is a must. Once a year or more. 

# When To backup
Differential backup: Only back up files that have changed or been created since the last back up. This way we don't store unchanging data; only the files that are changed are backed up. Infrequent full backups and frequent deferential backups. 
Regular incremental: Only data the data that is changed in files is backed up. More efficient in space and time required.


# Redundant array of independent disks(RAID)
Method of taking multiple physical discs and combining them into one large virtual disk. Inexpensive. Its a data storage solution. This is not a replacement for backups.

# Client Devices
Cloud service designed for syncing: drop box, apple icloud, google drive. Getting users set up for a back up cloud system is a great way to avoid losing client data.


