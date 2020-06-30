
package org.elasticsearch.document.single.term_vectors;

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

public class Token  implements XContentable<Token> {
  
  static final ParseField END_OFFSET = new ParseField("end_offset");
  private Integer _endOffset;
  public Integer getEndOffset() { return this._endOffset; }
  public Token setEndOffset(Integer val) { this._endOffset = val; return this; }


  static final ParseField PAYLOAD = new ParseField("payload");
  private String _payload;
  public String getPayload() { return this._payload; }
  public Token setPayload(String val) { this._payload = val; return this; }


  static final ParseField POSITION = new ParseField("position");
  private Integer _position;
  public Integer getPosition() { return this._position; }
  public Token setPosition(Integer val) { this._position = val; return this; }


  static final ParseField START_OFFSET = new ParseField("start_offset");
  private Integer _startOffset;
  public Integer getStartOffset() { return this._startOffset; }
  public Token setStartOffset(Integer val) { this._startOffset = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_endOffset != null) {
      builder.field(END_OFFSET.getPreferredName(), _endOffset);
    }
    if (_payload != null) {
      builder.field(PAYLOAD.getPreferredName(), _payload);
    }
    if (_position != null) {
      builder.field(POSITION.getPreferredName(), _position);
    }
    if (_startOffset != null) {
      builder.field(START_OFFSET.getPreferredName(), _startOffset);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public Token fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Token.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Token, Void> PARSER =
    new ObjectParser<>(Token.class.getName(), false, Token::new);

  static {
    PARSER.declareInt(Token::setEndOffset, END_OFFSET);
    PARSER.declareString(Token::setPayload, PAYLOAD);
    PARSER.declareInt(Token::setPosition, POSITION);
    PARSER.declareInt(Token::setStartOffset, START_OFFSET);
  }

}
