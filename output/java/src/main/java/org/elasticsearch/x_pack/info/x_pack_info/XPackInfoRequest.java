
package org.elasticsearch.x_pack.info.x_pack_info;

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


public class XPackInfoRequest  implements XContentable<XPackInfoRequest> {
  
  static final ParseField CATEGORIES = new ParseField("categories");
  private List<String> _categories;
  public List<String> getCategories() { return this._categories; }
  public XPackInfoRequest setCategories(List<String> val) { this._categories = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_categories != null) {
      builder.array(CATEGORIES.getPreferredName(), _categories);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackInfoRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackInfoRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackInfoRequest, Void> PARSER =
    new ObjectParser<>(XPackInfoRequest.class.getName(), false, XPackInfoRequest::new);

  static {
    PARSER.declareStringArray(XPackInfoRequest::setCategories, CATEGORIES);
  }

}
