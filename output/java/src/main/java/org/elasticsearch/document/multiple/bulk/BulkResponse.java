
package org.elasticsearch.document.multiple.bulk;

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
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.response.*;

public class BulkResponse extends ResponseBase<BulkResponse> implements XContentable<BulkResponse> {
  
  static final ParseField ERRORS = new ParseField("errors");
  private Boolean _errors;
  public Boolean getErrors() { return this._errors; }
  public BulkResponse setErrors(Boolean val) { this._errors = val; return this; }

  static final ParseField ITEMS = new ParseField("items");
  private List<BulkResponseItemContainer> _items;
  public List<BulkResponseItemContainer> getItems() { return this._items; }
  public BulkResponse setItems(List<BulkResponseItemContainer> val) { this._items = val; return this; }

  static final ParseField TOOK = new ParseField("took");
  private long _took;
  private boolean _took$isSet;
  public long getTook() { return this._took; }
  public BulkResponse setTook(long val) {
    this._took = val;
    _took$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_errors != null) {
      builder.field(ERRORS.getPreferredName(), _errors);
    }
    if (_items != null) {
      builder.array(ITEMS.getPreferredName(), _items);
    }
    if (_took$isSet) {
      builder.field(TOOK.getPreferredName(), _took);
    }
  }

  @Override
  public BulkResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkResponse, Void> PARSER =
    new ObjectParser<>(BulkResponse.class.getName(), false, BulkResponse::new);

  static {
    PARSER.declareBoolean(BulkResponse::setErrors, ERRORS);
    PARSER.declareObjectArray(BulkResponse::setItems, (p, t) -> BulkResponseItemContainer.PARSER.apply(p, t), ITEMS);
    PARSER.declareLong(BulkResponse::setTook, TOOK);
  }

}
