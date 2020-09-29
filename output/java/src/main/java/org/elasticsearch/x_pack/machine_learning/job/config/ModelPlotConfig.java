
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
import org.elasticsearch.internal.*;

public class ModelPlotConfig  implements XContentable<ModelPlotConfig> {
  
  static final ParseField TERMS = new ParseField("terms");
  private List<String> _terms;
  public List<String> getTerms() { return this._terms; }
  public ModelPlotConfig setTerms(List<String> val) { this._terms = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_terms != null) {
      builder.array(TERMS.getPreferredName(), _terms);
    }
  }

  @Override
  public ModelPlotConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ModelPlotConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ModelPlotConfig, Void> PARSER =
    new ObjectParser<>(ModelPlotConfig.class.getName(), false, ModelPlotConfig::new);

  static {
    PARSER.declareStringArray(ModelPlotConfig::setTerms, TERMS);
  }

}
