
package org.elasticsearch.mapping.meta_fields.field_names;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class FieldNamesField  implements XContentable<FieldNamesField> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public FieldNamesField setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
  }

  @Override
  public FieldNamesField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FieldNamesField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FieldNamesField, Void> PARSER =
    new ObjectParser<>(FieldNamesField.class.getName(), false, FieldNamesField::new);

  static {
    PARSER.declareBoolean(FieldNamesField::setEnabled, ENABLED);
  }

}
