
package org.elasticsearch.x_pack.machine_learning.job.results;

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

public class CategoryDefinition  implements XContentable<CategoryDefinition> {
  
  static final ParseField CATEGORY_ID = new ParseField("category_id");
  private long _categoryId;
  private boolean _categoryId$isSet;
  public long getCategoryId() { return this._categoryId; }
  public CategoryDefinition setCategoryId(long val) {
    this._categoryId = val;
    _categoryId$isSet = true;
    return this;
  }

  static final ParseField EXAMPLES = new ParseField("examples");
  private List<String> _examples;
  public List<String> getExamples() { return this._examples; }
  public CategoryDefinition setExamples(List<String> val) { this._examples = val; return this; }

  static final ParseField JOB_ID = new ParseField("job_id");
  private String _jobId;
  public String getJobId() { return this._jobId; }
  public CategoryDefinition setJobId(String val) { this._jobId = val; return this; }

  static final ParseField MAX_MATCHING_LENGTH = new ParseField("max_matching_length");
  private long _maxMatchingLength;
  private boolean _maxMatchingLength$isSet;
  public long getMaxMatchingLength() { return this._maxMatchingLength; }
  public CategoryDefinition setMaxMatchingLength(long val) {
    this._maxMatchingLength = val;
    _maxMatchingLength$isSet = true;
    return this;
  }

  static final ParseField REGEX = new ParseField("regex");
  private String _regex;
  public String getRegex() { return this._regex; }
  public CategoryDefinition setRegex(String val) { this._regex = val; return this; }

  static final ParseField TERMS = new ParseField("terms");
  private String _terms;
  public String getTerms() { return this._terms; }
  public CategoryDefinition setTerms(String val) { this._terms = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_categoryId$isSet) {
      builder.field(CATEGORY_ID.getPreferredName(), _categoryId);
    }
    if (_examples != null) {
      builder.array(EXAMPLES.getPreferredName(), _examples);
    }
    if (_jobId != null) {
      builder.field(JOB_ID.getPreferredName(), _jobId);
    }
    if (_maxMatchingLength$isSet) {
      builder.field(MAX_MATCHING_LENGTH.getPreferredName(), _maxMatchingLength);
    }
    if (_regex != null) {
      builder.field(REGEX.getPreferredName(), _regex);
    }
    if (_terms != null) {
      builder.field(TERMS.getPreferredName(), _terms);
    }
  }

  @Override
  public CategoryDefinition fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CategoryDefinition.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CategoryDefinition, Void> PARSER =
    new ObjectParser<>(CategoryDefinition.class.getName(), false, CategoryDefinition::new);

  static {
    PARSER.declareLong(CategoryDefinition::setCategoryId, CATEGORY_ID);
    PARSER.declareStringArray(CategoryDefinition::setExamples, EXAMPLES);
    PARSER.declareString(CategoryDefinition::setJobId, JOB_ID);
    PARSER.declareLong(CategoryDefinition::setMaxMatchingLength, MAX_MATCHING_LENGTH);
    PARSER.declareString(CategoryDefinition::setRegex, REGEX);
    PARSER.declareString(CategoryDefinition::setTerms, TERMS);
  }

}
