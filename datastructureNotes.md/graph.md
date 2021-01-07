# Graph data structures
- collections of things in relationship between them
- data held in nodes/vertices
- connections between nodes are edges

# types
- directed 
- undirected 

# undirected
- edges don't have directed
- social network
- nodes are people and edges are the connections

# directed
- internet and page links
- nodes are pages
- directed edges are links to other pages

# adjacency list
- associates vertex with neighboring edges

# adjacency matrix
- matrix of number where numbers represent edges
- 0 means theres no edge or relationship
- 1 means there is a relationship

 # traversal
 - depth first goes deep first
    - uses a stack or recursion
 - breadth first means inside out
    - uses queues
    - find levels away
    - goes level by level

    # time
    O(v+e)
    space:
    O(v)
    linear - meaning it grows as node and edges grow

# Following
- following a user creates a new directed edge
- edges in face book are undirected. When you are fiends with each other the edges face both ways.

# depth first
- start node go to its first child till there are no children.

# breadth
- add children to queue. once they have been visited move on to grand children. follow this path in layers.

# weighted
- either carries data or does not carry data(unweighted)


# matrix vs adjacency 
- matrix takes up more space but easier to visualize
- less effiecient to itterate over
- use a map instead of an object. maps are hash.
