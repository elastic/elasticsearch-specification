
package org.elasticsearch.modules.indices.fielddata.string;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.modules.indices.fielddata.string.*;

public class StringFielddata  implements XContentable<StringFielddata> {
  
  static final ParseField FORMAT = new ParseField("format");
  private StringFielddataFormat _format;
  public StringFielddataFormat getFormat() { return this._format; }
  public StringFielddata setFormat(StringFielddataFormat val) { this._format = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_format != null) {
      builder.field(FORMAT.getPreferredName());
      _format.toXContent(builder, params);
    }
  }

  @Override
  public StringFielddata fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return StringFielddata.PARSER.apply(parser, null);
  }

  public static final ObjectParser<StringFielddata, Void> PARSER =
    new ObjectParser<>(StringFielddata.class.getName(), false, StringFielddata::new);

  static {
    PARSER.declareField(StringFielddata::setFormat, (p, t) -> StringFielddataFormat.PARSER.apply(p), FORMAT, ObjectParser.ValueType.STRING_OR_NULL);
  }

}
