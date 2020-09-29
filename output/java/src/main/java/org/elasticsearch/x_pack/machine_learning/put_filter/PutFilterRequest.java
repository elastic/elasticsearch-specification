
package org.elasticsearch.x_pack.machine_learning.put_filter;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_abstractions.request.*;

public class PutFilterRequest extends RequestBase<PutFilterRequest> implements XContentable<PutFilterRequest> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public PutFilterRequest setDescription(String val) { this._description = val; return this; }

  static final ParseField ITEMS = new ParseField("items");
  private List<String> _items;
  public List<String> getItems() { return this._items; }
  public PutFilterRequest setItems(List<String> val) { this._items = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_items != null) {
      builder.array(ITEMS.getPreferredName(), _items);
    }
  }

  @Override
  public PutFilterRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutFilterRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutFilterRequest, Void> PARSER =
    new ObjectParser<>(PutFilterRequest.class.getName(), false, PutFilterRequest::new);

  static {
    PARSER.declareString(PutFilterRequest::setDescription, DESCRIPTION);
    PARSER.declareStringArray(PutFilterRequest::setItems, ITEMS);
  }

}
