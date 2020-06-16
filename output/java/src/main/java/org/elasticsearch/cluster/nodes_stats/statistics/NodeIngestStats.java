
package org.elasticsearch.cluster.nodes_stats.statistics;

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
import org.elasticsearch.cluster.nodes_stats.statistics.*;

public class NodeIngestStats  implements XContentable<NodeIngestStats> {
  
  static final ParseField PIPELINES = new ParseField("pipelines");
  private NamedContainer<String, IngestStats> _pipelines;
  public NamedContainer<String, IngestStats> getPipelines() { return this._pipelines; }
  public NodeIngestStats setPipelines(NamedContainer<String, IngestStats> val) { this._pipelines = val; return this; }


  static final ParseField TOTAL = new ParseField("total");
  private IngestStats _total;
  public IngestStats getTotal() { return this._total; }
  public NodeIngestStats setTotal(IngestStats val) { this._total = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_pipelines != null) {
      builder.field(PIPELINES.getPreferredName());
      _pipelines.toXContent(builder, params);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName());
      _total.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NodeIngestStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeIngestStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeIngestStats, Void> PARSER =
    new ObjectParser<>(NodeIngestStats.class.getName(), false, NodeIngestStats::new);

  static {
    PARSER.declareObject(NodeIngestStats::setPipelines, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IngestStats.PARSER.apply(pp, null)), PIPELINES);
    PARSER.declareObject(NodeIngestStats::setTotal, (p, t) -> IngestStats.PARSER.apply(p, t), TOTAL);
  }

}
