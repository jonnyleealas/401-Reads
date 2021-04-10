# User Space
Applications

# Kernel Space: Talks to our hardware
Creates processes, efficiently schedules them, and manages how processes are terminated.
Process manager: We manage the order that program run in.
Memory Manager: Optimizes how memory is used.
File manager: The kernel stores data like files or folders.
i/o manager: How kernel talks to outside devices like mouses or pads.

# Interaction
We talk to the user space meaning applications
and the user space talks to the kernel.

# Windows, Mac, Linux
Linux has different versions of it : Ubuntu, debian, red hat; // these are called distributions

# File System
Data: 
metadata: contains information about our file. Gives us the type of file it is ex: jpg
file system: NTFS(windows), HFS+(Mac), EXT4(linux)

# Process management
A program that is executing.
Kernel manages our resources ex: ram, cpu.
A process is created every time a program needs to run.
Processes are executed 1 by 1 in something called a time slice.

# Memory management
Processes have to take up space in memory, so the computer can read and load them quickly.
Virtual memory - We use this when we need more memory. The combination of hard drive space and ram that acts like memory that our processes can use.
When we execute a program we take the data in the program in chunks called pages and store them in virtual memory(ram and harddrive space)
Swap space is allocated space when using virtual memory.

# I/O management
Kernel loads drives that communicate to the output devices.
When you're troubleshooting or solving a problem with a slow machine, its usually some sort of hardware resource deficiency.
If we don't have enough ram we can't load as many process. If we don't have enough cpu we can't execute programs fast enough. 
Too much input or output we can block other data from being sent or received. 
Knowing potential sources of slowness can help us solve the cause of the latency.

# User space
How humans interact with the computer. 
Shell or graphical user interface is how we interact with the user space.
SHell = cli; Graphical user interface = gui

# Logs
Files that record system events on our computer, just like a systems diary.

# Boot process
How the os starts up.
Poser on 
BIOS/UEFI-->post
Boot device--> bootloader ---> os ---> kernel {system process , user space}

# INstalling os
something that I will do many times as an IT

# Virtual Machines
A copy of a real machine. 
