
package org.elasticsearch.cat.cat_datafeeds;

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
import org.elasticsearch.cat.cat_datafeeds.*;

public class CatDatafeedsResponse  implements XContentable<CatDatafeedsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatDatafeedsRecord> _records;
  public List<CatDatafeedsRecord> getRecords() { return this._records; }
  public CatDatafeedsResponse setRecords(List<CatDatafeedsRecord> val) { this._records = val; return this; }


  
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
  public CatDatafeedsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatDatafeedsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatDatafeedsResponse, Void> PARSER =
    new ObjectParser<>(CatDatafeedsResponse.class.getName(), false, CatDatafeedsResponse::new);

  static {
    PARSER.declareObjectArray(CatDatafeedsResponse::setRecords, (p, t) -> CatDatafeedsRecord.PARSER.apply(p, t), RECORDS);
  }

}
