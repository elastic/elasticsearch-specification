
package org.elasticsearch.x_pack.info.x_pack_usage;

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

public class JobStatistics  implements XContentable<JobStatistics> {
  
  static final ParseField AVG = new ParseField("avg");
  private double _avg;
  private boolean _avg$isSet;
  public double getAvg() { return this._avg; }
  public JobStatistics setAvg(double val) {
    this._avg = val;
    _avg$isSet = true;
    return this;
  }

  static final ParseField MAX = new ParseField("max");
  private double _max;
  private boolean _max$isSet;
  public double getMax() { return this._max; }
  public JobStatistics setMax(double val) {
    this._max = val;
    _max$isSet = true;
    return this;
  }

  static final ParseField MIN = new ParseField("min");
  private double _min;
  private boolean _min$isSet;
  public double getMin() { return this._min; }
  public JobStatistics setMin(double val) {
    this._min = val;
    _min$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private double _total;
  private boolean _total$isSet;
  public double getTotal() { return this._total; }
  public JobStatistics setTotal(double val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_avg$isSet) {
      builder.field(AVG.getPreferredName(), _avg);
    }
    if (_max$isSet) {
      builder.field(MAX.getPreferredName(), _max);
    }
    if (_min$isSet) {
      builder.field(MIN.getPreferredName(), _min);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public JobStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return JobStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<JobStatistics, Void> PARSER =
    new ObjectParser<>(JobStatistics.class.getName(), false, JobStatistics::new);

  static {
    PARSER.declareDouble(JobStatistics::setAvg, AVG);
    PARSER.declareDouble(JobStatistics::setMax, MAX);
    PARSER.declareDouble(JobStatistics::setMin, MIN);
    PARSER.declareDouble(JobStatistics::setTotal, TOTAL);
  }

}
