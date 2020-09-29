
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
import org.elasticsearch.common_options.geo.*;
import org.elasticsearch.ingest.*;

public class EnrichProcessor extends ProcessorBase implements XContentable<EnrichProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public EnrichProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public EnrichProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField MAX_MATCHES = new ParseField("max_matches");
  private int _maxMatches;
  private boolean _maxMatches$isSet;
  public int getMaxMatches() { return this._maxMatches; }
  public EnrichProcessor setMaxMatches(int val) {
    this._maxMatches = val;
    _maxMatches$isSet = true;
    return this;
  }

  static final ParseField OVERRIDE = new ParseField("override");
  private Boolean _override;
  public Boolean getOverride() { return this._override; }
  public EnrichProcessor setOverride(Boolean val) { this._override = val; return this; }

  static final ParseField POLICY_NAME = new ParseField("policy_name");
  private String _policyName;
  public String getPolicyName() { return this._policyName; }
  public EnrichProcessor setPolicyName(String val) { this._policyName = val; return this; }

  static final ParseField SHAPE_RELATION = new ParseField("shape_relation");
  private GeoShapeRelation _shapeRelation;
  public GeoShapeRelation getShapeRelation() { return this._shapeRelation; }
  public EnrichProcessor setShapeRelation(GeoShapeRelation val) { this._shapeRelation = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public EnrichProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_maxMatches$isSet) {
      builder.field(MAX_MATCHES.getPreferredName(), _maxMatches);
    }
    if (_override != null) {
      builder.field(OVERRIDE.getPreferredName(), _override);
    }
    if (_policyName != null) {
      builder.field(POLICY_NAME.getPreferredName(), _policyName);
    }
    if (_shapeRelation != null) {
      builder.field(SHAPE_RELATION.getPreferredName());
      _shapeRelation.toXContent(builder, params);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public EnrichProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichProcessor, Void> PARSER =
    new ObjectParser<>(EnrichProcessor.class.getName(), false, EnrichProcessor::new);

  static {
    PARSER.declareString(EnrichProcessor::setField, FIELD);
    PARSER.declareBoolean(EnrichProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareInt(EnrichProcessor::setMaxMatches, MAX_MATCHES);
    PARSER.declareBoolean(EnrichProcessor::setOverride, OVERRIDE);
    PARSER.declareString(EnrichProcessor::setPolicyName, POLICY_NAME);
    PARSER.declareField(EnrichProcessor::setShapeRelation, (p, t) -> GeoShapeRelation.PARSER.apply(p), SHAPE_RELATION, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(EnrichProcessor::setTargetField, TARGET_FIELD);
  }

}
