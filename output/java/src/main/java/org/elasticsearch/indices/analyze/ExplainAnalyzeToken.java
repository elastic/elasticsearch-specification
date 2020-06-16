
package org.elasticsearch.indices.analyze;

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

public class ExplainAnalyzeToken  implements XContentable<ExplainAnalyzeToken> {
  
  static final ParseField BYTES = new ParseField("bytes");
  private String _bytes;
  public String getBytes() { return this._bytes; }
  public ExplainAnalyzeToken setBytes(String val) { this._bytes = val; return this; }


  static final ParseField END_OFFSET = new ParseField("end_offset");
  private Long _endOffset;
  public Long getEndOffset() { return this._endOffset; }
  public ExplainAnalyzeToken setEndOffset(Long val) { this._endOffset = val; return this; }


  static final ParseField KEYWORD = new ParseField("keyword");
  private Boolean _keyword;
  public Boolean getKeyword() { return this._keyword; }
  public ExplainAnalyzeToken setKeyword(Boolean val) { this._keyword = val; return this; }


  static final ParseField POSITION = new ParseField("position");
  private Long _position;
  public Long getPosition() { return this._position; }
  public ExplainAnalyzeToken setPosition(Long val) { this._position = val; return this; }


  static final ParseField POSITION_LENGTH = new ParseField("positionLength");
  private Long _positionLength;
  public Long getPositionLength() { return this._positionLength; }
  public ExplainAnalyzeToken setPositionLength(Long val) { this._positionLength = val; return this; }


  static final ParseField START_OFFSET = new ParseField("start_offset");
  private Long _startOffset;
  public Long getStartOffset() { return this._startOffset; }
  public ExplainAnalyzeToken setStartOffset(Long val) { this._startOffset = val; return this; }


  static final ParseField TERM_FREQUENCY = new ParseField("termFrequency");
  private Long _termFrequency;
  public Long getTermFrequency() { return this._termFrequency; }
  public ExplainAnalyzeToken setTermFrequency(Long val) { this._termFrequency = val; return this; }


  static final ParseField TOKEN = new ParseField("token");
  private String _token;
  public String getToken() { return this._token; }
  public ExplainAnalyzeToken setToken(String val) { this._token = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public ExplainAnalyzeToken setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bytes != null) {
      builder.field(BYTES.getPreferredName(), _bytes);
    }
    if (_endOffset != null) {
      builder.field(END_OFFSET.getPreferredName(), _endOffset);
    }
    if (_keyword != null) {
      builder.field(KEYWORD.getPreferredName(), _keyword);
    }
    if (_position != null) {
      builder.field(POSITION.getPreferredName(), _position);
    }
    if (_positionLength != null) {
      builder.field(POSITION_LENGTH.getPreferredName(), _positionLength);
    }
    if (_startOffset != null) {
      builder.field(START_OFFSET.getPreferredName(), _startOffset);
    }
    if (_termFrequency != null) {
      builder.field(TERM_FREQUENCY.getPreferredName(), _termFrequency);
    }
    if (_token != null) {
      builder.field(TOKEN.getPreferredName(), _token);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
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
