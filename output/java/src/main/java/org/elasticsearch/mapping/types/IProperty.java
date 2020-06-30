
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

public class IProperty  implements XContentable<IProperty> {
  
  static final ParseField LOCAL_METADATA = new ParseField("local_metadata");
  private NamedContainer<String, Object> _localMetadata;
  public NamedContainer<String, Object> getLocalMetadata() { return this._localMetadata; }
  public IProperty setLocalMetadata(NamedContainer<String, Object> val) { this._localMetadata = val; return this; }


  static final ParseField META = new ParseField("meta");
  private NamedContainer<String, String> _meta;
  public NamedContainer<String, String> getMeta() { return this._meta; }
  public IProperty setMeta(NamedContainer<String, String> val) { this._meta = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private PropertyName _name;
  public PropertyName getName() { return this._name; }
  public IProperty setName(PropertyName val) { this._name = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private String _type;
  public String getType() { return this._type; }
  public IProperty setType(String val) { this._type = val; return this; }


  
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
  public IProperty fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IProperty.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IProperty, Void> PARSER =
    new ObjectParser<>(IProperty.class.getName(), false, IProperty::new);

  static {
    PARSER.declareObject(IProperty::setLocalMetadata, (p, t) -> new NamedContainer<>(n -> () -> n,XContentParser::binaryValue), LOCAL_METADATA);
    PARSER.declareObject(IProperty::setMeta, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> pp.text()), META);
    PARSER.declareObject(IProperty::setName, (p, t) -> PropertyName.createFrom(p), NAME);
    PARSER.declareString(IProperty::setType, TYPE);
  }

}
