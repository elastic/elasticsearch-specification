
package org.elasticsearch.query_dsl.full_text.intervals;

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


public class IntervalsNoFilter  implements XContentable<IntervalsNoFilter> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public IntervalsNoFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsNoFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsNoFilter, Void> PARSER =
    new ObjectParser<>(IntervalsNoFilter.class.getName(), false, IntervalsNoFilter::new);

  static {
    
  }

}
