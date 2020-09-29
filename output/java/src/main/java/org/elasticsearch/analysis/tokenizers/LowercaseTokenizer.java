
package org.elasticsearch.analysis.tokenizers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.tokenizers.*;

public class LowercaseTokenizer extends TokenizerBase implements XContentable<LowercaseTokenizer> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
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
