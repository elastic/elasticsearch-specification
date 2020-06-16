
package org.elasticsearch.analysis.char_filters;

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


public class HtmlStripCharFilter  implements XContentable<HtmlStripCharFilter> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public HtmlStripCharFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HtmlStripCharFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HtmlStripCharFilter, Void> PARSER =
    new ObjectParser<>(HtmlStripCharFilter.class.getName(), false, HtmlStripCharFilter::new);

  static {
    
  }

}
