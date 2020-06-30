
package org.elasticsearch.mapping.meta_fields.size;

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


public class SizeField  implements XContentable<SizeField> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public SizeField setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SizeField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SizeField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SizeField, Void> PARSER =
    new ObjectParser<>(SizeField.class.getName(), false, SizeField::new);

  static {
    PARSER.declareBoolean(SizeField::setEnabled, ENABLED);
  }

}
