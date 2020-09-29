
package org.elasticsearch.analysis.analyzers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.analyzers.*;

public class SimpleAnalyzer extends AnalyzerBase implements XContentable<SimpleAnalyzer> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public SimpleAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SimpleAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SimpleAnalyzer, Void> PARSER =
    new ObjectParser<>(SimpleAnalyzer.class.getName(), false, SimpleAnalyzer::new);

  static {
    
  }

}
