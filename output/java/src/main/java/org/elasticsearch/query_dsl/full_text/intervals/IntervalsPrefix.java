
package org.elasticsearch.query_dsl.full_text.intervals;

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
import org.elasticsearch.common_abstractions.infer.field.*;

public class IntervalsPrefix  implements XContentable<IntervalsPrefix> {
  
  static final ParseField ANALYZER = new ParseField("analyzer");
  private String _analyzer;
  public String getAnalyzer() { return this._analyzer; }
  public IntervalsPrefix setAnalyzer(String val) { this._analyzer = val; return this; }


  static final ParseField PREFIX = new ParseField("prefix");
  private String _prefix;
  public String getPrefix() { return this._prefix; }
  public IntervalsPrefix setPrefix(String val) { this._prefix = val; return this; }


  static final ParseField USE_FIELD = new ParseField("use_field");
  private Field _useField;
  public Field getUseField() { return this._useField; }
  public IntervalsPrefix setUseField(Field val) { this._useField = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_analyzer != null) {
      builder.field(ANALYZER.getPreferredName(), _analyzer);
    }
    if (_prefix != null) {
      builder.field(PREFIX.getPreferredName(), _prefix);
    }
    if (_useField != null) {
      builder.field(USE_FIELD.getPreferredName());
      _useField.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IntervalsPrefix fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IntervalsPrefix.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IntervalsPrefix, Void> PARSER =
    new ObjectParser<>(IntervalsPrefix.class.getName(), false, IntervalsPrefix::new);

  static {
    PARSER.declareString(IntervalsPrefix::setAnalyzer, ANALYZER);
    PARSER.declareString(IntervalsPrefix::setPrefix, PREFIX);
    PARSER.declareObject(IntervalsPrefix::setUseField, (p, t) -> Field.createFrom(p), USE_FIELD);
  }

}
