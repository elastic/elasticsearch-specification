
package org.elasticsearch.common_options.hit;

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
import org.elasticsearch.common.*;

public class ShardStatistics  implements XContentable<ShardStatistics> {
  
  static final ParseField FAILED = new ParseField("failed");
  private Integer _failed;
  public Integer getFailed() { return this._failed; }
  public ShardStatistics setFailed(Integer val) { this._failed = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<ShardFailure> _failures;
  public List<ShardFailure> getFailures() { return this._failures; }
  public ShardStatistics setFailures(List<ShardFailure> val) { this._failures = val; return this; }


  static final ParseField SUCCESSFUL = new ParseField("successful");
  private Integer _successful;
  public Integer getSuccessful() { return this._successful; }
  public ShardStatistics setSuccessful(Integer val) { this._successful = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Integer _total;
  public Integer getTotal() { return this._total; }
  public ShardStatistics setTotal(Integer val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_failed != null) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    if (_successful != null) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    builder.endObject();
    return builder;
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
  }

}
