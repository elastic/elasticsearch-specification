
package org.elasticsearch.search.validate;

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


public class ValidationExplanation  implements XContentable<ValidationExplanation> {
  
  static final ParseField ERROR = new ParseField("error");
  private String _error;
  public String getError() { return this._error; }
  public ValidationExplanation setError(String val) { this._error = val; return this; }


  static final ParseField EXPLANATION = new ParseField("explanation");
  private String _explanation;
  public String getExplanation() { return this._explanation; }
  public ValidationExplanation setExplanation(String val) { this._explanation = val; return this; }


  static final ParseField INDEX = new ParseField("index");
  private String _index;
  public String getIndex() { return this._index; }
  public ValidationExplanation setIndex(String val) { this._index = val; return this; }


  static final ParseField VALID = new ParseField("valid");
  private Boolean _valid;
  public Boolean getValid() { return this._valid; }
  public ValidationExplanation setValid(Boolean val) { this._valid = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_error != null) {
      builder.field(ERROR.getPreferredName(), _error);
    }
    if (_explanation != null) {
      builder.field(EXPLANATION.getPreferredName(), _explanation);
    }
    if (_index != null) {
      builder.field(INDEX.getPreferredName(), _index);
    }
    if (_valid != null) {
      builder.field(VALID.getPreferredName(), _valid);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ValidationExplanation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidationExplanation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidationExplanation, Void> PARSER =
    new ObjectParser<>(ValidationExplanation.class.getName(), false, ValidationExplanation::new);

  static {
    PARSER.declareString(ValidationExplanation::setError, ERROR);
    PARSER.declareString(ValidationExplanation::setExplanation, EXPLANATION);
    PARSER.declareString(ValidationExplanation::setIndex, INDEX);
    PARSER.declareBoolean(ValidationExplanation::setValid, VALID);
  }

}
