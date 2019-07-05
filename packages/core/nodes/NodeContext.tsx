import React from "react";
import { NodeId, Node } from "../interfaces";

export const NodeContext = React.createContext<any>(null);

export type NodeProvider = {
  id: NodeId;
}

export const NodeProvider: React.FC<NodeProvider> = ({ id, children }) => {
  return (
    <NodeContext.Provider value={{ id }}>
      {children}
    </NodeContext.Provider>
  )
}