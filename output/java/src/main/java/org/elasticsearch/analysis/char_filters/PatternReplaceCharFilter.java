
package org.elasticsearch.analysis.char_filters;

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


public class PatternReplaceCharFilter  implements XContentable<PatternReplaceCharFilter> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public PatternReplaceCharFilter setFlags(String val) { this._flags = val; return this; }


  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public PatternReplaceCharFilter setPattern(String val) { this._pattern = val; return this; }


  static final ParseField REPLACEMENT = new ParseField("replacement");
  private String _replacement;
  public String getReplacement() { return this._replacement; }
  public PatternReplaceCharFilter setReplacement(String val) { this._replacement = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName(), _flags);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    if (_replacement != null) {
      builder.field(REPLACEMENT.getPreferredName(), _replacement);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PatternReplaceCharFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PatternReplaceCharFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PatternReplaceCharFilter, Void> PARSER =
    new ObjectParser<>(PatternReplaceCharFilter.class.getName(), false, PatternReplaceCharFilter::new);

  static {
    PARSER.declareString(PatternReplaceCharFilter::setFlags, FLAGS);
    PARSER.declareString(PatternReplaceCharFilter::setPattern, PATTERN);
    PARSER.declareString(PatternReplaceCharFilter::setReplacement, REPLACEMENT);
  }

}
