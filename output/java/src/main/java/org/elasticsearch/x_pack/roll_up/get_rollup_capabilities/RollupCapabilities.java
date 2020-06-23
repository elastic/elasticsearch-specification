
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
import org.elasticsearch.x_pack.roll_up.get_rollup_capabilities.*;

public class RollupCapabilities  implements XContentable<RollupCapabilities> {
  
  static final ParseField ROLLUP_JOBS = new ParseField("rollup_jobs");
  private List<RollupCapabilitiesJob> _rollupJobs;
  public List<RollupCapabilitiesJob> getRollupJobs() { return this._rollupJobs; }
  public RollupCapabilities setRollupJobs(List<RollupCapabilitiesJob> val) { this._rollupJobs = val; return this; }


  
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
  public RollupCapabilities fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RollupCapabilities.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RollupCapabilities, Void> PARSER =
    new ObjectParser<>(RollupCapabilities.class.getName(), false, RollupCapabilities::new);

  static {
    PARSER.declareObjectArray(RollupCapabilities::setRollupJobs, (p, t) -> RollupCapabilitiesJob.PARSER.apply(p, t), ROLLUP_JOBS);
  }

}
