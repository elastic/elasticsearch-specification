
package org.elasticsearch.query_dsl.full_text.intervals;

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

public class IntervalsWildcard  implements XContentable<IntervalsWildcard> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public IntervalsWildcard setAnalyzer(String val) { this._analyzer = val; return this; }

  static final ParseField PATTERN = new ParseField("pattern");
  private String _pattern;
  public String getPattern() { return this._pattern; }
  public IntervalsWildcard setPattern(String val) { this._pattern = val; return this; }

  static final ParseField USE_FIELD = new ParseField("use_field");
  private String _useField;
  public String getUseField() { return this._useField; }
  public IntervalsWildcard setUseField(String val) { this._useField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_pattern != null) {
      builder.field(PATTERN.getPreferredName(), _pattern);
    }
    if (_useField != null) {
      builder.field(USE_FIELD.getPreferredName(), _useField);
    }
  }

  @Override
  public IntervalsWildcard fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsWildcard.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsWildcard, Void> PARSER =
    new ObjectParser<>(IntervalsWildcard.class.getName(), false, IntervalsWildcard::new);

  static {
    PARSER.declareString(IntervalsWildcard::setAnalyzer, ANALYZER);
    PARSER.declareString(IntervalsWildcard::setPattern, PATTERN);
    PARSER.declareString(IntervalsWildcard::setUseField, USE_FIELD);
  }

}
