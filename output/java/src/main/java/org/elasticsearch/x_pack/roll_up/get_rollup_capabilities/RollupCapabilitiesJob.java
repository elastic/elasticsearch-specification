
package org.elasticsearch.x_pack.roll_up.get_rollup_capabilities;

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
import org.elasticsearch.common_abstractions.infer.field.*;

public class RollupCapabilitiesJob  implements XContentable<RollupCapabilitiesJob> {
  
  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<Field, NamedContainer<String, Object>> _fields;
  public NamedContainer<Field, NamedContainer<String, Object>> getFields() { return this._fields; }
  public RollupCapabilitiesJob setFields(NamedContainer<Field, NamedContainer<String, Object>> val) { this._fields = val; return this; }


  static final ParseField INDEX_PATTERN = new ParseField("index_pattern");
  private String _indexPattern;
  public String getIndexPattern() { return this._indexPattern; }
  public RollupCapabilitiesJob setIndexPattern(String val) { this._indexPattern = val; return this; }


  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public RollupCapabilitiesJob setJobId(String val) { this._jobId = val; return this; }


  static final ParseField ROLLUP_INDEX = new ParseField("rollup_index");
  private String _rollupIndex;
  public String getRollupIndex() { return this._rollupIndex; }
  public RollupCapabilitiesJob setRollupIndex(String val) { this._rollupIndex = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_indexPattern != null) {
      builder.field(INDEX_PATTERN.getPreferredName(), _indexPattern);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_rollupIndex != null) {
      builder.field(ROLLUP_INDEX.getPreferredName(), _rollupIndex);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupCapabilitiesJob fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupCapabilitiesJob.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupCapabilitiesJob, Void> PARSER =
    new ObjectParser<>(RollupCapabilitiesJob.class.getName(), false, RollupCapabilitiesJob::new);

  static {
    PARSER.declareObject(RollupCapabilitiesJob::setFields, (p, t) -> new NamedContainer<>(n -> () -> new Field(n),null /* TODO NamedContainer<String, Object> */), FIELDS);
    PARSER.declareString(RollupCapabilitiesJob::setIndexPattern, INDEX_PATTERN);
    PARSER.declareString(RollupCapabilitiesJob::setJobId, JOB_ID);
    PARSER.declareString(RollupCapabilitiesJob::setRollupIndex, ROLLUP_INDEX);
  }

}
