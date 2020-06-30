
package org.elasticsearch.aggregations.metric;

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


public class FormattableMetricAggregation  implements XContentable<FormattableMetricAggregation> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public FormattableMetricAggregation setFormat(String val) { this._format = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public FormattableMetricAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return FormattableMetricAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<FormattableMetricAggregation, Void> PARSER =
    new ObjectParser<>(FormattableMetricAggregation.class.getName(), false, FormattableMetricAggregation::new);

  static {
    PARSER.declareString(FormattableMetricAggregation::setFormat, FORMAT);
  }

}
