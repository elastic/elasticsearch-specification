
package org.elasticsearch.aggregations.bucket.parent;

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

public class ParentAggregation  implements XContentable<ParentAggregation> {
  
  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ParentAggregation setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public ParentAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ParentAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ParentAggregation, Void> PARSER =
    new ObjectParser<>(ParentAggregation.class.getName(), false, ParentAggregation::new);

  static {
    PARSER.declareString(ParentAggregation::setType, TYPE);
  }

}
