
package org.elasticsearch.mapping.types.core;

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

public class TextIndexPrefixes  implements XContentable<TextIndexPrefixes> {
  
  static final ParseField MAX_CHARS = new ParseField("max_chars");
  private int _maxChars;
  private boolean _maxChars$isSet;
  public int getMaxChars() { return this._maxChars; }
  public TextIndexPrefixes setMaxChars(int val) {
    this._maxChars = val;
    _maxChars$isSet = true;
    return this;
  }

  static final ParseField MIN_CHARS = new ParseField("min_chars");
  private int _minChars;
  private boolean _minChars$isSet;
  public int getMinChars() { return this._minChars; }
  public TextIndexPrefixes setMinChars(int val) {
    this._minChars = val;
    _minChars$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_maxChars$isSet) {
      builder.field(MAX_CHARS.getPreferredName(), _maxChars);
    }
    if (_minChars$isSet) {
      builder.field(MIN_CHARS.getPreferredName(), _minChars);
    }
  }

  @Override
  public TextIndexPrefixes fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TextIndexPrefixes.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TextIndexPrefixes, Void> PARSER =
    new ObjectParser<>(TextIndexPrefixes.class.getName(), false, TextIndexPrefixes::new);

  static {
    PARSER.declareInt(TextIndexPrefixes::setMaxChars, MAX_CHARS);
    PARSER.declareInt(TextIndexPrefixes::setMinChars, MIN_CHARS);
  }

}
