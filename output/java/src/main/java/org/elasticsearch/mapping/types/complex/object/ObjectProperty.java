
package org.elasticsearch.mapping.types.complex.object;

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
import org.elasticsearch.common_abstractions.infer.property_name.*;
import org.elasticsearch.mapping.types.*;

public class ObjectProperty  implements XContentable<ObjectProperty> {
  
  static final ParseField DYNAMIC = new ParseField("dynamic");
  private Either<Boolean, DynamicMapping> _dynamic;
  public Either<Boolean, DynamicMapping> getDynamic() { return this._dynamic; }
  public ObjectProperty setDynamic(Either<Boolean, DynamicMapping> val) { this._dynamic = val; return this; }


  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public ObjectProperty setEnabled(Boolean val) { this._enabled = val; return this; }


  static final ParseField PROPERTIES = new ParseField("properties");
  private NamedContainer<PropertyName, IProperty> _properties;
  public NamedContainer<PropertyName, IProperty> getProperties() { return this._properties; }
  public ObjectProperty setProperties(NamedContainer<PropertyName, IProperty> val) { this._properties = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_dynamic != null) {
      builder.field(DYNAMIC.getPreferredName());
      _dynamic.map(builder::value, r-> r.toXContent(builder, params));
    }
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_properties != null) {
      builder.field(PROPERTIES.getPreferredName());
      _properties.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ObjectProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ObjectProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ObjectProperty, Void> PARSER =
    new ObjectParser<>(ObjectProperty.class.getName(), false, ObjectProperty::new);

  static {
    PARSER.declareObject(ObjectProperty::setDynamic, (p, t) ->  new Either<Boolean, DynamicMapping>() /* TODO UnionOf */, DYNAMIC);
    PARSER.declareBoolean(ObjectProperty::setEnabled, ENABLED);
    PARSER.declareObject(ObjectProperty::setProperties, (p, t) -> new NamedContainer<>(n -> () -> new PropertyName(n),pp -> IProperty.PARSER.apply(pp, null)), PROPERTIES);
  }

}
