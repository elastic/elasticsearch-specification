
package org.elasticsearch.cat.cat_transforms;

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
import org.elasticsearch.cat.cat_transforms.*;

public class CatTransformsResponse  implements XContentable<CatTransformsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTransformsRecord> _records;
  public List<CatTransformsRecord> getRecords() { return this._records; }
  public CatTransformsResponse setRecords(List<CatTransformsRecord> val) { this._records = val; return this; }


  
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
  public CatTransformsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTransformsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTransformsResponse, Void> PARSER =
    new ObjectParser<>(CatTransformsResponse.class.getName(), false, CatTransformsResponse::new);

  static {
    PARSER.declareObjectArray(CatTransformsResponse::setRecords, (p, t) -> CatTransformsRecord.PARSER.apply(p, t), RECORDS);
  }

}
