
package org.elasticsearch.document.multiple.bulk;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.document.multiple.bulk.bulk_response_item.*;
import org.elasticsearch.internal.*;

public class BulkResponse  implements XContentable<BulkResponse> {
  
  static final ParseField ERRORS = new ParseField("errors");
  private Boolean _errors;
  public Boolean getErrors() { return this._errors; }
  public BulkResponse setErrors(Boolean val) { this._errors = val; return this; }


  static final ParseField ITEMS = new ParseField("items");
  private List<BulkResponseItemBase> _items;
  public List<BulkResponseItemBase> getItems() { return this._items; }
  public BulkResponse setItems(List<BulkResponseItemBase> val) { this._items = val; return this; }


  static final ParseField ITEMS_WITH_ERRORS = new ParseField("items_with_errors");
  private List<BulkResponseItemBase> _itemsWithErrors;
  public List<BulkResponseItemBase> getItemsWithErrors() { return this._itemsWithErrors; }
  public BulkResponse setItemsWithErrors(List<BulkResponseItemBase> val) { this._itemsWithErrors = val; return this; }


  static final ParseField TOOK = new ParseField("took");
  private Long _took;
  public Long getTook() { return this._took; }
  public BulkResponse setTook(Long val) { this._took = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_errors != null) {
      builder.field(ERRORS.getPreferredName(), _errors);
    }
    if (_items != null) {
      builder.array(ITEMS.getPreferredName(), _items);
    }
    if (_itemsWithErrors != null) {
      builder.array(ITEMS_WITH_ERRORS.getPreferredName(), _itemsWithErrors);
    }
    if (_took != null) {
      builder.field(TOOK.getPreferredName(), _took);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BulkResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkResponse, Void> PARSER =
    new ObjectParser<>(BulkResponse.class.getName(), false, BulkResponse::new);

  static {
    PARSER.declareBoolean(BulkResponse::setErrors, ERRORS);
    PARSER.declareObjectArray(BulkResponse::setItems, (p, t) -> BulkResponseItemBase.PARSER.apply(p, t), ITEMS);
    PARSER.declareObjectArray(BulkResponse::setItemsWithErrors, (p, t) -> BulkResponseItemBase.PARSER.apply(p, t), ITEMS_WITH_ERRORS);
    PARSER.declareLong(BulkResponse::setTook, TOOK);
  }

}
