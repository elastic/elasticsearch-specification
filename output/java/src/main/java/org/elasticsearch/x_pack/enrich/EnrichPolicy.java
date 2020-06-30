
package org.elasticsearch.x_pack.enrich;

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
import org.elasticsearch.common_abstractions.infer.indices.*;
import org.elasticsearch.common_abstractions.infer.field.*;

public class EnrichPolicy  implements XContentable<EnrichPolicy> {
  
  static final ParseField INDICES = new ParseField("indices");
  private Indices _indices;
  public Indices getIndices() { return this._indices; }
  public EnrichPolicy setIndices(Indices val) { this._indices = val; return this; }


  static final ParseField MATCH_FIELD = new ParseField("match_field");
  private Field _matchField;
  public Field getMatchField() { return this._matchField; }
  public EnrichPolicy setMatchField(Field val) { this._matchField = val; return this; }


  static final ParseField ENRICH_FIELDS = new ParseField("enrich_fields");
  private List<Field> _enrichFields;
  public List<Field> getEnrichFields() { return this._enrichFields; }
  public EnrichPolicy setEnrichFields(List<Field> val) { this._enrichFields = val; return this; }


  static final ParseField QUERY = new ParseField("query");
  private String _query;
  public String getQuery() { return this._query; }
  public EnrichPolicy setQuery(String val) { this._query = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_indices != null) {
      builder.field(INDICES.getPreferredName());
      _indices.toXContent(builder, params);
    }
    if (_matchField != null) {
      builder.field(MATCH_FIELD.getPreferredName());
      _matchField.toXContent(builder, params);
    }
    if (_enrichFields != null) {
      builder.array(ENRICH_FIELDS.getPreferredName(), _enrichFields);
    }
    if (_query != null) {
      builder.field(QUERY.getPreferredName(), _query);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public EnrichPolicy fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return EnrichPolicy.PARSER.apply(parser, null);
  }

  public static final ObjectParser<EnrichPolicy, Void> PARSER =
    new ObjectParser<>(EnrichPolicy.class.getName(), false, EnrichPolicy::new);

  static {
    PARSER.declareObject(EnrichPolicy::setIndices, (p, t) -> Indices.createFrom(p), INDICES);
    PARSER.declareObject(EnrichPolicy::setMatchField, (p, t) -> Field.createFrom(p), MATCH_FIELD);
    PARSER.declareObjectArray(EnrichPolicy::setEnrichFields, (p, t) -> Field.createFrom(p), ENRICH_FIELDS);
    PARSER.declareString(EnrichPolicy::setQuery, QUERY);
  }

}
