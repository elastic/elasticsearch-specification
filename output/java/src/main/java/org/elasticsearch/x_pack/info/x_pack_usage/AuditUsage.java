
package org.elasticsearch.x_pack.info.x_pack_usage;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.info.x_pack_usage.*;

public class AuditUsage extends SecurityFeatureToggle implements XContentable<AuditUsage> {
  
  static final ParseField OUTPUTS = new ParseField("outputs");
  private List<String> _outputs;
  public List<String> getOutputs() { return this._outputs; }
  public AuditUsage setOutputs(List<String> val) { this._outputs = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_outputs != null) {
      builder.array(OUTPUTS.getPreferredName(), _outputs);
    }
  }

  @Override
  public AuditUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AuditUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AuditUsage, Void> PARSER =
    new ObjectParser<>(AuditUsage.class.getName(), false, AuditUsage::new);

  static {
    PARSER.declareStringArray(AuditUsage::setOutputs, OUTPUTS);
  }

}
