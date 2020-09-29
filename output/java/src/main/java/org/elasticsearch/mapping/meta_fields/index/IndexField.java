
package org.elasticsearch.mapping.meta_fields.index;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class IndexField  implements XContentable<IndexField> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public IndexField setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
  }

  @Override
  public IndexField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexField, Void> PARSER =
    new ObjectParser<>(IndexField.class.getName(), false, IndexField::new);

  static {
    PARSER.declareBoolean(IndexField::setEnabled, ENABLED);
  }

}
