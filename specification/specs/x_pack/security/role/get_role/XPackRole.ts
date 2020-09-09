class XPackRole {
  cluster: string[];
  indices: IndicesPrivileges[];
  metadata: Dictionary<string, any>;
  run_as: string[];
}
