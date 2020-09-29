
package org.elasticsearch.indices.analyze;

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

public class ExplainAnalyzeToken  implements XContentable<ExplainAnalyzeToken> {
  
  static final ParseField BYTES = new ParseField("bytes");
  private String _bytes;
  public String getBytes() { return this._bytes; }
  public ExplainAnalyzeToken setBytes(String val) { this._bytes = val; return this; }

  static final ParseField END_OFFSET = new ParseField("end_offset");
  private long _endOffset;
  private boolean _endOffset$isSet;
  public long getEndOffset() { return this._endOffset; }
  public ExplainAnalyzeToken setEndOffset(long val) {
    this._endOffset = val;
    _endOffset$isSet = true;
    return this;
  }

  static final ParseField KEYWORD = new ParseField("keyword");
  private Boolean _keyword;
  public Boolean getKeyword() { return this._keyword; }
  public ExplainAnalyzeToken setKeyword(Boolean val) { this._keyword = val; return this; }

  static final ParseField POSITION = new ParseField("position");
  private long _position;
  private boolean _position$isSet;
  public long getPosition() { return this._position; }
  public ExplainAnalyzeToken setPosition(long val) {
    this._position = val;
    _position$isSet = true;
    return this;
  }

  static final ParseField POSITION_LENGTH = new ParseField("positionLength");
  private long _positionLength;
  private boolean _positionLength$isSet;
  public long getPositionLength() { return this._positionLength; }
  public ExplainAnalyzeToken setPositionLength(long val) {
    this._positionLength = val;
    _positionLength$isSet = true;
    return this;
  }

  static final ParseField START_OFFSET = new ParseField("start_offset");
  private long _startOffset;
  private boolean _startOffset$isSet;
  public long getStartOffset() { return this._startOffset; }
  public ExplainAnalyzeToken setStartOffset(long val) {
    this._startOffset = val;
    _startOffset$isSet = true;
    return this;
  }

  static final ParseField TERM_FREQUENCY = new ParseField("termFrequency");
  private long _termFrequency;
  private boolean _termFrequency$isSet;
  public long getTermFrequency() { return this._termFrequency; }
  public ExplainAnalyzeToken setTermFrequency(long val) {
    this._termFrequency = val;
    _termFrequency$isSet = true;
    return this;
  }

  static final ParseField TOKEN = new ParseField("token");
  private String _token;
  public String getToken() { return this._token; }
  public ExplainAnalyzeToken setToken(String val) { this._token = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ExplainAnalyzeToken setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName(), _bytes);
    }
    if (_endOffset$isSet) {
      builder.field(END_OFFSET.getPreferredName(), _endOffset);
    }
    if (_keyword != null) {
      builder.field(KEYWORD.getPreferredName(), _keyword);
    }
    if (_position$isSet) {
      builder.field(POSITION.getPreferredName(), _position);
    }
    if (_positionLength$isSet) {
      builder.field(POSITION_LENGTH.getPreferredName(), _positionLength);
    }
    if (_startOffset$isSet) {
      builder.field(START_OFFSET.getPreferredName(), _startOffset);
    }
    if (_termFrequency$isSet) {
      builder.field(TERM_FREQUENCY.getPreferredName(), _termFrequency);
    }
    if (_token != null) {
      builder.field(TOKEN.getPreferredName(), _token);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public ExplainAnalyzeToken fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ExplainAnalyzeToken.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ExplainAnalyzeToken, Void> PARSER =
    new ObjectParser<>(ExplainAnalyzeToken.class.getName(), false, ExplainAnalyzeToken::new);

  static {
    PARSER.declareString(ExplainAnalyzeToken::setBytes, BYTES);
    PARSER.declareLong(ExplainAnalyzeToken::setEndOffset, END_OFFSET);
    PARSER.declareBoolean(ExplainAnalyzeToken::setKeyword, KEYWORD);
    PARSER.declareLong(ExplainAnalyzeToken::setPosition, POSITION);
    PARSER.declareLong(ExplainAnalyzeToken::setPositionLength, POSITION_LENGTH);
    PARSER.declareLong(ExplainAnalyzeToken::setStartOffset, START_OFFSET);
    PARSER.declareLong(ExplainAnalyzeToken::setTermFrequency, TERM_FREQUENCY);
    PARSER.declareString(ExplainAnalyzeToken::setToken, TOKEN);
    PARSER.declareString(ExplainAnalyzeToken::setType, TYPE);
  }

}
