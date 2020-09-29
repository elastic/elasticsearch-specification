
package org.elasticsearch.ingest.processors;

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
import org.elasticsearch.ingest.*;

public class GrokProcessor extends ProcessorBase implements XContentable<GrokProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GrokProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public GrokProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PATTERN_DEFINITIONS = new ParseField("pattern_definitions");
  private NamedContainer<String, String> _patternDefinitions;
  public NamedContainer<String, String> getPatternDefinitions() { return this._patternDefinitions; }
  public GrokProcessor setPatternDefinitions(NamedContainer<String, String> val) { this._patternDefinitions = val; return this; }

  static final ParseField PATTERNS = new ParseField("patterns");
  private List<String> _patterns;
  public List<String> getPatterns() { return this._patterns; }
  public GrokProcessor setPatterns(List<String> val) { this._patterns = val; return this; }

  static final ParseField TRACE_MATCH = new ParseField("trace_match");
  private Boolean _traceMatch;
  public Boolean getTraceMatch() { return this._traceMatch; }
  public GrokProcessor setTraceMatch(Boolean val) { this._traceMatch = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_patternDefinitions != null) {
      builder.field(PATTERN_DEFINITIONS.getPreferredName());
      _patternDefinitions.toXContent(builder, params);
    }
    if (_patterns != null) {
      builder.array(PATTERNS.getPreferredName(), _patterns);
    }
    if (_traceMatch != null) {
      builder.field(TRACE_MATCH.getPreferredName(), _traceMatch);
    }
  }

  @Override
  public GrokProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GrokProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GrokProcessor, Void> PARSER =
    new ObjectParser<>(GrokProcessor.class.getName(), false, GrokProcessor::new);

  static {
    PARSER.declareString(GrokProcessor::setField, FIELD);
    PARSER.declareBoolean(GrokProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareObject(GrokProcessor::setPatternDefinitions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), PATTERN_DEFINITIONS);
    PARSER.declareStringArray(GrokProcessor::setPatterns, PATTERNS);
    PARSER.declareBoolean(GrokProcessor::setTraceMatch, TRACE_MATCH);
  }

}
