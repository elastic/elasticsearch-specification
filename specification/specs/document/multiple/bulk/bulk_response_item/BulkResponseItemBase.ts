// TODO remap this as a good bulk response item and an error response item
@class_serializer("BulkResponseItemFormatter")
class BulkResponseItemBase {
  _id?: string | null;
  _index: string;
  status: integer;

  error?: ErrorCause;
  _primary_term?: long;
  result?: string;
  _seq_no?: long;
  _shards?: ShardStatistics;
  _type?: string;
  _version?: long;
  forced_refresh?: boolean;
  get?: InlineGet<LazyDocument>;
}

class BulkResponseItemContainer {
  index?: BulkIndexResponseItem
  create?: BulkCreateResponseItem
  update?: BulkUpdateResponseItem
  delete?: BulkDeleteResponseItem
}

class BulkIndexResponseItem extends BulkResponseItemBase {

}

class BulkCreateResponseItem extends BulkResponseItemBase {

}

class BulkUpdateResponseItem extends BulkResponseItemBase {

}

class BulkDeleteResponseItem extends BulkResponseItemBase {

}
