
package org.elasticsearch.x_pack.machine_learning.job.config;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class ModelPlotConfigEnabled  implements XContentable<ModelPlotConfigEnabled> {
  
  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public ModelPlotConfigEnabled setEnabled(Boolean val) { this._enabled = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
  }

  @Override
  public ModelPlotConfigEnabled fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ModelPlotConfigEnabled.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ModelPlotConfigEnabled, Void> PARSER =
    new ObjectParser<>(ModelPlotConfigEnabled.class.getName(), false, ModelPlotConfigEnabled::new);

  static {
    PARSER.declareBoolean(ModelPlotConfigEnabled::setEnabled, ENABLED);
  }

}
