
package org.elasticsearch.x_pack.roll_up.get_rollup_job;

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
import org.elasticsearch.x_pack.roll_up.rollup_configuration.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.common_options.time_unit.*;

public class RollupJobConfiguration  implements XContentable<RollupJobConfiguration> {
  
  static final ParseField CRON = new ParseField("cron");
  private String _cron;
  public String getCron() { return this._cron; }
  public RollupJobConfiguration setCron(String val) { this._cron = val; return this; }


  static final ParseField GROUPS = new ParseField("groups");
  private RollupGroupings _groups;
  public RollupGroupings getGroups() { return this._groups; }
  public RollupJobConfiguration setGroups(RollupGroupings val) { this._groups = val; return this; }


  static final ParseField ID = new ParseField("id");
  private String _id;
  public String getId() { return this._id; }
  public RollupJobConfiguration setId(String val) { this._id = val; return this; }


  static final ParseField INDEX_PATTERN = new ParseField("index_pattern");
  private String _indexPattern;
  public String getIndexPattern() { return this._indexPattern; }
  public RollupJobConfiguration setIndexPattern(String val) { this._indexPattern = val; return this; }


  static final ParseField METRICS = new ParseField("metrics");
  private List<RollupFieldMetric> _metrics;
  public List<RollupFieldMetric> getMetrics() { return this._metrics; }
  public RollupJobConfiguration setMetrics(List<RollupFieldMetric> val) { this._metrics = val; return this; }


  static final ParseField PAGE_SIZE = new ParseField("page_size");
  private Long _pageSize;
  public Long getPageSize() { return this._pageSize; }
  public RollupJobConfiguration setPageSize(Long val) { this._pageSize = val; return this; }


  static final ParseField ROLLUP_INDEX = new ParseField("rollup_index");
  private IndexName _rollupIndex;
  public IndexName getRollupIndex() { return this._rollupIndex; }
  public RollupJobConfiguration setRollupIndex(IndexName val) { this._rollupIndex = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public RollupJobConfiguration setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cron != null) {
      builder.field(CRON.getPreferredName(), _cron);
    }
    if (_groups != null) {
      builder.field(GROUPS.getPreferredName());
      _groups.toXContent(builder, params);
    }
    if (_id != null) {
      builder.field(ID.getPreferredName(), _id);
    }
    if (_indexPattern != null) {
      builder.field(INDEX_PATTERN.getPreferredName(), _indexPattern);
    }
    if (_metrics != null) {
      builder.array(METRICS.getPreferredName(), _metrics);
    }
    if (_pageSize != null) {
      builder.field(PAGE_SIZE.getPreferredName(), _pageSize);
    }
    if (_rollupIndex != null) {
      builder.field(ROLLUP_INDEX.getPreferredName());
      _rollupIndex.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupJobConfiguration fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupJobConfiguration.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupJobConfiguration, Void> PARSER =
    new ObjectParser<>(RollupJobConfiguration.class.getName(), false, RollupJobConfiguration::new);

  static {
    PARSER.declareString(RollupJobConfiguration::setCron, CRON);
    PARSER.declareObject(RollupJobConfiguration::setGroups, (p, t) -> RollupGroupings.PARSER.apply(p, t), GROUPS);
    PARSER.declareString(RollupJobConfiguration::setId, ID);
    PARSER.declareString(RollupJobConfiguration::setIndexPattern, INDEX_PATTERN);
    PARSER.declareObjectArray(RollupJobConfiguration::setMetrics, (p, t) -> RollupFieldMetric.PARSER.apply(p, t), METRICS);
    PARSER.declareLong(RollupJobConfiguration::setPageSize, PAGE_SIZE);
    PARSER.declareObject(RollupJobConfiguration::setRollupIndex, (p, t) -> IndexName.createFrom(p), ROLLUP_INDEX);
    PARSER.declareObject(RollupJobConfiguration::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
