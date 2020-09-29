
package org.elasticsearch.document.multiple.bulk.bulk_operation;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.bulk.bulk_operation.*;

public class BulkOperationContainer  implements XContentable<BulkOperationContainer> {
  
  static final ParseField INDEX = new ParseField("index");
  private BulkIndexOperation _index;
  public BulkIndexOperation getIndex() { return this._index; }
  public BulkOperationContainer setIndex(BulkIndexOperation val) { this._index = val; return this; }

  static final ParseField CREATE = new ParseField("create");
  private BulkCreateOperation _create;
  public BulkCreateOperation getCreate() { return this._create; }
  public BulkOperationContainer setCreate(BulkCreateOperation val) { this._create = val; return this; }

  static final ParseField UPDATE = new ParseField("update");
  private BulkUpdateOperation _update;
  public BulkUpdateOperation getUpdate() { return this._update; }
  public BulkOperationContainer setUpdate(BulkUpdateOperation val) { this._update = val; return this; }

  static final ParseField DELETE = new ParseField("delete");
  private BulkDeleteOperation _delete;
  public BulkDeleteOperation getDelete() { return this._delete; }
  public BulkOperationContainer setDelete(BulkDeleteOperation val) { this._delete = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_index != null) {
      builder.field(INDEX.getPreferredName());
      _index.toXContent(builder, params);
    }
    if (_create != null) {
      builder.field(CREATE.getPreferredName());
      _create.toXContent(builder, params);
    }
    if (_update != null) {
      builder.field(UPDATE.getPreferredName());
      _update.toXContent(builder, params);
    }
    if (_delete != null) {
      builder.field(DELETE.getPreferredName());
      _delete.toXContent(builder, params);
    }
  }

  @Override
  public BulkOperationContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkOperationContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkOperationContainer, Void> PARSER =
    new ObjectParser<>(BulkOperationContainer.class.getName(), false, BulkOperationContainer::new);

  static {
    PARSER.declareObject(BulkOperationContainer::setIndex, (p, t) -> BulkIndexOperation.PARSER.apply(p, t), INDEX);
    PARSER.declareObject(BulkOperationContainer::setCreate, (p, t) -> BulkCreateOperation.PARSER.apply(p, t), CREATE);
    PARSER.declareObject(BulkOperationContainer::setUpdate, (p, t) -> BulkUpdateOperation.PARSER.apply(p, t), UPDATE);
    PARSER.declareObject(BulkOperationContainer::setDelete, (p, t) -> BulkDeleteOperation.PARSER.apply(p, t), DELETE);
  }

}
