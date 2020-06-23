
package org.elasticsearch.cat.cat_trained_models;

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
import org.elasticsearch.cat.cat_trained_models.*;

public class CatTrainedModelsResponse  implements XContentable<CatTrainedModelsResponse> {
  
  static final ParseField RECORDS = new ParseField("records");
  private List<CatTrainedModelsRecord> _records;
  public List<CatTrainedModelsRecord> getRecords() { return this._records; }
  public CatTrainedModelsResponse setRecords(List<CatTrainedModelsRecord> val) { this._records = val; return this; }


  
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
  public CatTrainedModelsResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CatTrainedModelsResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CatTrainedModelsResponse, Void> PARSER =
    new ObjectParser<>(CatTrainedModelsResponse.class.getName(), false, CatTrainedModelsResponse::new);

  static {
    PARSER.declareObjectArray(CatTrainedModelsResponse::setRecords, (p, t) -> CatTrainedModelsRecord.PARSER.apply(p, t), RECORDS);
  }

}
