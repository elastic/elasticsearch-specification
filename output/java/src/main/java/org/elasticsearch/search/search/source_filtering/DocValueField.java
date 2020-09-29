
package org.elasticsearch.search.search.source_filtering;

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

public class DocValueField  implements XContentable<DocValueField> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public DocValueField setField(String val) { this._field = val; return this; }

  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DocValueField setFormat(String val) { this._format = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
  }

  @Override
  public DocValueField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DocValueField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DocValueField, Void> PARSER =
    new ObjectParser<>(DocValueField.class.getName(), false, DocValueField::new);

  static {
    PARSER.declareString(DocValueField::setField, FIELD);
    PARSER.declareString(DocValueField::setFormat, FORMAT);
  }

}
