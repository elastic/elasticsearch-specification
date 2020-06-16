
package org.elasticsearch.mapping.types;

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
import org.elasticsearch.common_abstractions.infer.property_name.*;

public class PropertyBase  implements XContentable<PropertyBase> {
  
  static final ParseField LOCAL_METADATA = new ParseField("local_metadata");
  private NamedContainer<String, Object> _localMetadata;
  public NamedContainer<String, Object> getLocalMetadata() { return this._localMetadata; }
  public PropertyBase setLocalMetadata(NamedContainer<String, Object> val) { this._localMetadata = val; return this; }


  static final ParseField META = new ParseField("meta");
  private NamedContainer<String, String> _meta;
  public NamedContainer<String, String> getMeta() { return this._meta; }
  public PropertyBase setMeta(NamedContainer<String, String> val) { this._meta = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private PropertyName _name;
  public PropertyName getName() { return this._name; }
  public PropertyBase setName(PropertyName val) { this._name = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public PropertyBase setType(String val) { this._type = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_localMetadata != null) {
      builder.field(LOCAL_METADATA.getPreferredName());
      _localMetadata.toXContent(builder, params);
    }
    if (_meta != null) {
      builder.field(META.getPreferredName());
      _meta.toXContent(builder, params);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName());
      _name.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName(), _type);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PropertyBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PropertyBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PropertyBase, Void> PARSER =
    new ObjectParser<>(PropertyBase.class.getName(), false, PropertyBase::new);

  static {
    PARSER.declareObject(PropertyBase::setLocalMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), LOCAL_METADATA);
    PARSER.declareObject(PropertyBase::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), META);
    PARSER.declareObject(PropertyBase::setName, (p, t) -> PropertyName.createFrom(p), NAME);
    PARSER.declareString(PropertyBase::setType, TYPE);
  }

}
