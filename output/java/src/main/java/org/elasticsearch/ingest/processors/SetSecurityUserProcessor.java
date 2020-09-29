
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

public class SetSecurityUserProcessor extends ProcessorBase implements XContentable<SetSecurityUserProcessor> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public SetSecurityUserProcessor setField(String val) { this._field = val; return this; }

  static final ParseField PROPERTIES = new ParseField("properties");
  private List<String> _properties;
  public List<String> getProperties() { return this._properties; }
  public SetSecurityUserProcessor setProperties(List<String> val) { this._properties = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_properties != null) {
      builder.array(PROPERTIES.getPreferredName(), _properties);
    }
  }

  @Override
  public SetSecurityUserProcessor fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SetSecurityUserProcessor.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SetSecurityUserProcessor, Void> PARSER =
    new ObjectParser<>(SetSecurityUserProcessor.class.getName(), false, SetSecurityUserProcessor::new);

  static {
    PARSER.declareString(SetSecurityUserProcessor::setField, FIELD);
    PARSER.declareStringArray(SetSecurityUserProcessor::setProperties, PROPERTIES);
  }

}
