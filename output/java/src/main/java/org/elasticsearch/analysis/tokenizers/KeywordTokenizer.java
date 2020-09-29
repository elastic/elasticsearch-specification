
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

public class KeywordTokenizer extends TokenizerBase implements XContentable<KeywordTokenizer> {
  
  static final ParseField BUFFER_SIZE = new ParseField("buffer_size");
  private int _bufferSize;
  private boolean _bufferSize$isSet;
  public int getBufferSize() { return this._bufferSize; }
  public KeywordTokenizer setBufferSize(int val) {
    this._bufferSize = val;
    _bufferSize$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_bufferSize$isSet) {
      builder.field(BUFFER_SIZE.getPreferredName(), _bufferSize);
    }
  }

  @Override
  public KeywordTokenizer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return KeywordTokenizer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<KeywordTokenizer, Void> PARSER =
    new ObjectParser<>(KeywordTokenizer.class.getName(), false, KeywordTokenizer::new);

  static {
    PARSER.declareInt(KeywordTokenizer::setBufferSize, BUFFER_SIZE);
  }

}
