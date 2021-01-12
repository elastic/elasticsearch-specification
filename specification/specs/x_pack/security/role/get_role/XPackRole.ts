class XPackRole {
  cluster: string[];
  indices: IndicesPrivileges[];
  metadata: Dictionary<string, UserDefinedValue>;
  run_as: string[];
}
