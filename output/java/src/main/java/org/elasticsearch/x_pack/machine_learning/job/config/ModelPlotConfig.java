
package org.elasticsearch.x_pack.machine_learning.job.config;

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

public class ModelPlotConfig  implements XContentable<ModelPlotConfig> {
  
  static final ParseField TERMS = new ParseField("terms");
  private List<Field> _terms;
  public List<Field> getTerms() { return this._terms; }
  public ModelPlotConfig setTerms(List<Field> val) { this._terms = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_terms != null) {
      builder.array(TERMS.getPreferredName(), _terms);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ModelPlotConfig fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ModelPlotConfig.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ModelPlotConfig, Void> PARSER =
    new ObjectParser<>(ModelPlotConfig.class.getName(), false, ModelPlotConfig::new);

  static {
    PARSER.declareObjectArray(ModelPlotConfig::setTerms, (p, t) -> Field.createFrom(p), TERMS);
  }

}
