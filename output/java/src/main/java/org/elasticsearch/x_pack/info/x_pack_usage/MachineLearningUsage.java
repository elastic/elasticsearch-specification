
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class MachineLearningUsage  implements XContentable<MachineLearningUsage> {
  
  static final ParseField NODE_COUNT = new ParseField("node_count");
  private Integer _nodeCount;
  public Integer getNodeCount() { return this._nodeCount; }
  public MachineLearningUsage setNodeCount(Integer val) { this._nodeCount = val; return this; }


  static final ParseField DATAFEEDS = new ParseField("datafeeds");
  private NamedContainer<String, DataFeed> _datafeeds;
  public NamedContainer<String, DataFeed> getDatafeeds() { return this._datafeeds; }
  public MachineLearningUsage setDatafeeds(NamedContainer<String, DataFeed> val) { this._datafeeds = val; return this; }


  static final ParseField JOBS = new ParseField("jobs");
  private NamedContainer<String, Job> _jobs;
  public NamedContainer<String, Job> getJobs() { return this._jobs; }
  public MachineLearningUsage setJobs(NamedContainer<String, Job> val) { this._jobs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_nodeCount != null) {
      builder.field(NODE_COUNT.getPreferredName(), _nodeCount);
    }
    if (_datafeeds != null) {
      builder.field(DATAFEEDS.getPreferredName());
      _datafeeds.toXContent(builder, params);
    }
    if (_jobs != null) {
      builder.field(JOBS.getPreferredName());
      _jobs.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MachineLearningUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MachineLearningUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MachineLearningUsage, Void> PARSER =
    new ObjectParser<>(MachineLearningUsage.class.getName(), false, MachineLearningUsage::new);

  static {
    PARSER.declareInt(MachineLearningUsage::setNodeCount, NODE_COUNT);
    PARSER.declareObject(MachineLearningUsage::setDatafeeds, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> DataFeed.PARSER.apply(pp, null)), DATAFEEDS);
    PARSER.declareObject(MachineLearningUsage::setJobs, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> Job.PARSER.apply(pp, null)), JOBS);
  }

}
