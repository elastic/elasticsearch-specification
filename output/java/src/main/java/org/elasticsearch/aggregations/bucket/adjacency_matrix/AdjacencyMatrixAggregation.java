
package org.elasticsearch.aggregations.bucket.adjacency_matrix;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.query_dsl.abstractions.container.*;

public class AdjacencyMatrixAggregation  implements XContentable<AdjacencyMatrixAggregation> {
  
  static final ParseField FILTERS = new ParseField("filters");
  private NamedContainer<String, QueryContainer> _filters;
  public NamedContainer<String, QueryContainer> getFilters() { return this._filters; }
  public AdjacencyMatrixAggregation setFilters(NamedContainer<String, QueryContainer> val) { this._filters = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_filters != null) {
      builder.field(FILTERS.getPreferredName());
      _filters.toXContent(builder, params);
    }
  }

  @Override
  public AdjacencyMatrixAggregation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return AdjacencyMatrixAggregation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<AdjacencyMatrixAggregation, Void> PARSER =
    new ObjectParser<>(AdjacencyMatrixAggregation.class.getName(), false, AdjacencyMatrixAggregation::new);

  static {
    PARSER.declareObject(AdjacencyMatrixAggregation::setFilters, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> QueryContainer.PARSER.apply(pp, null)), FILTERS);
  }

}
