
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
import org.elasticsearch.ingest.processors.plugins.user_agent.*;
import org.elasticsearch.ingest.*;

public class UserAgentProcessor extends ProcessorBase implements XContentable<UserAgentProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public UserAgentProcessor setField(String val) { this._field = val; return this; }

  static final ParseField IGNORE_MISSING = new ParseField("ignore_missing");
  private Boolean _ignoreMissing;
  public Boolean getIgnoreMissing() { return this._ignoreMissing; }
  public UserAgentProcessor setIgnoreMissing(Boolean val) { this._ignoreMissing = val; return this; }

  static final ParseField OPTIONS = new ParseField("options");
  private List<UserAgentProperty> _options;
  public List<UserAgentProperty> getOptions() { return this._options; }
  public UserAgentProcessor setOptions(List<UserAgentProperty> val) { this._options = val; return this; }

  static final ParseField REGEX_FILE = new ParseField("regex_file");
  private String _regexFile;
  public String getRegexFile() { return this._regexFile; }
  public UserAgentProcessor setRegexFile(String val) { this._regexFile = val; return this; }

  static final ParseField TARGET_FIELD = new ParseField("target_field");
  private String _targetField;
  public String getTargetField() { return this._targetField; }
  public UserAgentProcessor setTargetField(String val) { this._targetField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_ignoreMissing != null) {
      builder.field(IGNORE_MISSING.getPreferredName(), _ignoreMissing);
    }
    if (_options != null) {
      builder.array(OPTIONS.getPreferredName(), _options);
    }
    if (_regexFile != null) {
      builder.field(REGEX_FILE.getPreferredName(), _regexFile);
    }
    if (_targetField != null) {
      builder.field(TARGET_FIELD.getPreferredName(), _targetField);
    }
  }

  @Override
  public UserAgentProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return UserAgentProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<UserAgentProcessor, Void> PARSER =
    new ObjectParser<>(UserAgentProcessor.class.getName(), false, UserAgentProcessor::new);

  static {
    PARSER.declareString(UserAgentProcessor::setField, FIELD);
    PARSER.declareBoolean(UserAgentProcessor::setIgnoreMissing, IGNORE_MISSING);
    PARSER.declareFieldArray(UserAgentProcessor::setOptions, (p, t) -> UserAgentProperty.PARSER.apply(p), OPTIONS, ObjectParser.ValueType.STRING_ARRAY);
    PARSER.declareString(UserAgentProcessor::setRegexFile, REGEX_FILE);
    PARSER.declareString(UserAgentProcessor::setTargetField, TARGET_FIELD);
  }

}
