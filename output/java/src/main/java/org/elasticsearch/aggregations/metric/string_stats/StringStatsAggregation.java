
package org.elasticsearch.aggregations.metric.string_stats;

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
import org.elasticsearch.common_options.scripting.*;

public class StringStatsAggregation  implements XContentable<StringStatsAggregation> {
  
  static final ParseField FIELD = new ParseField("field");
  private Field _field;
  public Field getField() { return this._field; }
  public StringStatsAggregation setField(Field val) { this._field = val; return this; }


  static final ParseField MISSING = new ParseField("missing");
  private Object _missing;
  public Object getMissing() { return this._missing; }
  public StringStatsAggregation setMissing(Object val) { this._missing = val; return this; }


  static final ParseField SCRIPT = new ParseField("script");
  private Script _script;
  public Script getScript() { return this._script; }
  public StringStatsAggregation setScript(Script val) { this._script = val; return this; }


  static final ParseField SHOW_DISTRIBUTION = new ParseField("show_distribution");
  private Boolean _showDistribution;
  public Boolean getShowDistribution() { return this._showDistribution; }
  public StringStatsAggregation setShowDistribution(Boolean val) { this._showDistribution = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_field != null) {
      builder.field(FIELD.getPreferredName());
      _field.toXContent(builder, params);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName(), _missing);
    }
    if (_script != null) {
      builder.field(SCRIPT.getPreferredName());
      _script.toXContent(builder, params);
    }
    if (_showDistribution != null) {
      builder.field(SHOW_DISTRIBUTION.getPreferredName(), _showDistribution);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public StringStatsAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StringStatsAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StringStatsAggregation, Void> PARSER =
    new ObjectParser<>(StringStatsAggregation.class.getName(), false, StringStatsAggregation::new);

  static {
    PARSER.declareObject(StringStatsAggregation::setField, (p, t) -> Field.createFrom(p), FIELD);
    PARSER.declareObject(StringStatsAggregation::setMissing, (p, t) -> p.objectText(), MISSING);
    PARSER.declareObject(StringStatsAggregation::setScript, (p, t) -> Script.PARSER.apply(p, t), SCRIPT);
    PARSER.declareBoolean(StringStatsAggregation::setShowDistribution, SHOW_DISTRIBUTION);
  }

}
