
package org.elasticsearch.x_pack.sql.translate_sql;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.search.search.*;
import org.elasticsearch.common_abstractions.request.*;
import org.elasticsearch.common_abstractions.response.*;

public class TranslateSqlResponse extends ResponseBase<TranslateSqlResponse> implements XContentable<TranslateSqlResponse> {
  
  static final ParseField RESULT = new ParseField("result");
  private SearchRequest _result;
  public SearchRequest getResult() { return this._result; }
  public TranslateSqlResponse setResult(SearchRequest val) { this._result = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_result != null) {
      builder.field(RESULT.getPreferredName());
      _result.toXContent(builder, params);
    }
  }

  @Override
  public TranslateSqlResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TranslateSqlResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TranslateSqlResponse, Void> PARSER =
    new ObjectParser<>(TranslateSqlResponse.class.getName(), false, TranslateSqlResponse::new);

  static {
    PARSER.declareObject(TranslateSqlResponse::setResult, (p, t) -> SearchRequest.PARSER.apply(p, t), RESULT);
  }

}
