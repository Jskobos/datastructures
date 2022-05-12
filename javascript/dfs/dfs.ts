import type { Graph } from "../bfs/bfs";

export const dfs = (graph: Graph, start: string) => {
  if (!start) {
    return;
  }
  const { edges } = graph;
  const visited = new Set([start]);
  const neighbors = edges[start];
  for (let n in neighbors) {
    if (!visited.has(n)) {
      visited.add(n);
      dfs(graph, n);
    }
  }
};
