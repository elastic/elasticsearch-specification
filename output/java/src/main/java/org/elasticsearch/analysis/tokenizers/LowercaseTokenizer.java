
package org.elasticsearch.analysis.tokenizers;

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


public class LowercaseTokenizer  implements XContentable<LowercaseTokenizer> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public LowercaseTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LowercaseTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LowercaseTokenizer, Void> PARSER =
    new ObjectParser<>(LowercaseTokenizer.class.getName(), false, LowercaseTokenizer::new);

  static {
    
  }

}
