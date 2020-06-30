
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
import org.elasticsearch.search.validate.*;
import org.elasticsearch.common_options.hit.*;

public class ValidateQueryResponse  implements XContentable<ValidateQueryResponse> {
  
  static final ParseField EXPLANATIONS = new ParseField("explanations");
  private List<ValidationExplanation> _explanations;
  public List<ValidationExplanation> getExplanations() { return this._explanations; }
  public ValidateQueryResponse setExplanations(List<ValidationExplanation> val) { this._explanations = val; return this; }


  static final ParseField SHARDS = new ParseField("_shards");
  private ShardStatistics _shards;
  public ShardStatistics getShards() { return this._shards; }
  public ValidateQueryResponse setShards(ShardStatistics val) { this._shards = val; return this; }


  static final ParseField VALID = new ParseField("valid");
  private Boolean _valid;
  public Boolean getValid() { return this._valid; }
  public ValidateQueryResponse setValid(Boolean val) { this._valid = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_explanations != null) {
      builder.array(EXPLANATIONS.getPreferredName(), _explanations);
    }
    if (_shards != null) {
      builder.field(SHARDS.getPreferredName());
      _shards.toXContent(builder, params);
    }
    if (_valid != null) {
      builder.field(VALID.getPreferredName(), _valid);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ValidateQueryResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ValidateQueryResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ValidateQueryResponse, Void> PARSER =
    new ObjectParser<>(ValidateQueryResponse.class.getName(), false, ValidateQueryResponse::new);

  static {
    PARSER.declareObjectArray(ValidateQueryResponse::setExplanations, (p, t) -> ValidationExplanation.PARSER.apply(p, t), EXPLANATIONS);
    PARSER.declareObject(ValidateQueryResponse::setShards, (p, t) -> ShardStatistics.PARSER.apply(p, t), SHARDS);
    PARSER.declareBoolean(ValidateQueryResponse::setValid, VALID);
  }

}
