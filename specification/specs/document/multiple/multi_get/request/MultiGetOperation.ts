class MultiGetOperation {
  can_be_flattened: boolean;
  _id: Id;
  _index: IndexName;
  routing: string;
  _source: Union<boolean, SourceFilter>;
  stored_fields: Field[];
  version: long;
  version_type: VersionType;
}
