
package org.elasticsearch.x_pack.info.x_pack_usage;

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
import org.elasticsearch.internal.*;

public class RealmUsage  implements XContentable<RealmUsage> {
  
  static final ParseField NAME = new ParseField("name");
  private List<String> _name;
  public List<String> getName() { return this._name; }
  public RealmUsage setName(List<String> val) { this._name = val; return this; }


  static final ParseField ORDER = new ParseField("order");
  private List<Long> _order;
  public List<Long> getOrder() { return this._order; }
  public RealmUsage setOrder(List<Long> val) { this._order = val; return this; }


  static final ParseField SIZE = new ParseField("size");
  private List<Long> _size;
  public List<Long> getSize() { return this._size; }
  public RealmUsage setSize(List<Long> val) { this._size = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_name != null) {
      builder.array(NAME.getPreferredName(), _name);
    }
    if (_order != null) {
      builder.array(ORDER.getPreferredName(), _order);
    }
    if (_size != null) {
      builder.array(SIZE.getPreferredName(), _size);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RealmUsage fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RealmUsage.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RealmUsage, Void> PARSER =
    new ObjectParser<>(RealmUsage.class.getName(), false, RealmUsage::new);

  static {
    PARSER.declareStringArray(RealmUsage::setName, NAME);
    PARSER.declareLongArray(RealmUsage::setOrder, ORDER);
    PARSER.declareLongArray(RealmUsage::setSize, SIZE);
  }

}
