
package org.elasticsearch.mapping.types.specialized.histogram;

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


public class HistogramProperty  implements XContentable<HistogramProperty> {
  
  static final ParseField IGNORE_MALFORMED = new ParseField("ignore_malformed");
  private Boolean _ignoreMalformed;
  public Boolean getIgnoreMalformed() { return this._ignoreMalformed; }
  public HistogramProperty setIgnoreMalformed(Boolean val) { this._ignoreMalformed = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_ignoreMalformed != null) {
      builder.field(IGNORE_MALFORMED.getPreferredName(), _ignoreMalformed);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public HistogramProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HistogramProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HistogramProperty, Void> PARSER =
    new ObjectParser<>(HistogramProperty.class.getName(), false, HistogramProperty::new);

  static {
    PARSER.declareBoolean(HistogramProperty::setIgnoreMalformed, IGNORE_MALFORMED);
  }

}
