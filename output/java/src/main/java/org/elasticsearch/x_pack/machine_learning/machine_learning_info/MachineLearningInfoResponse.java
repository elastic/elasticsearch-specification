
package org.elasticsearch.x_pack.machine_learning.machine_learning_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.machine_learning.machine_learning_info.*;
import org.elasticsearch.common_abstractions.response.*;

public class MachineLearningInfoResponse extends ResponseBase<MachineLearningInfoResponse> implements XContentable<MachineLearningInfoResponse> {
  
  static final ParseField DEFAULTS = new ParseField("defaults");
  private Defaults _defaults;
  public Defaults getDefaults() { return this._defaults; }
  public MachineLearningInfoResponse setDefaults(Defaults val) { this._defaults = val; return this; }

  static final ParseField LIMITS = new ParseField("limits");
  private Limits _limits;
  public Limits getLimits() { return this._limits; }
  public MachineLearningInfoResponse setLimits(Limits val) { this._limits = val; return this; }

  static final ParseField UPGRADE_MODE = new ParseField("upgrade_mode");
  private Boolean _upgradeMode;
  public Boolean getUpgradeMode() { return this._upgradeMode; }
  public MachineLearningInfoResponse setUpgradeMode(Boolean val) { this._upgradeMode = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_defaults != null) {
      builder.field(DEFAULTS.getPreferredName());
      _defaults.toXContent(builder, params);
    }
    if (_limits != null) {
      builder.field(LIMITS.getPreferredName());
      _limits.toXContent(builder, params);
    }
    if (_upgradeMode != null) {
      builder.field(UPGRADE_MODE.getPreferredName(), _upgradeMode);
    }
  }

  @Override
  public MachineLearningInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MachineLearningInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MachineLearningInfoResponse, Void> PARSER =
    new ObjectParser<>(MachineLearningInfoResponse.class.getName(), false, MachineLearningInfoResponse::new);

  static {
    PARSER.declareObject(MachineLearningInfoResponse::setDefaults, (p, t) -> Defaults.PARSER.apply(p, t), DEFAULTS);
    PARSER.declareObject(MachineLearningInfoResponse::setLimits, (p, t) -> Limits.PARSER.apply(p, t), LIMITS);
    PARSER.declareBoolean(MachineLearningInfoResponse::setUpgradeMode, UPGRADE_MODE);
  }

}
