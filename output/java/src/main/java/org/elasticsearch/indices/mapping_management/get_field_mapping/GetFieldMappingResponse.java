
package org.elasticsearch.indices.mapping_management.get_field_mapping;

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
import org.elasticsearch.indices.mapping_management.get_field_mapping.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetFieldMappingResponse extends DictionaryResponseBase<IndexName, TypeFieldMappings> implements XContentable<GetFieldMappingResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<IndexName, TypeFieldMappings> _indices;
  public NamedContainer<IndexName, TypeFieldMappings> getIndices() { return this._indices; }
  public GetFieldMappingResponse setIndices(NamedContainer<IndexName, TypeFieldMappings> val) { this._indices = val; return this; }


  
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
  public GetFieldMappingResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetFieldMappingResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetFieldMappingResponse, Void> PARSER =
    new ObjectParser<>(GetFieldMappingResponse.class.getName(), false, GetFieldMappingResponse::new);

  static {
    PARSER.declareObject(GetFieldMappingResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> TypeFieldMappings.PARSER.apply(pp, null)), INDICES);
  }

}
