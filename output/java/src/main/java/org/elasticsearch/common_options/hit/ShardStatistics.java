
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
import org.elasticsearch.common.*;

public class ShardStatistics  implements XContentable<ShardStatistics> {
  
  static final ParseField FAILED = new ParseField("failed");
  private int _failed;
  private boolean _failed$isSet;
  public int getFailed() { return this._failed; }
  public ShardStatistics setFailed(int val) {
    this._failed = val;
    _failed$isSet = true;
    return this;
  }

  static final ParseField FAILURES = new ParseField("failures");
  private List<ShardFailure> _failures;
  public List<ShardFailure> getFailures() { return this._failures; }
  public ShardStatistics setFailures(List<ShardFailure> val) { this._failures = val; return this; }

  static final ParseField SUCCESSFUL = new ParseField("successful");
  private int _successful;
  private boolean _successful$isSet;
  public int getSuccessful() { return this._successful; }
  public ShardStatistics setSuccessful(int val) {
    this._successful = val;
    _successful$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private int _total;
  private boolean _total$isSet;
  public int getTotal() { return this._total; }
  public ShardStatistics setTotal(int val) {
    this._total = val;
    _total$isSet = true;
    return this;
  }

  static final ParseField SKIPPED = new ParseField("skipped");
  private int _skipped;
  private boolean _skipped$isSet;
  public int getSkipped() { return this._skipped; }
  public ShardStatistics setSkipped(int val) {
    this._skipped = val;
    _skipped$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_failed$isSet) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_successful$isSet) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_total$isSet) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_skipped$isSet) {
      builder.field(SKIPPED.getPreferredName(), _skipped);
    }
  }

  @Override
  public ShardStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ShardStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ShardStatistics, Void> PARSER =
    new ObjectParser<>(ShardStatistics.class.getName(), false, ShardStatistics::new);

  static {
    PARSER.declareInt(ShardStatistics::setFailed, FAILED);
    PARSER.declareObjectArray(ShardStatistics::setFailures, (p, t) -> ShardFailure.PARSER.apply(p, t), FAILURES);
    PARSER.declareInt(ShardStatistics::setSuccessful, SUCCESSFUL);
    PARSER.declareInt(ShardStatistics::setTotal, TOTAL);
    PARSER.declareInt(ShardStatistics::setSkipped, SKIPPED);
  }

}
