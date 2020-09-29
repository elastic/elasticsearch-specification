
package org.elasticsearch.aggregations.metric;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class FormattableMetricAggregation  implements XContentable<FormattableMetricAggregation> {
  
  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public FormattableMetricAggregation setFormat(String val) { this._format = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
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
