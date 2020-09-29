
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
import org.elasticsearch.internal.*;
import org.elasticsearch.analysis.tokenizers.*;

public class UaxEmailUrlTokenizer extends TokenizerBase implements XContentable<UaxEmailUrlTokenizer> {
  
  static final ParseField MAX_TOKEN_LENGTH = new ParseField("max_token_length");
  private int _maxTokenLength;
  private boolean _maxTokenLength$isSet;
  public int getMaxTokenLength() { return this._maxTokenLength; }
  public UaxEmailUrlTokenizer setMaxTokenLength(int val) {
    this._maxTokenLength = val;
    _maxTokenLength$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_maxTokenLength$isSet) {
      builder.field(MAX_TOKEN_LENGTH.getPreferredName(), _maxTokenLength);
    }
  }

  @Override
  public UaxEmailUrlTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UaxEmailUrlTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UaxEmailUrlTokenizer, Void> PARSER =
    new ObjectParser<>(UaxEmailUrlTokenizer.class.getName(), false, UaxEmailUrlTokenizer::new);

  static {
    PARSER.declareInt(UaxEmailUrlTokenizer::setMaxTokenLength, MAX_TOKEN_LENGTH);
  }

}
