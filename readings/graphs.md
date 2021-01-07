# Jonathon Lee
# Graphs

## Definitions 
- Graphs are a non-linear data structure(not an array) made of a collection of verices(nodes).
- Connected by edges(like tree edges)
- Vertex(node):
    ```
    Can have zero or more adjacent vertices
    ```
- Edge: Connections between two nodes or vertices.
- Neighbor: Adjacent vertices.
- Degree: Number of nodes/vertices.

## Undirected
- Bi-directional edge. 
- An edge that doesn't point to specific vertices.

## Directed/ Digraph
- Every edge is directed
- Each node is directed at another node.
- Nodes will have a specific referenced to next.
- Edges are looked as arrows pointing to a specific node.

## Complete , Connected, Disconnected 
- Complete: All nodes are connected to all other nodes.
- Connected: Each node has at least one edge.
- Disconnected: Some veritces are disconnected.

## Acyclic , Cyclic
- Acyclic: Is directed without cycles. They don't have cycles, meaning nodes cannot be traversed through.
- Cyclic: Has cycles, starts and ends at the same vertex.

## Adjacency Matrix
Represented by a 2 dimensional array. Each row and column represents vertices. 0 Means they don't have connecting edges. 1 means they have connected vertices.
![Adjacency Matrix](./img/AdjMatrix.png)

## Adjacency List
Most common way to represent graphs. It is a collection of linked list or array that list all vertices that are connected.

![Adjacency List](./img/AdjList.png)


