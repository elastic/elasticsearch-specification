
package org.elasticsearch.query_dsl;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.query.*;

public class MatchAllQuery extends QueryBase implements XContentable<MatchAllQuery> {
  
  static final ParseField NORM_FIELD = new ParseField("norm_field");
  private String _normField;
  public String getNormField() { return this._normField; }
  public MatchAllQuery setNormField(String val) { this._normField = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_normField != null) {
      builder.field(NORM_FIELD.getPreferredName(), _normField);
    }
  }

  @Override
  public MatchAllQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MatchAllQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MatchAllQuery, Void> PARSER =
    new ObjectParser<>(MatchAllQuery.class.getName(), false, MatchAllQuery::new);

  static {
    PARSER.declareString(MatchAllQuery::setNormField, NORM_FIELD);
  }

}
