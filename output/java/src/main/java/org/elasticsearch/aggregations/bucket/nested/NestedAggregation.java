
package org.elasticsearch.aggregations.bucket.nested;

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

public class NestedAggregation  implements XContentable<NestedAggregation> {
  
  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public NestedAggregation setPath(String val) { this._path = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
  }

  @Override
  public NestedAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NestedAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NestedAggregation, Void> PARSER =
    new ObjectParser<>(NestedAggregation.class.getName(), false, NestedAggregation::new);

  static {
    PARSER.declareString(NestedAggregation::setPath, PATH);
  }

}
