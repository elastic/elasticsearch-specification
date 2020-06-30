
package org.elasticsearch.x_pack.roll_up.create_rollup_job;

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

public class CreateRollupJobRequest  implements XContentable<CreateRollupJobRequest> {
  
  static final ParseField CRON = new ParseField("cron");
  private String _cron;
  public String getCron() { return this._cron; }
  public CreateRollupJobRequest setCron(String val) { this._cron = val; return this; }


  static final ParseField GROUPS = new ParseField("groups");
  private RollupGroupings _groups;
  public RollupGroupings getGroups() { return this._groups; }
  public CreateRollupJobRequest setGroups(RollupGroupings val) { this._groups = val; return this; }


  static final ParseField INDEX_PATTERN = new ParseField("index_pattern");
  private String _indexPattern;
  public String getIndexPattern() { return this._indexPattern; }
  public CreateRollupJobRequest setIndexPattern(String val) { this._indexPattern = val; return this; }


  static final ParseField METRICS = new ParseField("metrics");
  private List<RollupFieldMetric> _metrics;
  public List<RollupFieldMetric> getMetrics() { return this._metrics; }
  public CreateRollupJobRequest setMetrics(List<RollupFieldMetric> val) { this._metrics = val; return this; }


  static final ParseField PAGE_SIZE = new ParseField("page_size");
  private Long _pageSize;
  public Long getPageSize() { return this._pageSize; }
  public CreateRollupJobRequest setPageSize(Long val) { this._pageSize = val; return this; }


  static final ParseField ROLLUP_INDEX = new ParseField("rollup_index");
  private IndexName _rollupIndex;
  public IndexName getRollupIndex() { return this._rollupIndex; }
  public CreateRollupJobRequest setRollupIndex(IndexName val) { this._rollupIndex = val; return this; }


  
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
    builder.endObject();
    return builder;
  }

  @Override
  public CreateRollupJobRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CreateRollupJobRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CreateRollupJobRequest, Void> PARSER =
    new ObjectParser<>(CreateRollupJobRequest.class.getName(), false, CreateRollupJobRequest::new);

  static {
    PARSER.declareString(CreateRollupJobRequest::setCron, CRON);
    PARSER.declareObject(CreateRollupJobRequest::setGroups, (p, t) -> RollupGroupings.PARSER.apply(p, t), GROUPS);
    PARSER.declareString(CreateRollupJobRequest::setIndexPattern, INDEX_PATTERN);
    PARSER.declareObjectArray(CreateRollupJobRequest::setMetrics, (p, t) -> RollupFieldMetric.PARSER.apply(p, t), METRICS);
    PARSER.declareLong(CreateRollupJobRequest::setPageSize, PAGE_SIZE);
    PARSER.declareObject(CreateRollupJobRequest::setRollupIndex, (p, t) -> IndexName.createFrom(p), ROLLUP_INDEX);
  }

}
