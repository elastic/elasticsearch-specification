
package org.elasticsearch.cat.cat_indices;

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
import org.elasticsearch.cat.cat_indices.*;

public class CatIndicesResponse  implements XContentable<CatIndicesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatIndicesRecord> _records;
  public List<CatIndicesRecord> getRecords() { return this._records; }
  public CatIndicesResponse setRecords(List<CatIndicesRecord> val) { this._records = val; return this; }


  
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
  public CatIndicesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatIndicesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatIndicesResponse, Void> PARSER =
    new ObjectParser<>(CatIndicesResponse.class.getName(), false, CatIndicesResponse::new);

  static {
    PARSER.declareObjectArray(CatIndicesResponse::setRecords, (p, t) -> CatIndicesRecord.PARSER.apply(p, t), RECORDS);
  }

}
