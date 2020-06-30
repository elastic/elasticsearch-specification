
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


public class PorterStemTokenFilter  implements XContentable<PorterStemTokenFilter> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public PorterStemTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PorterStemTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PorterStemTokenFilter, Void> PARSER =
    new ObjectParser<>(PorterStemTokenFilter.class.getName(), false, PorterStemTokenFilter::new);

  static {
    
  }

}
