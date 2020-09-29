
package org.elasticsearch.common_options.hit;

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

public class ClusterStatistics  implements XContentable<ClusterStatistics> {
  
  static final ParseField SKIPPED = new ParseField("skipped");
  private int _skipped;
  private boolean _skipped$isSet;
  public int getSkipped() { return this._skipped; }
  public ClusterStatistics setSkipped(int val) {
    this._skipped = val;
    _skipped$isSet = true;
    return this;
  }

  static final ParseField SUCCESSFUL = new ParseField("successful");
  private int _successful;
  private boolean _successful$isSet;
  public int getSuccessful() { return this._successful; }
  public ClusterStatistics setSuccessful(int val) {
    this._successful = val;
    _successful$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private int _total;
  private boolean _total$isSet;
  public int getTotal() { return this._total; }
  public ClusterStatistics setTotal(int val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_skipped$isSet) {
      builder.field(SKIPPED.getPreferredName(), _skipped);
    }
    if (_successful$isSet) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
  }

  @Override
  public ClusterStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterStatistics, Void> PARSER =
    new ObjectParser<>(ClusterStatistics.class.getName(), false, ClusterStatistics::new);

  static {
    PARSER.declareInt(ClusterStatistics::setSkipped, SKIPPED);
    PARSER.declareInt(ClusterStatistics::setSuccessful, SUCCESSFUL);
    PARSER.declareInt(ClusterStatistics::setTotal, TOTAL);
  }

}
