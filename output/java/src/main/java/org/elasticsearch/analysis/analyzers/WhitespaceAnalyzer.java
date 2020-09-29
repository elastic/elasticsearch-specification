
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

public class WhitespaceAnalyzer extends AnalyzerBase implements XContentable<WhitespaceAnalyzer> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public WhitespaceAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return WhitespaceAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<WhitespaceAnalyzer, Void> PARSER =
    new ObjectParser<>(WhitespaceAnalyzer.class.getName(), false, WhitespaceAnalyzer::new);

  static {
    
  }

}
