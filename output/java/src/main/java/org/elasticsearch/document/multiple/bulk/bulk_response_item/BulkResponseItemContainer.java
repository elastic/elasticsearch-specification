
package org.elasticsearch.document.multiple.bulk.bulk_response_item;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.bulk.bulk_response_item.*;

public class BulkResponseItemContainer  implements XContentable<BulkResponseItemContainer> {
  
  static final ParseField INDEX = new ParseField("index");
  private BulkIndexResponseItem _index;
  public BulkIndexResponseItem getIndex() { return this._index; }
  public BulkResponseItemContainer setIndex(BulkIndexResponseItem val) { this._index = val; return this; }

  static final ParseField CREATE = new ParseField("create");
  private BulkCreateResponseItem _create;
  public BulkCreateResponseItem getCreate() { return this._create; }
  public BulkResponseItemContainer setCreate(BulkCreateResponseItem val) { this._create = val; return this; }

  static final ParseField UPDATE = new ParseField("update");
  private BulkUpdateResponseItem _update;
  public BulkUpdateResponseItem getUpdate() { return this._update; }
  public BulkResponseItemContainer setUpdate(BulkUpdateResponseItem val) { this._update = val; return this; }

  static final ParseField DELETE = new ParseField("delete");
  private BulkDeleteResponseItem _delete;
  public BulkDeleteResponseItem getDelete() { return this._delete; }
  public BulkResponseItemContainer setDelete(BulkDeleteResponseItem val) { this._delete = val; return this; }


  
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
  public BulkResponseItemContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkResponseItemContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkResponseItemContainer, Void> PARSER =
    new ObjectParser<>(BulkResponseItemContainer.class.getName(), false, BulkResponseItemContainer::new);

  static {
    PARSER.declareObject(BulkResponseItemContainer::setIndex, (p, t) -> BulkIndexResponseItem.PARSER.apply(p, t), INDEX);
    PARSER.declareObject(BulkResponseItemContainer::setCreate, (p, t) -> BulkCreateResponseItem.PARSER.apply(p, t), CREATE);
    PARSER.declareObject(BulkResponseItemContainer::setUpdate, (p, t) -> BulkUpdateResponseItem.PARSER.apply(p, t), UPDATE);
    PARSER.declareObject(BulkResponseItemContainer::setDelete, (p, t) -> BulkDeleteResponseItem.PARSER.apply(p, t), DELETE);
  }

}
