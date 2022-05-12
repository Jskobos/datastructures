export interface Graph {
  n: number;
  nodes: string[];
  edges: Record<string, string[]>;
}

export const bfs = (graph: Graph, start: string) => {
  const queue = [start];
  const visited = new Set([start]);
  const { edges } = graph;
  while (queue.length) {
    const node = queue.shift()!;
    const neighbors = edges[node];
    if (neighbors) {
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      });
    }
  }
};
