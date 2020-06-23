
package org.elasticsearch.analysis.token_filters.compound_word;

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


public class HyphenationDecompounderTokenFilter  implements XContentable<HyphenationDecompounderTokenFilter> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public HyphenationDecompounderTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HyphenationDecompounderTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HyphenationDecompounderTokenFilter, Void> PARSER =
    new ObjectParser<>(HyphenationDecompounderTokenFilter.class.getName(), false, HyphenationDecompounderTokenFilter::new);

  static {
    
  }

}
