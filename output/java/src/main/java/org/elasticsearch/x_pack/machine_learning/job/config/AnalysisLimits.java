
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
import org.elasticsearch.internal.*;

public class AnalysisLimits  implements XContentable<AnalysisLimits> {
  
  static final ParseField CATEGORIZATION_EXAMPLES_LIMIT = new ParseField("categorization_examples_limit");
  private Long _categorizationExamplesLimit;
  public Long getCategorizationExamplesLimit() { return this._categorizationExamplesLimit; }
  public AnalysisLimits setCategorizationExamplesLimit(Long val) { this._categorizationExamplesLimit = val; return this; }


  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model_memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public AnalysisLimits setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_categorizationExamplesLimit != null) {
      builder.field(CATEGORIZATION_EXAMPLES_LIMIT.getPreferredName(), _categorizationExamplesLimit);
    }
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public AnalysisLimits fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AnalysisLimits.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AnalysisLimits, Void> PARSER =
    new ObjectParser<>(AnalysisLimits.class.getName(), false, AnalysisLimits::new);

  static {
    PARSER.declareLong(AnalysisLimits::setCategorizationExamplesLimit, CATEGORIZATION_EXAMPLES_LIMIT);
    PARSER.declareString(AnalysisLimits::setModelMemoryLimit, MODEL_MEMORY_LIMIT);
  }

}
