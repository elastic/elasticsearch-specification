
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


public class AnalysisMemoryLimit  implements XContentable<AnalysisMemoryLimit> {
  
  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model_memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public AnalysisMemoryLimit setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnalysisMemoryLimit fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalysisMemoryLimit.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalysisMemoryLimit, Void> PARSER =
    new ObjectParser<>(AnalysisMemoryLimit.class.getName(), false, AnalysisMemoryLimit::new);

  static {
    PARSER.declareString(AnalysisMemoryLimit::setModelMemoryLimit, MODEL_MEMORY_LIMIT);
  }

}
