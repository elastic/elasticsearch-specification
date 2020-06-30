
package org.elasticsearch.modules.indices.circuit_breaker;

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
import org.elasticsearch.internal.*;

public class CircuitBreakerSettings  implements XContentable<CircuitBreakerSettings> {
  
  static final ParseField FIELDDATA_LIMIT = new ParseField("fielddata_limit");
  private String _fielddataLimit;
  public String getFielddataLimit() { return this._fielddataLimit; }
  public CircuitBreakerSettings setFielddataLimit(String val) { this._fielddataLimit = val; return this; }


  static final ParseField FIELDDATA_OVERHEAD = new ParseField("fielddata_overhead");
  private Float _fielddataOverhead;
  public Float getFielddataOverhead() { return this._fielddataOverhead; }
  public CircuitBreakerSettings setFielddataOverhead(Float val) { this._fielddataOverhead = val; return this; }


  static final ParseField REQUEST_LIMIT = new ParseField("request_limit");
  private String _requestLimit;
  public String getRequestLimit() { return this._requestLimit; }
  public CircuitBreakerSettings setRequestLimit(String val) { this._requestLimit = val; return this; }


  static final ParseField REQUEST_OVERHEAD = new ParseField("request_overhead");
  private Float _requestOverhead;
  public Float getRequestOverhead() { return this._requestOverhead; }
  public CircuitBreakerSettings setRequestOverhead(Float val) { this._requestOverhead = val; return this; }


  static final ParseField TOTAL_LIMIT = new ParseField("total_limit");
  private String _totalLimit;
  public String getTotalLimit() { return this._totalLimit; }
  public CircuitBreakerSettings setTotalLimit(String val) { this._totalLimit = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fielddataLimit != null) {
      builder.field(FIELDDATA_LIMIT.getPreferredName(), _fielddataLimit);
    }
    if (_fielddataOverhead != null) {
      builder.field(FIELDDATA_OVERHEAD.getPreferredName(), _fielddataOverhead);
    }
    if (_requestLimit != null) {
      builder.field(REQUEST_LIMIT.getPreferredName(), _requestLimit);
    }
    if (_requestOverhead != null) {
      builder.field(REQUEST_OVERHEAD.getPreferredName(), _requestOverhead);
    }
    if (_totalLimit != null) {
      builder.field(TOTAL_LIMIT.getPreferredName(), _totalLimit);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CircuitBreakerSettings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CircuitBreakerSettings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CircuitBreakerSettings, Void> PARSER =
    new ObjectParser<>(CircuitBreakerSettings.class.getName(), false, CircuitBreakerSettings::new);

  static {
    PARSER.declareString(CircuitBreakerSettings::setFielddataLimit, FIELDDATA_LIMIT);
    PARSER.declareFloat(CircuitBreakerSettings::setFielddataOverhead, FIELDDATA_OVERHEAD);
    PARSER.declareString(CircuitBreakerSettings::setRequestLimit, REQUEST_LIMIT);
    PARSER.declareFloat(CircuitBreakerSettings::setRequestOverhead, REQUEST_OVERHEAD);
    PARSER.declareString(CircuitBreakerSettings::setTotalLimit, TOTAL_LIMIT);
  }

}
