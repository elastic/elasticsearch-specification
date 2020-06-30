
package org.elasticsearch.cat.cat_repositories;

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
import org.elasticsearch.cat.cat_repositories.*;

public class CatRepositoriesResponse  implements XContentable<CatRepositoriesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatRepositoriesRecord> _records;
  public List<CatRepositoriesRecord> getRecords() { return this._records; }
  public CatRepositoriesResponse setRecords(List<CatRepositoriesRecord> val) { this._records = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_records != null) {
      builder.array(RECORDS.getPreferredName(), _records);
    }
    builder.endObject();
    return builder;
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
