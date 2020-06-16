
package org.elasticsearch.cluster.nodes_usage;

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

public class NodeUsageInformation  implements XContentable<NodeUsageInformation> {
  
  static final ParseField REST_ACTIONS = new ParseField("rest_actions");
  private NamedContainer<String, Integer> _restActions;
  public NamedContainer<String, Integer> getRestActions() { return this._restActions; }
  public NodeUsageInformation setRestActions(NamedContainer<String, Integer> val) { this._restActions = val; return this; }


  static final ParseField SINCE = new ParseField("since");
  private Date _since;
  public Date getSince() { return this._since; }
  public NodeUsageInformation setSince(Date val) { this._since = val; return this; }


  static final ParseField TIMESTAMP = new ParseField("timestamp");
  private Date _timestamp;
  public Date getTimestamp() { return this._timestamp; }
  public NodeUsageInformation setTimestamp(Date val) { this._timestamp = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_restActions != null) {
      builder.field(REST_ACTIONS.getPreferredName());
      _restActions.toXContent(builder, params);
    }
    if (_since != null) {
      builder.field(SINCE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_since.toInstant()));
    }
    if (_timestamp != null) {
      builder.field(TIMESTAMP.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_timestamp.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeUsageInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeUsageInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeUsageInformation, Void> PARSER =
    new ObjectParser<>(NodeUsageInformation.class.getName(), false, NodeUsageInformation::new);

  static {
    PARSER.declareObject(NodeUsageInformation::setRestActions, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.intValue()), REST_ACTIONS);
    PARSER.declareObject(NodeUsageInformation::setSince, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), SINCE);
    PARSER.declareObject(NodeUsageInformation::setTimestamp, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), TIMESTAMP);
  }

}
