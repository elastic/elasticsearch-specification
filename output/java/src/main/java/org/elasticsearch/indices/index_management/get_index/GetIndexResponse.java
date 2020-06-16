
package org.elasticsearch.indices.index_management.get_index;

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
import org.elasticsearch.common_abstractions.infer.index_name.*;
import org.elasticsearch.index_modules.index_settings.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetIndexResponse extends DictionaryResponseBase<IndexName, IndexState> implements XContentable<GetIndexResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<IndexName, IndexState> _indices;
  public NamedContainer<IndexName, IndexState> getIndices() { return this._indices; }
  public GetIndexResponse setIndices(NamedContainer<IndexName, IndexState> val) { this._indices = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetIndexResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexResponse, Void> PARSER =
    new ObjectParser<>(GetIndexResponse.class.getName(), false, GetIndexResponse::new);

  static {
    PARSER.declareObject(GetIndexResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> IndexState.PARSER.apply(pp, null)), INDICES);
  }

}
