
package org.elasticsearch.indices.mapping_management.get_field_mapping;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;
import org.elasticsearch.mapping.meta_fields.*;

public class TypeFieldMappings  implements XContentable<TypeFieldMappings> {
  
  static final ParseField MAPPINGS = new ParseField("mappings");
  private NamedContainer<String, FieldMapping> _mappings;
  public NamedContainer<String, FieldMapping> getMappings() { return this._mappings; }
  public TypeFieldMappings setMappings(NamedContainer<String, FieldMapping> val) { this._mappings = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_mappings != null) {
      builder.field(MAPPINGS.getPreferredName());
      _mappings.toXContent(builder, params);
    }
  }

  @Override
  public TypeFieldMappings fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return TypeFieldMappings.PARSER.apply(parser, null);
  }

  public static final ObjectParser<TypeFieldMappings, Void> PARSER =
    new ObjectParser<>(TypeFieldMappings.class.getName(), false, TypeFieldMappings::new);

  static {
    PARSER.declareObject(TypeFieldMappings::setMappings, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> FieldMapping.PARSER.apply(pp, null)), MAPPINGS);
  }

}
