
package org.elasticsearch.analysis.analyzers;

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


public class KeywordAnalyzer  implements XContentable<KeywordAnalyzer> {
  

  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    
    builder.endObject();
    return builder;
  }

  @Override
  public KeywordAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeywordAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeywordAnalyzer, Void> PARSER =
    new ObjectParser<>(KeywordAnalyzer.class.getName(), false, KeywordAnalyzer::new);

  static {
    
  }

}
