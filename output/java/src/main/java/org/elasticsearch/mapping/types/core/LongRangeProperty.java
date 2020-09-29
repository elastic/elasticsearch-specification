
package org.elasticsearch.mapping.types.core;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.mapping.types.core.*;
import org.elasticsearch.mapping.types.*;

public class LongRangeProperty extends RangePropertyBase implements XContentable<LongRangeProperty> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public LongRangeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LongRangeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LongRangeProperty, Void> PARSER =
    new ObjectParser<>(LongRangeProperty.class.getName(), false, LongRangeProperty::new);

  static {
    
  }

}
