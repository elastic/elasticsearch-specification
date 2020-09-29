
package org.elasticsearch.aggregations.metric.percentiles;

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
import org.elasticsearch.aggregations.*;
import org.elasticsearch.aggregations.metric.percentiles.*;

public class PercentilesAggregation  implements XContentable<PercentilesAggregation> {
  
  static final ParseField KEYED = new ParseField("keyed");
  private Boolean _keyed;
  public Boolean getKeyed() { return this._keyed; }
  public PercentilesAggregation setKeyed(Boolean val) { this._keyed = val; return this; }

  static final ParseField PERCENTS = new ParseField("percents");
  private List<Double> _percents;
  public List<Double> getPercents() { return this._percents; }
  public PercentilesAggregation setPercents(List<Double> val) { this._percents = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public PercentilesAggregation setField(String val) { this._field = val; return this; }

  static final ParseField MISSING = new ParseField("missing");
  private Missing _missing;
  public Missing getMissing() { return this._missing; }
  public PercentilesAggregation setMissing(Missing val) { this._missing = val; return this; }

  static final ParseField HDR = new ParseField("hdr");
  private HdrMethod _hdr;
  public HdrMethod getHdr() { return this._hdr; }
  public PercentilesAggregation setHdr(HdrMethod val) { this._hdr = val; return this; }

  static final ParseField TDIGEST = new ParseField("tdigest");
  private TDigest _tdigest;
  public TDigest getTdigest() { return this._tdigest; }
  public PercentilesAggregation setTdigest(TDigest val) { this._tdigest = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_keyed != null) {
      builder.field(KEYED.getPreferredName(), _keyed);
    }
    if (_percents != null) {
      builder.array(PERCENTS.getPreferredName(), _percents);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
    }
    if (_missing != null) {
      builder.field(MISSING.getPreferredName());
      _missing.toXContent(builder, params);
    }
    if (_hdr != null) {
      builder.field(HDR.getPreferredName());
      _hdr.toXContent(builder, params);
    }
    if (_tdigest != null) {
      builder.field(TDIGEST.getPreferredName());
      _tdigest.toXContent(builder, params);
    }
  }

  @Override
  public PercentilesAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercentilesAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercentilesAggregation, Void> PARSER =
    new ObjectParser<>(PercentilesAggregation.class.getName(), false, PercentilesAggregation::new);

  static {
    PARSER.declareBoolean(PercentilesAggregation::setKeyed, KEYED);
    PARSER.declareDoubleArray(PercentilesAggregation::setPercents, PERCENTS);
    PARSER.declareString(PercentilesAggregation::setField, FIELD);
    PARSER.declareObject(PercentilesAggregation::setMissing, (p, t) -> Missing.PARSER.apply(p, t), MISSING);
    PARSER.declareObject(PercentilesAggregation::setHdr, (p, t) -> HdrMethod.PARSER.apply(p, t), HDR);
    PARSER.declareObject(PercentilesAggregation::setTdigest, (p, t) -> TDigest.PARSER.apply(p, t), TDIGEST);
  }

}
