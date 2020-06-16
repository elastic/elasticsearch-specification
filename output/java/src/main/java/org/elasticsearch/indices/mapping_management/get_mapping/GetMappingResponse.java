
package org.elasticsearch.indices.mapping_management.get_mapping;

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
import org.elasticsearch.indices.mapping_management.get_mapping.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetMappingResponse extends DictionaryResponseBase<IndexName, IndexMappings> implements XContentable<GetMappingResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<IndexName, IndexMappings> _indices;
  public NamedContainer<IndexName, IndexMappings> getIndices() { return this._indices; }
  public GetMappingResponse setIndices(NamedContainer<IndexName, IndexMappings> val) { this._indices = val; return this; }


  
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
  public GetMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetMappingResponse, Void> PARSER =
    new ObjectParser<>(GetMappingResponse.class.getName(), false, GetMappingResponse::new);

  static {
    PARSER.declareObject(GetMappingResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> IndexMappings.PARSER.apply(pp, null)), INDICES);
  }

}
