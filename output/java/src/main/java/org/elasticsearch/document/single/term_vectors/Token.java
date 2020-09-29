
package org.elasticsearch.document.single.term_vectors;

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

public class Token  implements XContentable<Token> {
  
  static final ParseField END_OFFSET = new ParseField("end_offset");
  private int _endOffset;
  private boolean _endOffset$isSet;
  public int getEndOffset() { return this._endOffset; }
  public Token setEndOffset(int val) {
    this._endOffset = val;
    _endOffset$isSet = true;
    return this;
  }

  static final ParseField PAYLOAD = new ParseField("payload");
  private String _payload;
  public String getPayload() { return this._payload; }
  public Token setPayload(String val) { this._payload = val; return this; }

  static final ParseField POSITION = new ParseField("position");
  private int _position;
  private boolean _position$isSet;
  public int getPosition() { return this._position; }
  public Token setPosition(int val) {
    this._position = val;
    _position$isSet = true;
    return this;
  }

  static final ParseField START_OFFSET = new ParseField("start_offset");
  private int _startOffset;
  private boolean _startOffset$isSet;
  public int getStartOffset() { return this._startOffset; }
  public Token setStartOffset(int val) {
    this._startOffset = val;
    _startOffset$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_endOffset$isSet) {
      builder.field(END_OFFSET.getPreferredName(), _endOffset);
    }
    if (_payload != null) {
      builder.field(PAYLOAD.getPreferredName(), _payload);
    }
    if (_position$isSet) {
      builder.field(POSITION.getPreferredName(), _position);
    }
    if (_startOffset$isSet) {
      builder.field(START_OFFSET.getPreferredName(), _startOffset);
    }
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
