
package org.elasticsearch.analysis.char_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.char_filters.*;

public class HtmlStripCharFilter extends CharFilterBase implements XContentable<HtmlStripCharFilter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
