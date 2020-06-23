
package org.elasticsearch.query_dsl.joining.parent_id;

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
import org.elasticsearch.common_abstractions.infer.id.*;
import org.elasticsearch.common_abstractions.infer.relation_name.*;

public class ParentIdQuery  implements XContentable<ParentIdQuery> {
  
  static final ParseField ID = new ParseField("id");
  private Id _id;
  public Id getId() { return this._id; }
  public ParentIdQuery setId(Id val) { this._id = val; return this; }


  static final ParseField IGNORE_UNMAPPED = new ParseField("ignore_unmapped");
  private Boolean _ignoreUnmapped;
  public Boolean getIgnoreUnmapped() { return this._ignoreUnmapped; }
  public ParentIdQuery setIgnoreUnmapped(Boolean val) { this._ignoreUnmapped = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private RelationName _type;
  public RelationName getType() { return this._type; }
  public ParentIdQuery setType(RelationName val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_id != null) {
      builder.field(ID.getPreferredName());
      _id.toXContent(builder, params);
    }
    if (_ignoreUnmapped != null) {
      builder.field(IGNORE_UNMAPPED.getPreferredName(), _ignoreUnmapped);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ParentIdQuery fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ParentIdQuery.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ParentIdQuery, Void> PARSER =
    new ObjectParser<>(ParentIdQuery.class.getName(), false, ParentIdQuery::new);

  static {
    PARSER.declareObject(ParentIdQuery::setId, (p, t) -> Id.createFrom(p), ID);
    PARSER.declareBoolean(ParentIdQuery::setIgnoreUnmapped, IGNORE_UNMAPPED);
    PARSER.declareObject(ParentIdQuery::setType, (p, t) -> RelationName.createFrom(p), TYPE);
  }

}
