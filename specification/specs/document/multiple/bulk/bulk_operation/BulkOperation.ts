class BulkOperation {
  _id: Id;
  _index: IndexName;
  retry_on_conflict: integer;
  routing: Routing;
  version: long;
  version_type: VersionType;
}

class BulkOperationContainer {
  index: BulkIndexOperation
  create: BulkCreateOperation
  update: BulkUpdateOperation
  delete: BulkDeleteOperation
}

class BulkIndexOperation extends BulkOperation {

}

class BulkCreateOperation extends BulkOperation {

}

class BulkUpdateOperation extends BulkOperation {

}

class BulkDeleteOperation extends BulkOperation {

}
