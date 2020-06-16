
package org.elasticsearch.cat.cat_help;

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
import org.elasticsearch.cat.cat_help.*;

public class CatHelpResponse  implements XContentable<CatHelpResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatHelpRecord> _records;
  public List<CatHelpRecord> getRecords() { return this._records; }
  public CatHelpResponse setRecords(List<CatHelpRecord> val) { this._records = val; return this; }


  
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
  public CatHelpResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatHelpResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatHelpResponse, Void> PARSER =
    new ObjectParser<>(CatHelpResponse.class.getName(), false, CatHelpResponse::new);

  static {
    PARSER.declareObjectArray(CatHelpResponse::setRecords, (p, t) -> CatHelpRecord.PARSER.apply(p, t), RECORDS);
  }

}
