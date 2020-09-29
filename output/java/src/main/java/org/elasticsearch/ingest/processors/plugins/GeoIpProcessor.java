
package org.elasticsearch.ingest.processors.plugins;

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

public class GeoIpProcessor extends ProcessorBase implements XContentable<GeoIpProcessor> {
  
  static final ParseField DATABASE_FILE = new ParseField("database_file");
  private String _databaseFile;
  public String getDatabaseFile() { return this._databaseFile; }
  public GeoIpProcessor setDatabaseFile(String val) { this._databaseFile = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public GeoIpProcessor setField(String val) { this._field = val; return this; }

  static final ParseField FIRST_ONLY = new ParseField("first_only");
  private Boolean _firstOnly;
  public Boolean getFirstOnly() { return this._firstOnly; }
  public GeoIpProcessor setFirstOnly(Boolean val) { this._firstOnly = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public GeoIpProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField PROPERTIES = new ParseField("properties");
  private List<String> _properties;
  public List<String> getProperties() { return this._properties; }
  public GeoIpProcessor setProperties(List<String> val) { this._properties = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public GeoIpProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_databaseFile != null) {
      builder.field(DATABASE_FILE.getPreferredName(), _databaseFile);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_firstOnly != null) {
      builder.field(FIRST_ONLY.getPreferredName(), _firstOnly);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_properties != null) {
      builder.array(PROPERTIES.getPreferredName(), _properties);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public GeoIpProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GeoIpProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GeoIpProcessor, Void> PARSER =
    new ObjectParser<>(GeoIpProcessor.class.getName(), false, GeoIpProcessor::new);

  static {
    PARSER.declareString(GeoIpProcessor::setDatabaseFile, DATABASE_FILE);
    PARSER.declareString(GeoIpProcessor::setField, FIELD);
    PARSER.declareBoolean(GeoIpProcessor::setFirstOnly, FIRST_ONLY);
    PARSER.declareBoolean(GeoIpProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareStringArray(GeoIpProcessor::setProperties, PROPERTIES);
    PARSER.declareString(GeoIpProcessor::setTargetField, TARGET_FIELD);
  }

}
