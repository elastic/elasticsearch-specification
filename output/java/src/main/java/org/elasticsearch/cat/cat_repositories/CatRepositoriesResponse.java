
package org.elasticsearch.cat.cat_repositories;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.cat.cat_repositories.*;
import org.elasticsearch.cat.*;
import org.elasticsearch.common_abstractions.response.*;

public class CatRepositoriesResponse extends ResponseBase<CatRepositoriesResponse> implements XContentable<CatRepositoriesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatRepositoriesRecord> _records;
  public List<CatRepositoriesRecord> getRecords() { return this._records; }
  public CatRepositoriesResponse setRecords(List<CatRepositoriesRecord> val) { this._records = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
  }

  @Override
  public CatRepositoriesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatRepositoriesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatRepositoriesResponse, Void> PARSER =
    new ObjectParser<>(CatRepositoriesResponse.class.getName(), false, CatRepositoriesResponse::new);

  static {
    PARSER.declareObjectArray(CatRepositoriesResponse::setRecords, (p, t) -> CatRepositoriesRecord.PARSER.apply(p, t), RECORDS);
  }

}
