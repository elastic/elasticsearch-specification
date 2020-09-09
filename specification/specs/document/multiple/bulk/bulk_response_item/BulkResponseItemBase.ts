@class_serializer("BulkResponseItemFormatter")
class BulkResponseItemBase {
  error: MainError;
  _id: string;
  _index: string;
  _primary_term: long;
  result: string;
  _seq_no: long;
  _shards: ShardStatistics;
  status: integer;
  _type: string;
  _version: long;
  forced_refresh: boolean;
  get: GetResponse<LazyDocument>;
}

class BulkResponseItemContainer {
  index: BulkIndexResponseItem
  create: BulkCreateResponseItem
  update: BulkUpdateResponseItem
  delete: BulkDeleteResponseItem
}

class BulkIndexResponseItem extends BulkResponseItemBase {

}

class BulkCreateResponseItem extends BulkResponseItemBase {

}

class BulkUpdateResponseItem extends BulkResponseItemBase {

}

class BulkDeleteResponseItem extends BulkResponseItemBase {

}
