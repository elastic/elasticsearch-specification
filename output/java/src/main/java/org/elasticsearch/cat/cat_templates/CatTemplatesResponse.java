
package org.elasticsearch.cat.cat_templates;

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
import org.elasticsearch.cat.cat_templates.*;

public class CatTemplatesResponse  implements XContentable<CatTemplatesResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTemplatesRecord> _records;
  public List<CatTemplatesRecord> getRecords() { return this._records; }
  public CatTemplatesResponse setRecords(List<CatTemplatesRecord> val) { this._records = val; return this; }


  
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
  public CatTemplatesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTemplatesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTemplatesResponse, Void> PARSER =
    new ObjectParser<>(CatTemplatesResponse.class.getName(), false, CatTemplatesResponse::new);

  static {
    PARSER.declareObjectArray(CatTemplatesResponse::setRecords, (p, t) -> CatTemplatesRecord.PARSER.apply(p, t), RECORDS);
  }

}
