
package org.elasticsearch.cat.cat_aliases;

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
import org.elasticsearch.cat.cat_aliases.*;

public class CatAliasesResponse  implements XContentable<CatAliasesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatAliasesRecord> _records;
  public List<CatAliasesRecord> getRecords() { return this._records; }
  public CatAliasesResponse setRecords(List<CatAliasesRecord> val) { this._records = val; return this; }


  
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
  public CatAliasesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatAliasesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatAliasesResponse, Void> PARSER =
    new ObjectParser<>(CatAliasesResponse.class.getName(), false, CatAliasesResponse::new);

  static {
    PARSER.declareObjectArray(CatAliasesResponse::setRecords, (p, t) -> CatAliasesRecord.PARSER.apply(p, t), RECORDS);
  }

}
