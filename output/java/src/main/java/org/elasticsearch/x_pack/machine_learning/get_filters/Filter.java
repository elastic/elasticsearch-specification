
package org.elasticsearch.x_pack.machine_learning.get_filters;

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


public class Filter  implements XContentable<Filter> {
  
  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public Filter setDescription(String val) { this._description = val; return this; }


  static final ParseField FILTER_ID = new ParseField("filter_id");
  private String _filterId;
  public String getFilterId() { return this._filterId; }
  public Filter setFilterId(String val) { this._filterId = val; return this; }


  static final ParseField ITEMS = new ParseField("items");
  private List<String> _items;
  public List<String> getItems() { return this._items; }
  public Filter setItems(List<String> val) { this._items = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_filterId != null) {
      builder.field(FILTER_ID.getPreferredName(), _filterId);
    }
    if (_items != null) {
      builder.array(ITEMS.getPreferredName(), _items);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Filter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Filter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Filter, Void> PARSER =
    new ObjectParser<>(Filter.class.getName(), false, Filter::new);

  static {
    PARSER.declareString(Filter::setDescription, DESCRIPTION);
    PARSER.declareString(Filter::setFilterId, FILTER_ID);
    PARSER.declareStringArray(Filter::setItems, ITEMS);
  }

}
