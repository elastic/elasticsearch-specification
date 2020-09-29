
package org.elasticsearch.aggregations.metric.percentile_ranks;

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
import org.elasticsearch.aggregations.metric.percentiles.*;

public class PercentileRanksAggregation  implements XContentable<PercentileRanksAggregation> {
  
  static final ParseField KEYED = new ParseField("keyed");
  private Boolean _keyed;
  public Boolean getKeyed() { return this._keyed; }
  public PercentileRanksAggregation setKeyed(Boolean val) { this._keyed = val; return this; }

  static final ParseField VALUES = new ParseField("values");
  private List<Double> _values;
  public List<Double> getValues() { return this._values; }
  public PercentileRanksAggregation setValues(List<Double> val) { this._values = val; return this; }

  static final ParseField FIELD = new ParseField("field");
  private String _field;
  public String getField() { return this._field; }
  public PercentileRanksAggregation setField(String val) { this._field = val; return this; }

  static final ParseField HDR = new ParseField("hdr");
  private HdrMethod _hdr;
  public HdrMethod getHdr() { return this._hdr; }
  public PercentileRanksAggregation setHdr(HdrMethod val) { this._hdr = val; return this; }

  static final ParseField TDIGEST = new ParseField("tdigest");
  private TDigest _tdigest;
  public TDigest getTdigest() { return this._tdigest; }
  public PercentileRanksAggregation setTdigest(TDigest val) { this._tdigest = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_keyed != null) {
      builder.field(KEYED.getPreferredName(), _keyed);
    }
    if (_values != null) {
      builder.array(VALUES.getPreferredName(), _values);
    }
    if (_field != null) {
      builder.field(FIELD.getPreferredName(), _field);
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
  public PercentileRanksAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PercentileRanksAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PercentileRanksAggregation, Void> PARSER =
    new ObjectParser<>(PercentileRanksAggregation.class.getName(), false, PercentileRanksAggregation::new);

  static {
    PARSER.declareBoolean(PercentileRanksAggregation::setKeyed, KEYED);
    PARSER.declareDoubleArray(PercentileRanksAggregation::setValues, VALUES);
    PARSER.declareString(PercentileRanksAggregation::setField, FIELD);
    PARSER.declareObject(PercentileRanksAggregation::setHdr, (p, t) -> HdrMethod.PARSER.apply(p, t), HDR);
    PARSER.declareObject(PercentileRanksAggregation::setTdigest, (p, t) -> TDigest.PARSER.apply(p, t), TDIGEST);
  }

}
