
package org.elasticsearch.mapping.types.core;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.mapping.types.core.*;
import org.elasticsearch.mapping.types.*;

public class DateRangeProperty extends RangePropertyBase implements XContentable<DateRangeProperty> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public DateRangeProperty setFormat(String val) { this._format = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
  }

  @Override
  public DateRangeProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DateRangeProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DateRangeProperty, Void> PARSER =
    new ObjectParser<>(DateRangeProperty.class.getName(), false, DateRangeProperty::new);

  static {
    PARSER.declareString(DateRangeProperty::setFormat, FORMAT);
  }

}
