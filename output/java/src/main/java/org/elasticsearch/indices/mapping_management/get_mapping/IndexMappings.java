
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
import org.elasticsearch.mapping.*;

public class IndexMappings  implements XContentable<IndexMappings> {
  
  static final ParseField ITEM = new ParseField("item");
  private TypeMapping _item;
  public TypeMapping getItem() { return this._item; }
  public IndexMappings setItem(TypeMapping val) { this._item = val; return this; }


  static final ParseField MAPPINGS = new ParseField("mappings");
  private TypeMapping _mappings;
  public TypeMapping getMappings() { return this._mappings; }
  public IndexMappings setMappings(TypeMapping val) { this._mappings = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_item != null) {
      builder.field(ITEM.getPreferredName());
      _item.toXContent(builder, params);
    }
    if (_mappings != null) {
      builder.field(MAPPINGS.getPreferredName());
      _mappings.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexMappings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexMappings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexMappings, Void> PARSER =
    new ObjectParser<>(IndexMappings.class.getName(), false, IndexMappings::new);

  static {
    PARSER.declareObject(IndexMappings::setItem, (p, t) -> TypeMapping.PARSER.apply(p, t), ITEM);
    PARSER.declareObject(IndexMappings::setMappings, (p, t) -> TypeMapping.PARSER.apply(p, t), MAPPINGS);
  }

}
