
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

public class AnalyzeToken  implements XContentable<AnalyzeToken> {
  
  static final ParseField END_OFFSET = new ParseField("end_offset");
  private long _endOffset;
  private boolean _endOffset$isSet;
  public long getEndOffset() { return this._endOffset; }
  public AnalyzeToken setEndOffset(long val) {
    this._endOffset = val;
    _endOffset$isSet = true;
    return this;
  }

  static final ParseField POSITION = new ParseField("position");
  private long _position;
  private boolean _position$isSet;
  public long getPosition() { return this._position; }
  public AnalyzeToken setPosition(long val) {
    this._position = val;
    _position$isSet = true;
    return this;
  }

  static final ParseField POSITION_LENGTH = new ParseField("position_length");
  private long _positionLength;
  private boolean _positionLength$isSet;
  public long getPositionLength() { return this._positionLength; }
  public AnalyzeToken setPositionLength(long val) {
    this._positionLength = val;
    _positionLength$isSet = true;
    return this;
  }

  static final ParseField START_OFFSET = new ParseField("start_offset");
  private long _startOffset;
  private boolean _startOffset$isSet;
  public long getStartOffset() { return this._startOffset; }
  public AnalyzeToken setStartOffset(long val) {
    this._startOffset = val;
    _startOffset$isSet = true;
    return this;
  }

  static final ParseField TOKEN = new ParseField("token");
  private String _token;
  public String getToken() { return this._token; }
  public AnalyzeToken setToken(String val) { this._token = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public AnalyzeToken setType(String val) { this._type = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_endOffset$isSet) {
      builder.field(END_OFFSET.getPreferredName(), _endOffset);
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
    if (_token != null) {
      builder.field(TOKEN.getPreferredName(), _token);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
  }

  @Override
  public AnalyzeToken fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalyzeToken.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalyzeToken, Void> PARSER =
    new ObjectParser<>(AnalyzeToken.class.getName(), false, AnalyzeToken::new);

  static {
    PARSER.declareLong(AnalyzeToken::setEndOffset, END_OFFSET);
    PARSER.declareLong(AnalyzeToken::setPosition, POSITION);
    PARSER.declareLong(AnalyzeToken::setPositionLength, POSITION_LENGTH);
    PARSER.declareLong(AnalyzeToken::setStartOffset, START_OFFSET);
    PARSER.declareString(AnalyzeToken::setToken, TOKEN);
    PARSER.declareString(AnalyzeToken::setType, TYPE);
  }

}
