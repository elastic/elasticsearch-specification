
package org.elasticsearch.analysis.token_filters;

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


public class PatternReplaceTokenFilter  implements XContentable<PatternReplaceTokenFilter> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public PatternReplaceTokenFilter setFlags(String val) { this._flags = val; return this; }


  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public PatternReplaceTokenFilter setPattern(String val) { this._pattern = val; return this; }


  static final ParseField REPLACEMENT = new ParseField("replacement");
  private String _replacement;
  public String getReplacement() { return this._replacement; }
  public PatternReplaceTokenFilter setReplacement(String val) { this._replacement = val; return this; }


  
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
  public PatternReplaceTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PatternReplaceTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PatternReplaceTokenFilter, Void> PARSER =
    new ObjectParser<>(PatternReplaceTokenFilter.class.getName(), false, PatternReplaceTokenFilter::new);

  static {
    PARSER.declareString(PatternReplaceTokenFilter::setFlags, FLAGS);
    PARSER.declareString(PatternReplaceTokenFilter::setPattern, PATTERN);
    PARSER.declareString(PatternReplaceTokenFilter::setReplacement, REPLACEMENT);
  }

}
