
package org.elasticsearch.indices.alias_management.get_alias;

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
import org.elasticsearch.indices.alias_management.get_alias.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetAliasResponse extends DictionaryResponseBase<IndexName, IndexAliases> implements XContentable<GetAliasResponse> {
  
  static final ParseField INDICES = new ParseField("indices");
  private NamedContainer<IndexName, IndexAliases> _indices;
  public NamedContainer<IndexName, IndexAliases> getIndices() { return this._indices; }
  public GetAliasResponse setIndices(NamedContainer<IndexName, IndexAliases> val) { this._indices = val; return this; }


  
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
  public GetAliasResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetAliasResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetAliasResponse, Void> PARSER =
    new ObjectParser<>(GetAliasResponse.class.getName(), false, GetAliasResponse::new);

  static {
    PARSER.declareObject(GetAliasResponse::setIndices, (p, t) -> new NamedContainer<>(n -> () -> new IndexName(n),pp -> IndexAliases.PARSER.apply(pp, null)), INDICES);
  }

}
