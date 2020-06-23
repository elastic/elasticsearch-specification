
package org.elasticsearch.x_pack.machine_learning.preview_datafeed;

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


public class PreviewDatafeedResponse<TDocument>  implements XContentable<PreviewDatafeedResponse<TDocument>> {
  
  static final ParseField DATA = new ParseField("data");
  private List<TDocument> _data;
  public List<TDocument> getData() { return this._data; }
  public PreviewDatafeedResponse<TDocument> setData(List<TDocument> val) { this._data = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_data != null) {
      builder.array(DATA.getPreferredName(), _data);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PreviewDatafeedResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PreviewDatafeedResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PreviewDatafeedResponse, Void> PARSER =
    new ObjectParser<>(PreviewDatafeedResponse.class.getName(), false, PreviewDatafeedResponse::new);

  static {
    PARSER.declareObjectArray(PreviewDatafeedResponse::setData, (p, t) -> null /* TODO TDocument */, DATA);
  }

}
