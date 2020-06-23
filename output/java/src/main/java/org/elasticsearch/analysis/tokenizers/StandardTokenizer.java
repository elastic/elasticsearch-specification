
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
import org.elasticsearch.internal.*;

public class StandardTokenizer  implements XContentable<StandardTokenizer> {
  
  static final ParseField MAX_TOKEN_LENGTH = new ParseField("max_token_length");
  private Integer _maxTokenLength;
  public Integer getMaxTokenLength() { return this._maxTokenLength; }
  public StandardTokenizer setMaxTokenLength(Integer val) { this._maxTokenLength = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxTokenLength != null) {
      builder.field(MAX_TOKEN_LENGTH.getPreferredName(), _maxTokenLength);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StandardTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StandardTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StandardTokenizer, Void> PARSER =
    new ObjectParser<>(StandardTokenizer.class.getName(), false, StandardTokenizer::new);

  static {
    PARSER.declareInt(StandardTokenizer::setMaxTokenLength, MAX_TOKEN_LENGTH);
  }

}
