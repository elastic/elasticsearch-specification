
package org.elasticsearch.mapping.types.core;

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

public class TextIndexPrefixes  implements XContentable<TextIndexPrefixes> {
  
  static final ParseField MAX_CHARS = new ParseField("max_chars");
  private Integer _maxChars;
  public Integer getMaxChars() { return this._maxChars; }
  public TextIndexPrefixes setMaxChars(Integer val) { this._maxChars = val; return this; }


  static final ParseField MIN_CHARS = new ParseField("min_chars");
  private Integer _minChars;
  public Integer getMinChars() { return this._minChars; }
  public TextIndexPrefixes setMinChars(Integer val) { this._minChars = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_maxChars != null) {
      builder.field(MAX_CHARS.getPreferredName(), _maxChars);
    }
    if (_minChars != null) {
      builder.field(MIN_CHARS.getPreferredName(), _minChars);
    }
    builder.endObject();
    return builder;
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
