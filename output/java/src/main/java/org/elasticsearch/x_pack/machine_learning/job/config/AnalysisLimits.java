
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

public class AnalysisLimits  implements XContentable<AnalysisLimits> {
  
  static final ParseField CATEGORIZATION_EXAMPLES_LIMIT = new ParseField("categorization_examples_limit");
  private long _categorizationExamplesLimit;
  private boolean _categorizationExamplesLimit$isSet;
  public long getCategorizationExamplesLimit() { return this._categorizationExamplesLimit; }
  public AnalysisLimits setCategorizationExamplesLimit(long val) {
    this._categorizationExamplesLimit = val;
    _categorizationExamplesLimit$isSet = true;
    return this;
  }

  static final ParseField MODEL_MEMORY_LIMIT = new ParseField("model_memory_limit");
  private String _modelMemoryLimit;
  public String getModelMemoryLimit() { return this._modelMemoryLimit; }
  public AnalysisLimits setModelMemoryLimit(String val) { this._modelMemoryLimit = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_categorizationExamplesLimit$isSet) {
      builder.field(CATEGORIZATION_EXAMPLES_LIMIT.getPreferredName(), _categorizationExamplesLimit);
    }
    if (_modelMemoryLimit != null) {
      builder.field(MODEL_MEMORY_LIMIT.getPreferredName(), _modelMemoryLimit);
    }
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
