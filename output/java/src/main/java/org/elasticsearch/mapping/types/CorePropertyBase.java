
package org.elasticsearch.mapping.types;

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
import org.elasticsearch.mapping.types.*;

public class CorePropertyBase extends PropertyBase implements XContentable<CorePropertyBase> {
  
  static final ParseField COPY_TO = new ParseField("copy_to");
  private List<String> _copyTo;
  public List<String> getCopyTo() { return this._copyTo; }
  public CorePropertyBase setCopyTo(List<String> val) { this._copyTo = val; return this; }

  static final ParseField FIELDS = new ParseField("fields");
  private NamedContainer<String, IProperty> _fields;
  public NamedContainer<String, IProperty> getFields() { return this._fields; }
  public CorePropertyBase setFields(NamedContainer<String, IProperty> val) { this._fields = val; return this; }

  static final ParseField SIMILARITY = new ParseField("similarity");
  private String _similarity;
  public String getSimilarity() { return this._similarity; }
  public CorePropertyBase setSimilarity(String val) { this._similarity = val; return this; }

  static final ParseField STORE = new ParseField("store");
  private Boolean _store;
  public Boolean getStore() { return this._store; }
  public CorePropertyBase setStore(Boolean val) { this._store = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
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
  }

  @Override
  public CorePropertyBase fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CorePropertyBase.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CorePropertyBase, Void> PARSER =
    new ObjectParser<>(CorePropertyBase.class.getName(), false, CorePropertyBase::new);

  static {
    PARSER.declareStringArray(CorePropertyBase::setCopyTo, COPY_TO);
    PARSER.declareObject(CorePropertyBase::setFields, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> IProperty.PARSER.apply(pp, null)), FIELDS);
    PARSER.declareString(CorePropertyBase::setSimilarity, SIMILARITY);
    PARSER.declareBoolean(CorePropertyBase::setStore, STORE);
  }

}
