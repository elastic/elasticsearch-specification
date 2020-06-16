
package org.elasticsearch.analysis.token_filters;

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


public class UppercaseTokenFilter  implements XContentable<UppercaseTokenFilter> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public UppercaseTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UppercaseTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UppercaseTokenFilter, Void> PARSER =
    new ObjectParser<>(UppercaseTokenFilter.class.getName(), false, UppercaseTokenFilter::new);

  static {
    
  }

}
