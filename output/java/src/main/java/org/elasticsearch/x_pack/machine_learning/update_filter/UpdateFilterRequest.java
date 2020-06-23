
package org.elasticsearch.x_pack.machine_learning.update_filter;

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


public class UpdateFilterRequest  implements XContentable<UpdateFilterRequest> {
  
  static final ParseField ADD_ITEMS = new ParseField("add_items");
  private List<String> _addItems;
  public List<String> getAddItems() { return this._addItems; }
  public UpdateFilterRequest setAddItems(List<String> val) { this._addItems = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public UpdateFilterRequest setDescription(String val) { this._description = val; return this; }


  static final ParseField REMOVE_ITEMS = new ParseField("remove_items");
  private List<String> _removeItems;
  public List<String> getRemoveItems() { return this._removeItems; }
  public UpdateFilterRequest setRemoveItems(List<String> val) { this._removeItems = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_addItems != null) {
      builder.array(ADD_ITEMS.getPreferredName(), _addItems);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_removeItems != null) {
      builder.array(REMOVE_ITEMS.getPreferredName(), _removeItems);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public UpdateFilterRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UpdateFilterRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UpdateFilterRequest, Void> PARSER =
    new ObjectParser<>(UpdateFilterRequest.class.getName(), false, UpdateFilterRequest::new);

  static {
    PARSER.declareStringArray(UpdateFilterRequest::setAddItems, ADD_ITEMS);
    PARSER.declareString(UpdateFilterRequest::setDescription, DESCRIPTION);
    PARSER.declareStringArray(UpdateFilterRequest::setRemoveItems, REMOVE_ITEMS);
  }

}
