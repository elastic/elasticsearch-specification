
package org.elasticsearch.analysis.token_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.*;

public class PorterStemTokenFilter extends TokenFilterBase implements XContentable<PorterStemTokenFilter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
