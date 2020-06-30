
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
import org.elasticsearch.common_abstractions.infer.field.*;
import org.elasticsearch.common_abstractions.infer.property_name.*;
import org.elasticsearch.mapping.types.*;

public class CorePropertyBase  implements XContentable<CorePropertyBase> {
  
  static final ParseField COPY_TO = new ParseField("copy_to");
  private List<Field> _copyTo;
  public List<Field> getCopyTo() { return this._copyTo; }
  public CorePropertyBase setCopyTo(List<Field> val) { this._copyTo = val; return this; }


  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<PropertyName, IProperty> _fields;
  public NamedContainer<PropertyName, IProperty> getFields() { return this._fields; }
  public CorePropertyBase setFields(NamedContainer<PropertyName, IProperty> val) { this._fields = val; return this; }


  static final ParseField SIMILARITY = new ParseField("similarity");
  private String _similarity;
  public String getSimilarity() { return this._similarity; }
  public CorePropertyBase setSimilarity(String val) { this._similarity = val; return this; }


  static final ParseField STORE = new ParseField("store");
  private Boolean _store;
  public Boolean getStore() { return this._store; }
  public CorePropertyBase setStore(Boolean val) { this._store = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_copyTo != null) {
      builder.array(COPY_TO.getPreferredName(), _copyTo);
    }
    if (_fields != null) {
      builder.field(FIELDS.getPreferredName());
      _fields.toXContent(builder, params);
    }
    if (_similarity != null) {
      builder.field(SIMILARITY.getPreferredName(), _similarity);
    }
    if (_store != null) {
      builder.field(STORE.getPreferredName(), _store);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CorePropertyBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CorePropertyBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CorePropertyBase, Void> PARSER =
    new ObjectParser<>(CorePropertyBase.class.getName(), false, CorePropertyBase::new);

  static {
    PARSER.declareObjectArray(CorePropertyBase::setCopyTo, (p, t) -> Field.createFrom(p), COPY_TO);
    PARSER.declareObject(CorePropertyBase::setFields, (p, t) -> new NamedContainer<>(n -> () -> new PropertyName(n),pp -> IProperty.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareString(CorePropertyBase::setSimilarity, SIMILARITY);
    PARSER.declareBoolean(CorePropertyBase::setStore, STORE);
  }

}
