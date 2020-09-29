
package org.elasticsearch.aggregations.metric.top_metrics;

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

public class TopMetricsValue  implements XContentable<TopMetricsValue> {
  
  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public TopMetricsValue setField(String val) { this._field = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
  }

  @Override
  public TopMetricsValue fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TopMetricsValue.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TopMetricsValue, Void> PARSER =
    new ObjectParser<>(TopMetricsValue.class.getName(), false, TopMetricsValue::new);

  static {
    PARSER.declareString(TopMetricsValue::setField, FIELD);
  }

}
