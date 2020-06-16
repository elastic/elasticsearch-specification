
package org.elasticsearch.x_pack.roll_up.get_rollup_index_capabilities;

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
import org.elasticsearch.x_pack.roll_up.get_rollup_index_capabilities.*;

public class RollupIndexCapabilities  implements XContentable<RollupIndexCapabilities> {
  
  static final ParseField ROLLUP_JOBS = new ParseField("rollup_jobs");
  private List<RollupIndexCapabilitiesJob> _rollupJobs;
  public List<RollupIndexCapabilitiesJob> getRollupJobs() { return this._rollupJobs; }
  public RollupIndexCapabilities setRollupJobs(List<RollupIndexCapabilitiesJob> val) { this._rollupJobs = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_rollupJobs != null) {
      builder.array(ROLLUP_JOBS.getPreferredName(), _rollupJobs);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RollupIndexCapabilities fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupIndexCapabilities.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupIndexCapabilities, Void> PARSER =
    new ObjectParser<>(RollupIndexCapabilities.class.getName(), false, RollupIndexCapabilities::new);

  static {
    PARSER.declareObjectArray(RollupIndexCapabilities::setRollupJobs, (p, t) -> RollupIndexCapabilitiesJob.PARSER.apply(p, t), ROLLUP_JOBS);
  }

}
