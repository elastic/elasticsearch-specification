
package org.elasticsearch.aggregations.bucket.reverse_nested;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class ReverseNestedAggregation  implements XContentable<ReverseNestedAggregation> {
  
  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public ReverseNestedAggregation setPath(String val) { this._path = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
  }

  @Override
  public ReverseNestedAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ReverseNestedAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ReverseNestedAggregation, Void> PARSER =
    new ObjectParser<>(ReverseNestedAggregation.class.getName(), false, ReverseNestedAggregation::new);

  static {
    PARSER.declareString(ReverseNestedAggregation::setPath, PATH);
  }

}
