
package org.elasticsearch.analysis.analyzers;

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
import org.elasticsearch.analysis.*;

public class PatternAnalyzer  implements XContentable<PatternAnalyzer> {
  
  static final ParseField FLAGS = new ParseField("flags");
  private String _flags;
  public String getFlags() { return this._flags; }
  public PatternAnalyzer setFlags(String val) { this._flags = val; return this; }


  static final ParseField LOWERCASE = new ParseField("lowercase");
  private Boolean _lowercase;
  public Boolean getLowercase() { return this._lowercase; }
  public PatternAnalyzer setLowercase(Boolean val) { this._lowercase = val; return this; }


  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public PatternAnalyzer setPattern(String val) { this._pattern = val; return this; }


  static final ParseField STOPWORDS = new ParseField("stopwords");
  private StopWords _stopwords;
  public StopWords getStopwords() { return this._stopwords; }
  public PatternAnalyzer setStopwords(StopWords val) { this._stopwords = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_flags != null) {
      builder.field(FLAGS.getPreferredName(), _flags);
    }
    if (_lowercase != null) {
      builder.field(LOWERCASE.getPreferredName(), _lowercase);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    if (_stopwords != null) {
      builder.field(STOPWORDS.getPreferredName());
      _stopwords.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PatternAnalyzer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PatternAnalyzer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PatternAnalyzer, Void> PARSER =
    new ObjectParser<>(PatternAnalyzer.class.getName(), false, PatternAnalyzer::new);

  static {
    PARSER.declareString(PatternAnalyzer::setFlags, FLAGS);
    PARSER.declareBoolean(PatternAnalyzer::setLowercase, LOWERCASE);
    PARSER.declareString(PatternAnalyzer::setPattern, PATTERN);
    PARSER.declareObject(PatternAnalyzer::setStopwords, (p, t) -> new StopWords().fromXContent(p), STOPWORDS);
  }

}
