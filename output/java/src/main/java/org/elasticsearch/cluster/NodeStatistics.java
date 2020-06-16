
package org.elasticsearch.cluster;

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

public class NodeStatistics  implements XContentable<NodeStatistics> {
  
  static final ParseField FAILED = new ParseField("failed");
  private Integer _failed;
  public Integer getFailed() { return this._failed; }
  public NodeStatistics setFailed(Integer val) { this._failed = val; return this; }


  static final ParseField SUCCESSFUL = new ParseField("successful");
  private Integer _successful;
  public Integer getSuccessful() { return this._successful; }
  public NodeStatistics setSuccessful(Integer val) { this._successful = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private Integer _total;
  public Integer getTotal() { return this._total; }
  public NodeStatistics setTotal(Integer val) { this._total = val; return this; }


  static final ParseField FAILURES = new ParseField("failures");
  private List<ErrorCause> _failures;
  public List<ErrorCause> getFailures() { return this._failures; }
  public NodeStatistics setFailures(List<ErrorCause> val) { this._failures = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_failed != null) {
      builder.field(FAILED.getPreferredName(), _failed);
    }
    if (_successful != null) {
      builder.field(SUCCESSFUL.getPreferredName(), _successful);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_failures != null) {
      builder.array(FAILURES.getPreferredName(), _failures);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeStatistics fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeStatistics.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeStatistics, Void> PARSER =
    new ObjectParser<>(NodeStatistics.class.getName(), false, NodeStatistics::new);

  static {
    PARSER.declareInt(NodeStatistics::setFailed, FAILED);
    PARSER.declareInt(NodeStatistics::setSuccessful, SUCCESSFUL);
    PARSER.declareInt(NodeStatistics::setTotal, TOTAL);
    PARSER.declareObjectArray(NodeStatistics::setFailures, (p, t) -> ErrorCause.PARSER.apply(p, t), FAILURES);
  }

}
